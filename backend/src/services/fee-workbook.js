const clean = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();

export const normalizeFeeName = (value) =>
  clean(value)
    .toLocaleLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\bwith\s+(specialisation|specialization)\s+in\b/g, ' ')
    .replace(/\b(specialisation|specialization)\b/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function cellValue(cell) {
  const value = cell.value;
  if (value == null) return '';
  if (typeof value !== 'object') return value;
  if ('result' in value && value.result != null) return value.result;
  if ('richText' in value) return value.richText.map((part) => part.text || '').join('');
  if ('text' in value) return value.text || '';
  return '';
}

function text(cell) {
  return clean(cellValue(cell));
}

function numeric(cell) {
  const value = cellValue(cell);
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const cleaned = value.replace(/,/g, '').trim();
    if (!cleaned) return null;
    const parsed = Number(cleaned);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

function tokens(value) {
  return new Set(normalizeFeeName(value).split(' ').filter((token) => token.length > 1));
}

function similarity(left, right) {
  const a = tokens(left);
  const b = tokens(right);
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const token of a) if (b.has(token)) shared += 1;
  return (2 * shared) / (a.size + b.size);
}

function courseMatch(sheet, courses) {
  const sources = [sheet.courseTitle, sheet.sheetName, ...sheet.programNames].filter(Boolean);
  const scored = courses
    .map((course) => ({
      course,
      score: Math.max(...sources.map((source) => similarity(source, course.name))),
      exact: sources.some((source) => normalizeFeeName(source) === normalizeFeeName(course.name)),
    }))
    .filter((item) => item.exact || item.score >= 0.72)
    .sort((left, right) => Number(right.exact) - Number(left.exact) || right.score - left.score);
  const best = scored[0];
  const second = scored[1];
  const confident =
    !!best && (best.exact || best.score >= 0.9) && (!second || best.score - second.score >= 0.08);
  return {
    status: confident ? 'matched' : scored.length ? 'ambiguous' : 'unmatched',
    courseId: confident ? String(best.course._id) : null,
    courseName: confident ? best.course.name : null,
    candidates: scored.slice(0, 5).map(({ course, score, exact }) => ({
      courseId: String(course._id),
      courseName: course.name,
      score: Number((exact ? 1 : score).toFixed(3)),
    })),
  };
}

function paymentYear(value) {
  const match = clean(value).match(/(\d+)(?:st|nd|rd|th)\s+Year/i);
  return match ? Number(match[1]) : null;
}

function semesterNumber(value) {
  const match = clean(value).match(/(\d+)(?:st|nd|rd|th)\s+Sem/i);
  return match ? Number(match[1]) : null;
}

function lineType(head) {
  const value = normalizeFeeName(head);
  if (value.includes('scholarship')) return { category: 'discount', frequency: 'semester' };
  if (value.includes('admission fee') || value.includes('enrolment fee') || value.includes('caution money'))
    return { category: 'fee', frequency: 'one-time' };
  if (value.includes('half yearly')) return { category: 'payment-option', frequency: 'half-yearly' };
  if (value.includes('yearly')) return { category: 'payment-option', frequency: 'yearly' };
  if (value.match(/\d+ (st|nd|rd|th) sem/)) return { category: 'fee', frequency: 'semester' };
  return { category: 'fee', frequency: 'semester' };
}

function actualLastRow(sheet) {
  let last = 0;
  for (let row = 1; row <= sheet.rowCount; row += 1) {
    let populated = false;
    sheet.getRow(row).eachCell({ includeEmpty: false }, (cell) => {
      if (text(cell)) populated = true;
    });
    if (populated) last = row;
  }
  return last;
}

function programsFromSubtitle(subtitle) {
  const withoutPrefix = clean(subtitle).replace(/^Fee Structure(?: Applicable)?(?: for)?(?: Intake)?\s*\d{4}(?:-\d{2})?\s*/i, '');
  return withoutPrefix.split(/\s*\|\|\s*/).map(clean).filter(Boolean);
}

function parseSheet(sheet) {
  const courseTitle = text(sheet.getCell(1, 1));
  const subtitle = text(sheet.getCell(2, 1));
  const yearMatch = subtitle.match(/(?:Intake\s+|Structure:\s*)(20\d{2})/i);
  const intakeYear = yearMatch ? Number(yearMatch[1]) : null;
  const lastRow = actualLastRow(sheet);
  const eligibility = [];
  for (let column = 3; column <= Math.min(sheet.columnCount, 30); column += 1) {
    const label = text(sheet.getCell(3, column));
    if (label) eligibility.push({ column, label });
  }
  const lines = [];
  const heads = new Set();
  const warnings = [];
  for (let row = 4; row <= lastRow; row += 1) {
    const columnA = text(sheet.getCell(row, 1));
    const columnB = text(sheet.getCell(row, 2));
    if (/^Total Fee/i.test(columnA) || /^Total Fee/i.test(columnB)) continue;
    if (/^One Time Payable$/i.test(columnA)) {
      const sourceHead = text(sheet.getCell(row, 3));
      let amount = null;
      let sourceColumn = null;
      for (let column = 4; column <= Math.min(sheet.columnCount, 10); column += 1) {
        const found = numeric(sheet.getCell(row, column));
        if (found != null) {
          amount = found;
          sourceColumn = column;
          break;
        }
      }
      if (sourceHead && amount != null) {
        heads.add(sourceHead);
        lines.push({
          sourceHead,
          amount,
          category: 'fee',
          frequency: 'one-time',
          academicYear: null,
          semester: null,
          eligibilityBand: 'All candidates',
          sourceCell: `${sheet.name}!${sheet.getCell(row, sourceColumn).address}`,
        });
      }
      continue;
    }
    if (/^Other Charges/i.test(columnA) || (!columnA && /Payment/i.test(text(sheet.getCell(row, 3))))) {
      const option = text(sheet.getCell(row, 3));
      let amount = null;
      let sourceColumn = null;
      for (let column = 4; column <= Math.min(sheet.columnCount, 10); column += 1) {
        const found = numeric(sheet.getCell(row, column));
        if (found != null) {
          amount = found;
          sourceColumn = column;
          break;
        }
      }
      if (option && amount != null) {
        const sourceHead = `Other Charges - ${option}`;
        heads.add(sourceHead);
        lines.push({
          sourceHead,
          amount,
          category: 'fee',
          frequency: /half/i.test(option) ? 'half-yearly' : 'yearly',
          academicYear: null,
          semester: null,
          eligibilityBand: 'All candidates',
          sourceCell: `${sheet.name}!${sheet.getCell(row, sourceColumn).address}`,
        });
      }
      continue;
    }
    const isFeeRow =
      /Tuition Fee|Scholarship|Yearly Payment|Half Yearly Payment/i.test(columnB) ||
      semesterNumber(columnB) != null;
    if (!isFeeRow) continue;
    const meta = lineType(columnB);
    heads.add(columnB);
    for (const header of eligibility) {
      const amount = numeric(sheet.getCell(row, header.column));
      if (amount == null) continue;
      lines.push({
        sourceHead: columnB,
        amount,
        ...meta,
        academicYear: paymentYear(columnA),
        semester: semesterNumber(columnB),
        eligibilityBand: header.label,
        sourceCell: `${sheet.name}!${sheet.getCell(row, header.column).address}`,
      });
    }
  }
  if (!intakeYear) warnings.push('The intake year could not be detected.');
  if (!lines.length) warnings.push('No importable fee rows were detected.');
  return {
    sheetName: sheet.name,
    courseTitle,
    subtitle,
    programNames: programsFromSubtitle(subtitle),
    intakeYear,
    lineCount: lines.length,
    sourceHeads: [...heads],
    warnings,
    lines,
  };
}

export function parseFeeWorkbook(workbook, courses) {
  return workbook.worksheets
    .filter((sheet) => sheet.state === 'visible')
    .map(parseSheet)
    .map((sheet) => ({ ...sheet, match: courseMatch(sheet, courses) }));
}

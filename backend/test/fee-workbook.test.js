import assert from 'node:assert/strict';
import test from 'node:test';
import ExcelJS from 'exceljs';
import { normalizeFeeName, parseFeeWorkbook } from '../src/services/fee-workbook.js';

test('normalizes specialization wording without creating a specialization dimension', () => {
  assert.equal(
    normalizeFeeName('B.Tech CSE with Specialisation in Cyber Security'),
    'b tech cse cyber security',
  );
});

test('parses course fee matrices, one-time fees, and other charges', () => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('btech-cse');
  sheet.addRow(['B.Tech Computer Science and Engineering']);
  sheet.addRow(['Fee Structure Applicable for Intake 2026 B.Tech CSE']);
  sheet.addRow(['Sem', 'Heads', 'All Candidates']);
  sheet.addRow(['1st Year Payment Options', 'Tuition Fee Per Semester', 100000]);
  sheet.addRow(['1st Year Payment Options', 'Scholarship', 5000]);
  sheet.addRow(['One Time Payable', 'One Time Payable', 'Admission Fee', '', 15000]);
  sheet.addRow(['Other Charges^', 'Other Charges^', 'Yearly Payment', '', 20500]);
  const [parsed] = parseFeeWorkbook(workbook, [
    { _id: 'course-1', name: 'B.Tech Computer Science and Engineering' },
  ]);
  assert.equal(parsed.match.status, 'matched');
  assert.equal(parsed.intakeYear, 2026);
  assert.equal(parsed.lineCount, 4);
  assert.deepEqual(
    parsed.lines.map((line) => [line.sourceHead, line.amount, line.frequency]),
    [
      ['Tuition Fee Per Semester', 100000, 'semester'],
      ['Scholarship', 5000, 'semester'],
      ['Admission Fee', 15000, 'one-time'],
      ['Other Charges - Yearly Payment', 20500, 'yearly'],
    ],
  );
});

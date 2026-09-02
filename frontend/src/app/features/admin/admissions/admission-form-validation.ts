import { Admission, FormSection, VisibilityCondition } from '../../../core/models';

export interface AdmissionValidationIssue {
  id: string;
  sectionId: string;
  sectionName: string;
  subsectionId: string;
  subsectionName: string;
  fieldId?: string;
  fieldName?: string;
  entryIndex?: number;
  kind: 'required-field' | 'minimum-entry';
  path: string;
}

export function hasAdmissionValue(value: unknown): boolean {
  if (value === null || value === undefined || value === '') return false;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

export function matchesAdmissionVisibility(
  condition: VisibilityCondition | null,
  values: Record<string, unknown>,
  masterAliases: Record<string, string[]> = {},
): boolean {
  if (!condition) return true;
  const current = values[condition.fieldId];
  const candidates = valuesWithAliases(current, masterAliases);
  const expected = normalized(condition.value);
  if (condition.operator === 'not-equals') {
    return !candidates.some((value) => normalized(value) === expected);
  }
  if (condition.operator === 'contains') {
    return candidates.some((value) => normalized(value).includes(expected));
  }
  if (condition.operator === 'is-empty') {
    return current == null || current === '' || (Array.isArray(current) && !current.length);
  }
  if (condition.operator === 'is-not-empty') {
    return current != null && current !== '' && (!Array.isArray(current) || current.length > 0);
  }
  return candidates.some((value) => normalized(value) === expected);
}

export function admissionValidationIssues(item: Admission | null): AdmissionValidationIssue[] {
  if (!item) return [];
  return item.formSnapshot.sections
    .filter((section) => section.isActive)
    .flatMap((section) => sectionIssues(item, section));
}

export function admissionSectionIssues(
  item: Admission | null,
  sectionId: string,
): AdmissionValidationIssue[] {
  if (!item) return [];
  const section = item.formSnapshot.sections.find((entry) => entry.id === sectionId);
  return section?.isActive ? sectionIssues(item, section) : [];
}

function sectionIssues(item: Admission, section: FormSection): AdmissionValidationIssue[] {
  const issues: AdmissionValidationIssue[] = [];
  const globalValues = item.responses || {};
  const aliases = admissionMasterAliases(item);
  const foreignSelected = /foreign|international|nri/i.test(
    `${item.studentTypeName || ''} ${item.domicileName || ''}`,
  );

  for (const subsection of section.subsections.filter(
    (entry) =>
      entry.isActive &&
      (matchesAdmissionVisibility(entry.visibilityCondition, globalValues, aliases) ||
        (foreignSelected &&
          entry.fields.some(
            (field) => field.isActive && field.dataSource?.masterTypeSlug === 'country',
          ))),
  )) {
    const fields = subsection.fields.filter((field) => field.isActive && field.isRequired);
    if (subsection.isRepeatable) {
      const entries = item.repeatableResponses[subsection.id] || [];
      if (entries.length < subsection.minEntries) {
        const missing = subsection.minEntries - entries.length;
        issues.push({
          id: `${section.id}:${subsection.id}:minimum-entry`,
          sectionId: section.id,
          sectionName: section.name,
          subsectionId: subsection.id,
          subsectionName: subsection.name,
          kind: 'minimum-entry',
          path: `${section.name} / ${subsection.name}: ${missing} required entr${missing === 1 ? 'y is' : 'ies are'} missing`,
        });
      }
      entries.forEach((entry, entryIndex) => {
        fields
          .filter(
            (field) =>
              matchesAdmissionVisibility(field.visibilityCondition, entry, aliases) ||
              (foreignSelected && field.dataSource?.masterTypeSlug === 'country'),
          )
          .forEach((field) => {
            if (hasAdmissionValue(entry[field.id])) return;
            issues.push({
              id: `${section.id}:${subsection.id}:${entryIndex}:${field.id}`,
              sectionId: section.id,
              sectionName: section.name,
              subsectionId: subsection.id,
              subsectionName: subsection.name,
              fieldId: field.id,
              fieldName: field.name,
              entryIndex,
              kind: 'required-field',
              path: `${section.name} / ${subsection.name} ${entryIndex + 1} / ${field.name}`,
            });
          });
      });
      continue;
    }

    fields
      .filter(
        (field) =>
          matchesAdmissionVisibility(field.visibilityCondition, globalValues, aliases) ||
          (foreignSelected && field.dataSource?.masterTypeSlug === 'country'),
      )
      .forEach((field) => {
        if (hasAdmissionValue(globalValues[field.id])) return;
        issues.push({
          id: `${section.id}:${subsection.id}:${field.id}`,
          sectionId: section.id,
          sectionName: section.name,
          subsectionId: subsection.id,
          subsectionName: subsection.name,
          fieldId: field.id,
          fieldName: field.name,
          kind: 'required-field',
          path: `${section.name} / ${subsection.name} / ${field.name}`,
        });
      });
  }

  return issues;
}

function admissionMasterAliases(item: Admission) {
  const pairs = [
    [item.domicileId, item.domicileName],
    [item.studentTypeId, item.studentTypeName],
    [item.countryId, item.countryName],
    [item.feeTypeId, item.feeTypeName],
  ];
  return Object.fromEntries(
    pairs
      .filter((pair): pair is [string, string] => Boolean(pair[0] && pair[1]))
      .map(([value, label]) => [value, [label]]),
  );
}

function valuesWithAliases(value: unknown, masterAliases: Record<string, string[]>) {
  const values = Array.isArray(value) ? value : [value];
  return values.flatMap((item) => [item, ...(masterAliases[String(item)] || [])]);
}

function normalized(value: unknown) {
  return String(value ?? '')
    .trim()
    .toLocaleLowerCase();
}

import { ObjectId } from 'bson';

export function validateSubmission(form, responses, repeatableResponses, masterAliases = {}) {
  const errors = [];
  const allValues = { ...responses };
  const foreignSelected = hasForeignSelection(form, allValues, masterAliases);
  for (const section of form.sections)
    for (const subsection of section.subsections) {
      const containsCountry = subsection.fields.some(
        (field) => field.isActive && field.dataSource?.masterTypeSlug === 'country',
      );
      if (
        !subsection.isActive ||
        (!conditionMatches(subsection.visibilityCondition, allValues, masterAliases) &&
          !(foreignSelected && containsCountry))
      )
        continue;
      if (subsection.isRepeatable) {
        const entries = repeatableResponses[subsection.id] || [];
        if (entries.length < (subsection.minEntries || 0))
          errors.push({
            fieldId: subsection.id,
            message: `Add at least ${subsection.minEntries} ${subsection.name} record(s).`,
          });
        entries.forEach((entry, index) =>
          validateFields(subsection.fields, entry, errors, index, masterAliases, foreignSelected),
        );
      } else
        validateFields(subsection.fields, responses, errors, null, masterAliases, foreignSelected);
    }
  return errors;
}

export function conditionMatches(condition, values, masterAliases = {}) {
  if (!condition) return true;
  const current = values[condition.fieldId];
  const candidates = valuesWithAliases(current, masterAliases);
  const expected = normalized(condition.value);
  switch (condition.operator) {
    case 'not-equals':
      return !candidates.some((value) => normalized(value) === expected);
    case 'contains':
      return candidates.some((value) => normalized(value).includes(expected));
    case 'is-empty':
      return current == null || current === '' || (Array.isArray(current) && !current.length);
    case 'is-not-empty':
      return current != null && current !== '' && (!Array.isArray(current) || current.length > 0);
    default:
      return candidates.some((value) => normalized(value) === expected);
  }
}

export async function masterValueAliases(database, responses, repeatableResponses = {}) {
  const ids = new Map();
  collectObjectIds(responses, ids);
  collectObjectIds(repeatableResponses, ids);
  if (!ids.size) return {};
  const values = await database
    .collection('masterValues')
    .find({ _id: { $in: [...ids.values()] } })
    .project({ name: 1, metadata: 1 })
    .toArray();
  return Object.fromEntries(
    values.map((value) => [
      String(value._id),
      [value.name, value.metadata?.code, value.metadata?.periodType].filter(Boolean),
    ]),
  );
}

function validateFields(
  fields,
  values,
  errors,
  entryIndex = null,
  masterAliases = {},
  foreignSelected = false,
) {
  for (const field of fields) {
    const countryRequired = foreignSelected && field.dataSource?.masterTypeSlug === 'country';
    if (
      !field.isActive ||
      (!conditionMatches(field.visibilityCondition, values, masterAliases) && !countryRequired)
    )
      continue;
    const value = values[field.id];
    const empty = value == null || value === '' || (Array.isArray(value) && !value.length);
    if (field.isRequired && empty)
      errors.push({ fieldId: field.id, entryIndex, message: `${field.name} is required.` });
    if (empty) continue;
    const length = String(value).length;
    if (field.validation?.minLength != null && length < field.validation.minLength)
      errors.push({
        fieldId: field.id,
        entryIndex,
        message: field.validation.message || `${field.name} is too short.`,
      });
    if (field.validation?.maxLength != null && length > field.validation.maxLength)
      errors.push({
        fieldId: field.id,
        entryIndex,
        message: field.validation.message || `${field.name} is too long.`,
      });
    if (field.validation?.pattern) {
      try {
        if (!new RegExp(field.validation.pattern).test(String(value)))
          errors.push({
            fieldId: field.id,
            entryIndex,
            message: field.validation.message || `${field.name} is invalid.`,
          });
      } catch {
        /* Admin can correct an invalid pattern without blocking existing drafts. */
      }
    }
  }
}

function hasForeignSelection(form, values, masterAliases) {
  return form.sections
    .flatMap((section) => section.subsections || [])
    .flatMap((subsection) => subsection.fields || [])
    .filter((field) => ['domicile', 'student-type'].includes(field.dataSource?.masterTypeSlug))
    .some((field) =>
      valuesWithAliases(values[field.id], masterAliases).some((value) =>
        /foreign|international|nri/i.test(String(value || '')),
      ),
    );
}

function valuesWithAliases(value, masterAliases) {
  const values = Array.isArray(value) ? value : [value];
  return values.flatMap((item) => [item, ...(masterAliases[String(item)] || [])]);
}

function normalized(value) {
  return String(value ?? '')
    .trim()
    .toLocaleLowerCase();
}

function collectObjectIds(value, output) {
  if (Array.isArray(value)) {
    for (const item of value) collectObjectIds(item, output);
    return;
  }
  if (value && typeof value === 'object') {
    for (const item of Object.values(value)) collectObjectIds(item, output);
    return;
  }
  if (typeof value === 'string' && ObjectId.isValid(value)) output.set(value, new ObjectId(value));
}

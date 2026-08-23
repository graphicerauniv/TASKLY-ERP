export function validateSubmission(form, responses, repeatableResponses) {
  const errors = [];
  const allValues = { ...responses };
  for (const section of form.sections)
    for (const subsection of section.subsections) {
      if (!subsection.isActive || !conditionMatches(subsection.visibilityCondition, allValues))
        continue;
      if (subsection.isRepeatable) {
        const entries = repeatableResponses[subsection.id] || [];
        if (entries.length < (subsection.minEntries || 0))
          errors.push({
            fieldId: subsection.id,
            message: `Add at least ${subsection.minEntries} ${subsection.name} record(s).`,
          });
        entries.forEach((entry, index) => validateFields(subsection.fields, entry, errors, index));
      } else validateFields(subsection.fields, responses, errors);
    }
  return errors;
}

export function conditionMatches(condition, values) {
  if (!condition) return true;
  const current = values[condition.fieldId];
  switch (condition.operator) {
    case 'not-equals':
      return current !== condition.value;
    case 'contains':
      return Array.isArray(current)
        ? current.includes(condition.value)
        : String(current ?? '').includes(String(condition.value));
    case 'is-empty':
      return current == null || current === '' || (Array.isArray(current) && !current.length);
    case 'is-not-empty':
      return current != null && current !== '' && (!Array.isArray(current) || current.length > 0);
    default:
      return String(current ?? '') === String(condition.value ?? '');
  }
}

function validateFields(fields, values, errors, entryIndex = null) {
  for (const field of fields) {
    if (!field.isActive || !conditionMatches(field.visibilityCondition, values)) continue;
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

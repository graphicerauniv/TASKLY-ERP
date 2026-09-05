export function hasAdmissionValue(value) {
    if (value === null || value === undefined || value === '')
        return false;
    if (Array.isArray(value))
        return value.length > 0;
    return true;
}
export function matchesAdmissionVisibility(condition, values, masterAliases = {}) {
    if (!condition)
        return true;
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
export function admissionValidationIssues(item) {
    if (!item)
        return [];
    return item.formSnapshot.sections
        .filter((section) => section.isActive)
        .flatMap((section) => sectionIssues(item, section));
}
export function admissionSectionIssues(item, sectionId) {
    if (!item)
        return [];
    const section = item.formSnapshot.sections.find((entry) => entry.id === sectionId);
    return section?.isActive ? sectionIssues(item, section) : [];
}
function sectionIssues(item, section) {
    const issues = [];
    const globalValues = item.responses || {};
    const aliases = admissionMasterAliases(item);
    const foreignSelected = /foreign|international|nri/i.test(`${item.studentTypeName || ''} ${item.domicileName || ''}`);
    for (const subsection of section.subsections.filter((entry) => entry.isActive &&
        (matchesAdmissionVisibility(entry.visibilityCondition, globalValues, aliases) ||
            (foreignSelected &&
                entry.fields.some((field) => field.isActive && field.dataSource?.masterTypeSlug === 'country'))))) {
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
                    .filter((field) => matchesAdmissionVisibility(field.visibilityCondition, entry, aliases) ||
                    (foreignSelected && field.dataSource?.masterTypeSlug === 'country'))
                    .forEach((field) => {
                    if (hasAdmissionValue(entry[field.id]))
                        return;
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
            .filter((field) => matchesAdmissionVisibility(field.visibilityCondition, globalValues, aliases) ||
            (foreignSelected && field.dataSource?.masterTypeSlug === 'country'))
            .forEach((field) => {
            if (hasAdmissionValue(globalValues[field.id]))
                return;
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
function admissionMasterAliases(item) {
    const pairs = [
        [item.domicileId, item.domicileName],
        [item.studentTypeId, item.studentTypeName],
        [item.countryId, item.countryName],
        [item.feeTypeId, item.feeTypeName],
    ];
    return Object.fromEntries(pairs
        .filter((pair) => Boolean(pair[0] && pair[1]))
        .map(([value, label]) => [value, [label]]));
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

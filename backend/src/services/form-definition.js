import { stableId } from '../lib/ids.js';
import { slugify } from '../lib/slug.js';
import { normalizeUploadConfig } from './upload-rules.js';

export const FIELD_TYPES = [
  'text',
  'number',
  'email',
  'mobile',
  'date',
  'textarea',
  'dropdown',
  'radio',
  'checkbox',
  'multi-select',
  'file',
  'image',
  'signature',
];
export const FORM_PURPOSES = ['admission', 'faculty', 'employee', 'general'];

function normalizeIdList(value, fallback = []) {
  return [...new Set((Array.isArray(value) ? value : fallback).map(String).filter(Boolean))];
}

export function normalizeForm(input, existing = {}) {
  const name = String(input.name || existing.name || '').trim();
  if (!name) throw badRequest('Form name is required.');
  const sections = Array.isArray(input.sections) ? input.sections : existing.sections || [];
  const fieldIds = new Set();
  const normalizedSections = sections.map((section, sectionIndex) => ({
    id: validStableId(section.id, 'sec') || stableId('sec'),
    name: requiredName(section.name, 'Super Section'),
    description: String(section.description || ''),
    isActive: section.isActive !== false,
    order: sectionIndex,
    subsections: (Array.isArray(section.subsections) ? section.subsections : []).map(
      (subsection, subsectionIndex) => ({
        id: validStableId(subsection.id, 'sub') || stableId('sub'),
        name: requiredName(subsection.name, 'Sub Section'),
        description: String(subsection.description || ''),
        isActive: subsection.isActive !== false,
        isRepeatable: Boolean(subsection.isRepeatable),
        minEntries: Math.max(0, Number(subsection.minEntries) || 0),
        maxEntries: subsection.maxEntries ? Math.max(1, Number(subsection.maxEntries)) : null,
        order: subsectionIndex,
        visibilityCondition: normalizeCondition(subsection.visibilityCondition),
        fields: (Array.isArray(subsection.fields) ? subsection.fields : []).map(
          (field, fieldIndex) => {
            const fieldId = validStableId(field.id, 'fld') || stableId('fld');
            if (fieldIds.has(fieldId)) throw badRequest(`Duplicate field ID: ${fieldId}`);
            fieldIds.add(fieldId);
            if (!FIELD_TYPES.includes(field.type))
              throw badRequest(`Unsupported field type: ${field.type}`);
            return {
              id: fieldId,
              name: requiredName(field.name, 'Field'),
              type: field.type,
              isRequired: Boolean(field.isRequired),
              isActive: field.isActive !== false,
              order: fieldIndex,
              placeholder: String(field.placeholder || ''),
              defaultValue: field.defaultValue ?? null,
              helpText: String(field.helpText || ''),
              options: normalizeOptions(field.options),
              dataSource: normalizeDataSource(field.dataSource),
              searchable: Boolean(field.searchable),
              searchConfig:
                field.searchConfig && typeof field.searchConfig === 'object'
                  ? field.searchConfig
                  : null,
              validation: normalizeValidation(field.validation),
              uploadConfig: normalizeUploadConfig(field.type, field.uploadConfig),
              visibilityCondition: normalizeCondition(field.visibilityCondition),
            };
          },
        ),
      }),
    ),
  }));
  const purpose = FORM_PURPOSES.includes(input.purpose)
    ? input.purpose
    : existing.purpose || 'admission';
  return {
    name,
    slug: existing.slug || slugify(name),
    description: String(input.description ?? existing.description ?? ''),
    purpose,
    codeGeneration: normalizeCodeGeneration(input.codeGeneration, existing.codeGeneration, purpose),
    destination: normalizeDestination(input.destination, existing.destination, purpose),
    destinationLockedAt: existing.destinationLockedAt || null,
    audience: {
      academicSessionIds: normalizeIdList(
        input.audience?.academicSessionIds,
        existing.audience?.academicSessionIds,
      ),
      universityIds: normalizeIdList(
        input.audience?.universityIds,
        existing.audience?.universityIds,
      ),
      collegeIds: normalizeIdList(input.audience?.collegeIds, existing.audience?.collegeIds),
      departmentIds: normalizeIdList(
        input.audience?.departmentIds,
        existing.audience?.departmentIds,
      ),
      levelIds: normalizeIdList(input.audience?.levelIds, existing.audience?.levelIds),
    },
    status: ['draft', 'published', 'archived'].includes(input.status)
      ? input.status
      : existing.status || 'draft',
    isActive: input.isActive ?? existing.isActive ?? true,
    sections: normalizedSections,
  };
}

function normalizeCodeGeneration(input, existing, purpose) {
  if (purpose === 'admission') return { enabled: false, prefix: '', digits: 6 };
  void input;
  void existing;
  return { enabled: true, prefix: '', digits: 8 };
}

function normalizeDestination(input, existing, purpose) {
  if (purpose === 'admission') return null;
  const source = input && typeof input === 'object' ? input : existing || {};
  return {
    navigationSectionId: cleanSectionId(source.navigationSectionId),
    navigationSectionName: cleanName(source.navigationSectionName),
    menuName: cleanName(source.menuName),
    databaseSectionId: cleanSectionId(source.databaseSectionId),
    databaseSectionName: cleanName(source.databaseSectionName),
  };
}

function cleanSectionId(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
}

function cleanName(value) {
  return String(value || '')
    .trim()
    .slice(0, 80);
}

export function activeForm(form) {
  return {
    ...form,
    sections: form.sections
      .filter((s) => s.isActive)
      .map((section) => ({
        ...section,
        subsections: section.subsections
          .filter((s) => s.isActive)
          .map((subsection) => ({
            ...subsection,
            fields: subsection.fields.filter((field) => field.isActive),
          })),
      })),
  };
}

function requiredName(value, label) {
  const name = String(value || '').trim();
  if (!name) throw badRequest(`${label} name is required.`);
  return name;
}
function validStableId(value, prefix) {
  return typeof value === 'string' && value.startsWith(`${prefix}_`) ? value : null;
}
function normalizeOptions(options) {
  if (!Array.isArray(options)) return [];
  return options
    .map((option) =>
      typeof option === 'string'
        ? { label: option, value: option }
        : {
            label: String(option.label || option.value || ''),
            value: String(option.value || option.label || ''),
          },
    )
    .filter((o) => o.label);
}
function normalizeDataSource(source) {
  if (!source || source.kind !== 'master' || !source.masterTypeSlug) return null;
  return {
    kind: 'master',
    masterTypeSlug: String(source.masterTypeSlug),
    parentFieldId: source.parentFieldId || null,
    labelField: 'name',
    valueField: source.valueField || '_id',
  };
}
function normalizeCondition(condition) {
  if (!condition?.fieldId) return null;
  return {
    fieldId: String(condition.fieldId),
    operator: condition.operator || 'equals',
    value: condition.value ?? true,
  };
}
function normalizeValidation(validation) {
  if (!validation || typeof validation !== 'object') return {};
  return {
    min: validation.min ?? null,
    max: validation.max ?? null,
    minLength: validation.minLength ?? null,
    maxLength: validation.maxLength ?? null,
    pattern: validation.pattern || '',
    message: validation.message || '',
  };
}
function badRequest(message) {
  const error = new Error(message);
  error.status = 400;
  return error;
}

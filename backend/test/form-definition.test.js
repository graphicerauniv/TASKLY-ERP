import test from 'node:test';
import assert from 'node:assert/strict';
import { ObjectId } from 'bson';
import { normalizeForm, activeForm } from '../src/services/form-definition.js';
import { conditionMatches, validateSubmission } from '../src/services/admission-validation.js';

test('normalizes ordered form configuration with stable identifiers', () => {
  const form = normalizeForm({
    name: 'Admission 2026',
    sections: [
      {
        name: 'Personal',
        subsections: [
          { name: 'Identity', fields: [{ name: 'Email', type: 'email', isRequired: true }] },
        ],
      },
    ],
  });
  assert.match(form.sections[0].id, /^sec_/);
  assert.match(form.sections[0].subsections[0].fields[0].id, /^fld_/);
  assert.equal(form.sections[0].order, 0);
});

test('removes disabled configuration from the published renderer', () => {
  const form = normalizeForm({
    name: 'Admission',
    sections: [
      { name: 'Hidden', isActive: false, subsections: [] },
      { name: 'Visible', subsections: [] },
    ],
  });
  assert.deepEqual(
    activeForm(form).sections.map((section) => section.name),
    ['Visible'],
  );
});

test('normalizes upload rules for image and document fields', () => {
  const form = normalizeForm({
    name: 'Uploads',
    sections: [
      {
        name: 'Documents',
        subsections: [
          {
            name: 'Files',
            fields: [
              {
                name: 'Photo',
                type: 'image',
                uploadConfig: { maxSizeMb: 2, allowedTypes: ['pdf'] },
              },
              {
                name: 'Certificates',
                type: 'file',
                uploadConfig: { maxSizeMb: 8, allowedTypes: ['pdf', 'word'] },
              },
            ],
          },
        ],
      },
    ],
  });
  const [photo, certificates] = form.sections[0].subsections[0].fields;
  assert.deepEqual(photo.uploadConfig, { maxSizeMb: 2, allowedTypes: ['image'] });
  assert.deepEqual(certificates.uploadConfig, {
    maxSizeMb: 8,
    allowedTypes: ['pdf', 'word'],
  });
});

test('validates required and repeatable admission responses', () => {
  const form = normalizeForm({
    name: 'Admission',
    sections: [
      {
        name: 'Qualification',
        subsections: [
          {
            name: 'Exams',
            isRepeatable: true,
            minEntries: 1,
            fields: [{ name: 'Board', type: 'text', isRequired: true }],
          },
        ],
      },
    ],
  });
  const subsection = form.sections[0].subsections[0];
  assert.equal(validateSubmission(form, {}, {}).length, 1);
  assert.equal(validateSubmission(form, {}, { [subsection.id]: [{}] }).length, 1);
  assert.equal(
    validateSubmission(form, {}, { [subsection.id]: [{ [subsection.fields[0].id]: 'CBSE' }] })
      .length,
    0,
  );
});

test('matches master-backed visibility conditions by their displayed label', () => {
  const foreignId = new ObjectId().toString();
  assert.equal(
    conditionMatches(
      { fieldId: 'studentType', operator: 'equals', value: 'Foreign' },
      { studentType: foreignId },
      { [foreignId]: ['Foreign'] },
    ),
    true,
  );
});

test('requires a configured country field for a foreign student selection', () => {
  const foreignId = new ObjectId().toString();
  const form = normalizeForm({
    name: 'Admission',
    sections: [
      {
        name: 'Personal',
        subsections: [
          {
            name: 'Details',
            fields: [
              {
                name: 'Student Type',
                type: 'dropdown',
                dataSource: { kind: 'master', masterTypeSlug: 'student-type' },
              },
              {
                name: 'Country',
                type: 'dropdown',
                isRequired: true,
                dataSource: { kind: 'master', masterTypeSlug: 'country' },
                visibilityCondition: {
                  fieldId: 'student-type-field',
                  operator: 'equals',
                  value: 'Foreign',
                },
              },
            ],
          },
        ],
      },
    ],
  });
  const [studentType, country] = form.sections[0].subsections[0].fields;
  country.visibilityCondition.fieldId = studentType.id;
  const aliases = { [foreignId]: ['Foreign'] };
  assert.equal(validateSubmission(form, { [studentType.id]: foreignId }, {}, aliases).length, 1);
  assert.equal(
    validateSubmission(
      form,
      { [studentType.id]: foreignId, [country.id]: new ObjectId().toString() },
      {},
      aliases,
    ).length,
    0,
  );
});

test('uses fixed eight-character codes and logical destinations for non-student forms', () => {
  const faculty = normalizeForm({
    name: 'Faculty Recruitment',
    purpose: 'faculty',
    codeGeneration: { enabled: false, prefix: 'fac-2026', digits: 4 },
    destination: {
      navigationSectionId: 'Faculty Records',
      navigationSectionName: 'Faculty',
      menuName: 'Make Faculty',
      databaseSectionId: 'Faculty Database',
      databaseSectionName: 'Faculty',
    },
    sections: [],
  });
  assert.deepEqual(faculty.codeGeneration, {
    enabled: true,
    prefix: '',
    digits: 8,
  });
  assert.equal(faculty.destination.navigationSectionId, 'faculty-records');
  assert.equal(faculty.destination.databaseSectionId, 'faculty-database');
  const admission = normalizeForm({
    name: 'Student Admission',
    purpose: 'admission',
    codeGeneration: { enabled: true, prefix: 'STU', digits: 8 },
    sections: [],
  });
  assert.equal(admission.codeGeneration.enabled, false);
});

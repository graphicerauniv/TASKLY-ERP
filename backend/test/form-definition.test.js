import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeForm, activeForm } from '../src/services/form-definition.js';
import { validateSubmission } from '../src/services/admission-validation.js';

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

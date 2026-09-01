import { AdmissionForm, FormField } from '../../../core/models';

export interface FormPublishIssue {
  id: string;
  severity: 'blocker' | 'warning';
  title: string;
  detail: string;
  sectionId?: string;
  subsectionId?: string;
  fieldId?: string;
}

const CHOICE_TYPES = new Set(['dropdown', 'radio', 'checkbox', 'multi-select']);
const UPLOAD_TYPES = new Set(['file', 'image', 'signature']);

export function validateFormForPublish(form: AdmissionForm): FormPublishIssue[] {
  const issues: FormPublishIssue[] = [];
  const activeSections = form.sections.filter((section) => section.isActive);
  const allFields = form.sections.flatMap((section) =>
    section.subsections.flatMap((subsection) => subsection.fields),
  );
  const activeFields = activeSections.flatMap((section) =>
    section.subsections
      .filter((subsection) => subsection.isActive)
      .flatMap((subsection) => subsection.fields.filter((field) => field.isActive)),
  );
  const activeFieldIds = new Set(activeFields.map((field) => field.id));

  if (!form.name.trim()) {
    issues.push(issue('form-name', 'blocker', 'Form name is required', 'Add a clear form name.'));
  }
  if (!form.description.trim()) {
    issues.push(
      issue(
        'form-description',
        'warning',
        'Form description is missing',
        'A short description helps admins select the correct form.',
      ),
    );
  }
  if (!activeSections.length) {
    issues.push(
      issue(
        'active-section',
        'blocker',
        'No active sections',
        'Enable at least one section before publishing.',
      ),
    );
  }

  addDuplicateIdIssues(form, issues);

  let requiredFieldCount = 0;
  let documentFieldCount = 0;
  for (const section of activeSections) {
    const activeSubsections = section.subsections.filter((subsection) => subsection.isActive);
    if (!section.name.trim()) {
      issues.push(
        issue(
          `section-name:${section.id}`,
          'blocker',
          'Section name is required',
          'Every active section needs a visible name.',
          section.id,
        ),
      );
    }
    if (!activeSubsections.length) {
      issues.push(
        issue(
          `section-empty:${section.id}`,
          'blocker',
          `${section.name || 'Unnamed section'} has no active subsections`,
          'Add or enable a subsection with fields.',
          section.id,
        ),
      );
    }

    for (const subsection of activeSubsections) {
      const fields = subsection.fields.filter((field) => field.isActive);
      if (!subsection.name.trim()) {
        issues.push(
          issue(
            `subsection-name:${subsection.id}`,
            'blocker',
            'Subsection name is required',
            `Add a name inside ${section.name || 'this section'}.`,
            section.id,
            subsection.id,
          ),
        );
      }
      if (!fields.length) {
        issues.push(
          issue(
            `subsection-empty:${subsection.id}`,
            'blocker',
            `${subsection.name || 'Unnamed subsection'} has no active fields`,
            'Add or enable at least one field.',
            section.id,
            subsection.id,
          ),
        );
      }
      if (subsection.isRepeatable && subsection.maxEntries !== null) {
        if (subsection.maxEntries < subsection.minEntries) {
          issues.push(
            issue(
              `repeatable-range:${subsection.id}`,
              'blocker',
              `Invalid entry range in ${subsection.name}`,
              'Maximum entries cannot be lower than minimum entries.',
              section.id,
              subsection.id,
            ),
          );
        }
      }

      for (const field of fields) {
        if (field.isRequired) requiredFieldCount += 1;
        if (UPLOAD_TYPES.has(field.type)) documentFieldCount += 1;
        validateField(field, section.id, subsection.id, activeFieldIds, issues);
      }
    }
  }

  if (activeFields.length && requiredFieldCount === 0) {
    issues.push(
      issue(
        'required-field',
        'blocker',
        'No required fields configured',
        'Mark the minimum identity and programme fields as required before publishing.',
      ),
    );
  }
  if (activeFields.length && documentFieldCount === 0) {
    issues.push(
      issue(
        'document-field',
        'warning',
        'No document evidence requested',
        'Confirm that this admission workflow intentionally requires no document upload.',
      ),
    );
  }

  return issues;
}

function validateField(
  field: FormField,
  sectionId: string,
  subsectionId: string,
  activeFieldIds: Set<string>,
  issues: FormPublishIssue[],
) {
  const location = [sectionId, subsectionId, field.id] as const;
  if (!field.name.trim()) {
    issues.push(
      issue(
        `field-name:${field.id}`,
        'blocker',
        'Field label is required',
        'Every active field needs a clear label.',
        ...location,
      ),
    );
  }
  if (
    CHOICE_TYPES.has(field.type) &&
    !field.dataSource &&
    !field.options.some((option) => option.label.trim() && option.value.trim())
  ) {
    issues.push(
      issue(
        `field-options:${field.id}`,
        'blocker',
        `${field.name || 'Choice field'} has no choices`,
        'Add manual options or connect a master-data source.',
        ...location,
      ),
    );
  }
  if (field.dataSource?.parentFieldId) {
    if (field.dataSource.parentFieldId === field.id) {
      issues.push(
        issue(
          `field-self-dependency:${field.id}`,
          'blocker',
          `${field.name} depends on itself`,
          'Select a different parent field or remove the dependency.',
          ...location,
        ),
      );
    } else if (!activeFieldIds.has(field.dataSource.parentFieldId)) {
      issues.push(
        issue(
          `field-dependency:${field.id}`,
          'blocker',
          `${field.name} has a broken data dependency`,
          'Its parent field is missing or inactive.',
          ...location,
        ),
      );
    }
  }
  if (field.visibilityCondition) {
    if (field.visibilityCondition.fieldId === field.id) {
      issues.push(
        issue(
          `field-self-visibility:${field.id}`,
          'blocker',
          `${field.name} controls its own visibility`,
          'Choose another field for this visibility rule.',
          ...location,
        ),
      );
    } else if (!activeFieldIds.has(field.visibilityCondition.fieldId)) {
      issues.push(
        issue(
          `field-visibility:${field.id}`,
          'blocker',
          `${field.name} has a broken visibility rule`,
          'The controlling field is missing or inactive.',
          ...location,
        ),
      );
    }
  }
  if (field.validation.pattern) {
    try {
      new RegExp(field.validation.pattern);
    } catch {
      issues.push(
        issue(
          `field-pattern:${field.id}`,
          'blocker',
          `${field.name} has an invalid validation pattern`,
          'Correct or remove the regular-expression pattern.',
          ...location,
        ),
      );
    }
  }
  if (UPLOAD_TYPES.has(field.type) && !field.uploadConfig?.allowedTypes.length) {
    issues.push(
      issue(
        `field-upload:${field.id}`,
        'blocker',
        `${field.name} accepts no file types`,
        'Allow at least one supported upload type.',
        ...location,
      ),
    );
  }
}

function addDuplicateIdIssues(form: AdmissionForm, issues: FormPublishIssue[]) {
  const counts = new Map<string, number>();
  for (const section of form.sections) {
    counts.set(section.id, (counts.get(section.id) || 0) + 1);
    for (const subsection of section.subsections) {
      counts.set(subsection.id, (counts.get(subsection.id) || 0) + 1);
      for (const field of subsection.fields) {
        counts.set(field.id, (counts.get(field.id) || 0) + 1);
      }
    }
  }
  for (const [id, count] of counts) {
    if (count < 2) continue;
    issues.push(
      issue(
        `duplicate-id:${id}`,
        'blocker',
        'Duplicate structure identifier',
        `The identifier “${id}” is used ${count} times. Duplicate the affected item again or recreate it.`,
      ),
    );
  }
}

function issue(
  id: string,
  severity: FormPublishIssue['severity'],
  title: string,
  detail: string,
  sectionId?: string,
  subsectionId?: string,
  fieldId?: string,
): FormPublishIssue {
  return { id, severity, title, detail, sectionId, subsectionId, fieldId };
}

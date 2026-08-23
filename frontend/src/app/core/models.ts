export interface MasterType {
  _id: string;
  name: string;
  slug: string;
  parentTypeSlug: string | null;
  isCustom: boolean;
  isActive: boolean;
}
export interface MasterValue {
  _id: string;
  name: string;
  code: string;
  label?: string;
  parentId: string | null;
  isActive: boolean;
  metadata?: Record<string, unknown>;
}
export interface FieldOption {
  label: string;
  value: string;
}
export interface VisibilityCondition {
  fieldId: string;
  operator: string;
  value: unknown;
}
export interface FormField {
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
  isActive: boolean;
  order: number;
  placeholder: string;
  defaultValue: unknown;
  helpText: string;
  options: FieldOption[];
  dataSource: {
    kind: 'master';
    masterTypeSlug: string;
    parentFieldId: string | null;
    labelField: string;
    valueField: string;
  } | null;
  searchable: boolean;
  searchConfig: Record<string, unknown> | null;
  validation: {
    min?: number | null;
    max?: number | null;
    minLength?: number | null;
    maxLength?: number | null;
    pattern?: string;
    message?: string;
  };
  visibilityCondition: VisibilityCondition | null;
}
export interface FormSubsection {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  isRepeatable: boolean;
  minEntries: number;
  maxEntries: number | null;
  order: number;
  visibilityCondition: VisibilityCondition | null;
  fields: FormField[];
}
export interface FormSection {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  order: number;
  subsections: FormSubsection[];
}
export interface AdmissionForm {
  _id?: string;
  name: string;
  slug?: string;
  description: string;
  status: 'draft' | 'published' | 'archived';
  isActive: boolean;
  version?: number;
  sections: FormSection[];
}
export interface Admission {
  _id: string;
  applicationNumber: string;
  status: string;
  currentSectionId: string | null;
  formVersion?: number;
  formSnapshot: AdmissionForm;
  responses: Record<string, unknown>;
  repeatableResponses: Record<string, Record<string, unknown>[]>;
  createdAt: string;
  submittedAt?: string;
}

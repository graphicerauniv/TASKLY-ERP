export type FormSectionVisualState = 'complete' | 'current' | 'upcoming' | 'attention';

export interface FormSectionNavigationItem {
  id: string;
  index: number;
  title: string;
  status: string;
  state: FormSectionVisualState;
  group?: string;
  completionPercent?: number;
  errorCount?: number;
}

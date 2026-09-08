import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  LucideBookOpen,
  LucideBraces,
  LucideDynamicIcon,
  LucideFlaskConical,
} from '@lucide/angular';

// A deliberately small, scalable icon vocabulary. The ERP can contain thousands of
// subjects, so subject identity comes from its name/code rather than a bespoke asset.
const SUBJECT_CATEGORIES = [
  { pattern: /lab|practical|workshop|studio|experiment/i, icon: LucideFlaskConical, tone: 'practical' },
  {
    pattern:
      /computer|software|program|code|web|network|data|database|system|technology|algorithm|compiler|artificial intelligence|machine learning/i,
    icon: LucideBraces,
    tone: 'technical',
  },
] as const;

@Component({
  selector: 'erp-student-subject-icon',
  imports: [LucideDynamicIcon],
  template: `<span class="student-subject-icon" [attr.data-tone]="visual().tone" [style.width.px]="boxSize()" [style.height.px]="boxSize()" aria-hidden="true"><svg [lucideIcon]="visual().icon" [size]="size()"></svg></span>`,
  styles: `
    :host { display: inline-flex; }
    .student-subject-icon { display: grid; width: 42px; height: 42px; place-items: center; border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); }
    .student-subject-icon[data-tone='technical'] { color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); }
    .student-subject-icon[data-tone='practical'] { color: var(--student-color-success); background: var(--student-color-success-soft); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentSubjectIconComponent {
  readonly subject = input('');
  readonly size = input(24);
  readonly boxSize = input(42);
  readonly visual = computed(
    () =>
      SUBJECT_CATEGORIES.find((category) => category.pattern.test(this.subject())) || {
        icon: LucideBookOpen,
        tone: 'general',
      },
  );
}

import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBadgeCheck,
  LucideCircleAlert,
  LucideClipboardList,
  LucideFileText,
  LucidePencil,
  LucideRefreshCw,
  LucideUserRound,
} from '@lucide/angular';
import { ApiService } from '../../../../core/api.service';
import { Admission, FormField, FormSubsection } from '../../../../core/models';
import { AdminPageComponent } from '../../../../shared/ui/admin-page/admin-page.component';
import {
  admissionCaptureStats,
  admissionDateLabel,
  admissionFieldValue,
  admissionReference,
  admissionStatusLabel,
} from '../admission-presentation';

type RecordTab = 'overview' | 'application';

@Component({
  selector: 'erp-application-record',
  imports: [
    AdminPageComponent,
    LucideArrowLeft,
    LucideBadgeCheck,
    LucideCircleAlert,
    LucideClipboardList,
    LucideFileText,
    LucidePencil,
    LucideRefreshCw,
    LucideUserRound,
    RouterLink,
  ],
  templateUrl: './application-record.component.html',
  styleUrl: './application-record.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationRecordComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly item = signal<Admission | null>(null);
  readonly masterLabels = signal<Record<string, string>>({});
  readonly loading = signal(true);
  readonly error = signal('');
  readonly tab = signal<RecordTab>('overview');
  readonly activeSectionId = signal('');
  readonly activeSection = computed(() =>
    this.item()?.formSnapshot?.sections.find((section) => section.id === this.activeSectionId()),
  );
  private admissionId = '';

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = params.get('admissionId') || '';
      if (!id || id === this.admissionId) return;
      this.admissionId = id;
      this.load();
    });
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.tab.set(params.get('tab') === 'application' ? 'application' : 'overview');
      const requestedSection = params.get('section');
      if (requestedSection) this.activeSectionId.set(requestedSection);
    });
  }

  load() {
    if (!this.admissionId) return;
    this.loading.set(true);
    this.error.set('');
    this.api
      .admission(this.admissionId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ item, masterLabels }) => {
          this.item.set(item);
          this.masterLabels.set(masterLabels);
          const requested = this.activeSectionId();
          const sectionExists = item.formSnapshot?.sections.some(
            (section) => section.id === requested,
          );
          if (!sectionExists) this.activeSectionId.set(item.formSnapshot?.sections[0]?.id || '');
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(error.error?.message || 'This application record could not be loaded.');
          this.loading.set(false);
        },
      });
  }

  setTab(tab: RecordTab) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: tab === 'application' ? 'application' : null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  setSection(sectionId: string) {
    this.activeSectionId.set(sectionId);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: 'application', section: sectionId },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  reference(item: Admission) {
    return admissionReference(item);
  }

  statusLabel(item: Admission) {
    return admissionStatusLabel(item);
  }

  captureLabel(item: Admission) {
    const stats = admissionCaptureStats(item);
    return stats.total
      ? `${stats.answered} of ${stats.total} fields captured`
      : 'No form fields recorded';
  }

  dateLabel(value?: string) {
    return admissionDateLabel(value);
  }

  value(field: FormField, responses: Record<string, unknown>) {
    return admissionFieldValue(field, responses, this.masterLabels());
  }

  entries(item: Admission, subsection: FormSubsection) {
    return item.repeatableResponses?.[subsection.id] || [];
  }
}

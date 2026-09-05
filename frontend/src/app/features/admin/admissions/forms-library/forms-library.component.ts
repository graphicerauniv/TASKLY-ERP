import { CdkTrapFocus } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  LucideCircleAlert,
  LucideFilePlus2,
  LucideInbox,
  LucideLayoutTemplate,
  LucidePlus,
  LucideRefreshCw,
  LucideSearch,
  LucideX,
} from '@lucide/angular';
import { ApiService } from '../../../../core/api.service';
import { AdmissionForm } from '../../../../core/models';
import { AdminPageComponent } from '../../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-forms-library',
  imports: [
    AdminPageComponent,
    CdkTrapFocus,
    CompactActionMenuComponent,
    FormsModule,
    LucideCircleAlert,
    LucideFilePlus2,
    LucideInbox,
    LucideLayoutTemplate,
    LucidePlus,
    LucideRefreshCw,
    LucideSearch,
    LucideX,
  ],
  templateUrl: './forms-library.component.html',
  styleUrl: './forms-library.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsLibraryComponent {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly items = signal<AdmissionForm[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly search = signal('');
  readonly createOpen = signal(false);
  readonly creating = signal(false);
  readonly createError = signal('');
  readonly filteredItems = computed(() => {
    const query = this.search().trim().toLowerCase();
    if (!query) return this.items();
    return this.items().filter((form) =>
      [form.name, form.description, form.slug, form.status]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query)),
    );
  });
  readonly publishedCount = computed(
    () => this.items().filter((form) => form.status === 'published').length,
  );
  readonly draftCount = computed(
    () => this.items().filter((form) => form.status === 'draft').length,
  );
  newFormName = '';
  newFormPurpose: AdmissionForm['purpose'] = 'admission';

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.api
      .forms()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ items }) => {
          this.items.set(items);
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Forms could not be loaded.');
          this.loading.set(false);
        },
      });
  }

  openCreate() {
    this.newFormName = '';
    this.newFormPurpose = 'admission';
    this.createError.set('');
    this.createOpen.set(true);
  }

  closeCreate() {
    if (this.creating()) return;
    this.createOpen.set(false);
    this.createError.set('');
  }

  createForm() {
    const name = this.newFormName.trim();
    if (!name || this.creating()) return;
    this.creating.set(true);
    this.createError.set('');
    this.api
      .createForm({
        name,
        description: '',
        purpose: this.newFormPurpose,
        audience: {
          academicSessionIds: [],
          universityIds: [],
          collegeIds: [],
          departmentIds: [],
          levelIds: [],
        },
        status: 'draft',
        isActive: true,
        sections: [],
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ item }) => {
          this.creating.set(false);
          this.createOpen.set(false);
          void this.openBuilder(item);
        },
        error: (error) => {
          this.createError.set(error.error?.message || 'The form could not be created.');
          this.creating.set(false);
        },
      });
  }

  handleRowAction(action: string, form: AdmissionForm) {
    if (action === 'edit') void this.openBuilder(form);
    if (action === 'fill' && form._id)
      void this.router.navigate(['/admin/forms', form._id, 'fill']);
  }

  rowActions(form: AdmissionForm): CompactActionItem[] {
    const actions: CompactActionItem[] = [{ id: 'edit', label: 'Open in builder', icon: 'edit' }];
    if ((form.purpose || 'admission') !== 'admission' && form.status === 'published')
      actions.push({ id: 'fill', label: 'Fill form', icon: 'view' });
    return actions;
  }

  openBuilder(form: AdmissionForm) {
    if (!form._id) return Promise.resolve(false);
    return this.router.navigate(['/admin/admissions/forms', form._id, 'edit']);
  }

  sectionCount(form: AdmissionForm) {
    return form.sections.filter((section) => section.isActive).length;
  }

  fieldCount(form: AdmissionForm) {
    return form.sections.reduce(
      (total, section) =>
        total +
        section.subsections.reduce(
          (subTotal, subsection) =>
            subTotal + subsection.fields.filter((field) => field.isActive).length,
          0,
        ),
      0,
    );
  }

  statusLabel(form: AdmissionForm) {
    if (form.status === 'published') return 'Published';
    if (form.status === 'archived') return 'Archived';
    return 'Draft';
  }
  purposeLabel(form: AdmissionForm) {
    const purpose = form.purpose || 'admission';
    return {
      admission: 'Student admission',
      faculty: 'Faculty application',
      employee: 'Employee application',
      general: 'General form',
    }[purpose];
  }
}

import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  LucideBuilding2,
  LucideDoorOpen,
  LucideLayers3,
  LucidePencil,
  LucidePlus,
  LucideSearch,
  LucideTrash2,
  LucideX,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { ExamBuilding, ExamFloor, ExamRoom } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

type ExamMasterSection = 'buildings' | 'floors' | 'rooms';
type ExamMasterRecord = ExamBuilding | ExamFloor | ExamRoom;

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const message = (error as { error?: { message?: unknown } }).error?.message;
    if (typeof message === 'string') return message;
  }
  return fallback;
}

@Component({
  selector: 'erp-exam-master',
  imports: [
    CommonModule,
    FormsModule,
    AdminPageComponent,
    LucideBuilding2,
    LucideDoorOpen,
    LucideLayers3,
    LucidePencil,
    LucidePlus,
    LucideSearch,
    LucideTrash2,
    LucideX,
  ],
  templateUrl: './exam-master.component.html',
  styleUrl: './exam-master.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamMasterComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  readonly section = signal<ExamMasterSection>('buildings');
  readonly buildings = signal<ExamBuilding[]>([]);
  readonly floors = signal<ExamFloor[]>([]);
  readonly rooms = signal<ExamRoom[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly drawerOpen = signal(false);
  readonly editingId = signal<string | null>(null);
  readonly error = signal('');
  readonly message = signal('');

  search = '';
  name = '';
  buildingId = '';
  floorId = '';
  floorNumber = 0;
  roomNumber = '';
  capacity = 1;
  isActive = true;

  constructor() {
    this.route.data.subscribe((data) => {
      this.section.set((data['section'] as ExamMasterSection) || 'buildings');
      this.search = '';
      this.closeDrawer();
      this.load();
    });
    effect((onCleanup) => {
      if (!this.drawerOpen()) return;
      const overflow = this.document.body.style.overflow;
      this.document.body.style.overflow = 'hidden';
      onCleanup(() => (this.document.body.style.overflow = overflow));
    });
  }

  title(): string {
    return {
      buildings: 'Exam buildings',
      floors: 'Exam floors',
      rooms: 'Exam rooms',
    }[this.section()];
  }

  singular(): string {
    return { buildings: 'building', floors: 'floor', rooms: 'room' }[this.section()];
  }

  description(): string {
    return {
      buildings: 'Create the buildings available for examinations.',
      floors: 'Configure numbered floors for every examination building.',
      rooms: 'Maintain examination rooms and their seating capacity.',
    }[this.section()];
  }

  records(): ExamMasterRecord[] {
    const source = {
      buildings: this.buildings(),
      floors: this.floors(),
      rooms: this.rooms(),
    }[this.section()] as ExamMasterRecord[];
    const query = this.search.trim().toLowerCase();
    if (!query) return source;
    return source.filter((item) =>
      [
        item.name,
        'buildingName' in item ? item.buildingName : '',
        'floorName' in item ? item.floorName : '',
        'roomNumber' in item ? item.roomNumber : '',
      ].some((value) =>
        String(value || '')
          .toLowerCase()
          .includes(query),
      ),
    );
  }

  floorsForBuilding(): ExamFloor[] {
    return this.floors().filter(
      (item) => item.isActive && (!this.buildingId || item.buildingId === this.buildingId),
    );
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.api.examMasterBootstrap().subscribe({
      next: (data) => {
        this.buildings.set(data.buildings);
        this.floors.set(data.floors);
        this.rooms.set(data.rooms);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load Exam Master.'));
        this.loading.set(false);
      },
    });
  }

  openCreate(): void {
    this.resetForm();
    this.drawerOpen.set(true);
  }

  openEdit(record: ExamMasterRecord): void {
    this.resetForm();
    this.editingId.set(record._id);
    this.name = record.name;
    this.isActive = record.isActive;
    if ('buildingId' in record) this.buildingId = record.buildingId;
    if ('floorId' in record) this.floorId = record.floorId;
    if ('floorNumber' in record) this.floorNumber = record.floorNumber;
    if ('roomNumber' in record) this.roomNumber = record.roomNumber;
    if ('capacity' in record) this.capacity = record.capacity;
    this.drawerOpen.set(true);
  }

  closeDrawer(): void {
    if (this.saving()) return;
    this.drawerOpen.set(false);
    this.resetForm();
  }

  buildingChanged(): void {
    if (!this.floorsForBuilding().some((item) => item._id === this.floorId)) this.floorId = '';
  }

  valid(): boolean {
    if (!this.name.trim()) return false;
    if (this.section() !== 'buildings' && !this.buildingId) return false;
    if (
      this.section() === 'rooms' &&
      (!this.floorId || !this.roomNumber.trim() || this.capacity < 1)
    )
      return false;
    return true;
  }

  save(): void {
    if (!this.valid()) return;
    const common = { name: this.name.trim(), isActive: this.isActive };
    const body =
      this.section() === 'buildings'
        ? common
        : this.section() === 'floors'
          ? {
              ...common,
              buildingId: this.buildingId,
              floorNumber: Number(this.floorNumber),
            }
          : {
              ...common,
              buildingId: this.buildingId,
              floorId: this.floorId,
              roomNumber: this.roomNumber.trim(),
              capacity: Number(this.capacity),
            };
    this.saving.set(true);
    this.error.set('');
    const request = this.editingId()
      ? this.api.updateExamMasterRecord(this.section(), this.editingId()!, body)
      : this.api.createExamMasterRecord(this.section(), body);
    request.subscribe({
      next: () => {
        this.message.set(`${this.singular()} saved successfully.`);
        this.saving.set(false);
        this.closeDrawer();
        this.load();
      },
      error: (error) => {
        this.error.set(apiMessage(error, `Could not save this ${this.singular()}.`));
        this.saving.set(false);
      },
    });
  }

  remove(record: ExamMasterRecord): void {
    if (!confirm(`Delete ${record.name}?`)) return;
    this.api.deleteExamMasterRecord(this.section(), record._id).subscribe({
      next: () => {
        this.message.set(`${this.singular()} deleted.`);
        this.load();
      },
      error: (error) =>
        this.error.set(apiMessage(error, `Could not delete this ${this.singular()}.`)),
    });
  }

  private resetForm(): void {
    this.editingId.set(null);
    this.name = '';
    this.buildingId = '';
    this.floorId = '';
    this.floorNumber = 0;
    this.roomNumber = '';
    this.capacity = 1;
    this.isActive = true;
  }
}

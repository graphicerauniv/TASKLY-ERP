import { DatePipe, DecimalPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideArrowRightLeft,
  LucideBedDouble,
  LucideBuilding2,
  LucideCheck,
  LucideCheckCircle2,
  LucideChevronDown,
  LucideDoorOpen,
  LucideFilter,
  LucideLayers3,
  LucideMapPin,
  LucideLogOut,
  LucidePlus,
  LucideRefreshCw,
  LucideSearch,
  LucideSettings2,
  LucideUserRound,
  LucideUserRoundPlus,
  LucideX,
} from '@lucide/angular';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import {
  Hostel,
  HostelAllocation,
  HostelBlock,
  HostelFloor,
  HostelOverview,
  HostelRoom,
  HostelStudentOption,
  MasterValue,
} from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

type HostelSection = 'details' | 'structure' | 'rooms' | 'capacity' | 'allocation' | 'overview';
type HostelTypeFilter = 'all' | Hostel['type'];
type HostelStatusFilter = 'all' | 'active' | 'inactive';
type StructureKind = 'block' | 'floor';
type RoomConfigurationFilter = 'all' | 'configured' | 'unconfigured' | 'disabled';
type RoomStatusFilter = 'all' | 'active' | 'disabled';
type AllocationStage = 1 | 2 | 3;
type AllocationStatusFilter = 'all' | HostelAllocation['status'];
type StructureDialog = { kind: StructureKind; mode: 'create' | 'edit' };
type DeleteTarget =
  | { kind: 'hostel'; item: Hostel }
  | { kind: 'block'; item: HostelBlock }
  | { kind: 'floor'; item: HostelFloor }
  | { kind: 'room'; item: HostelRoom };

@Component({
  selector: 'erp-hostel-management',
  imports: [
    AdminPageComponent,
    CompactActionMenuComponent,
    FormsModule,
    CdkTrapFocus,
    RouterLink,
    DatePipe,
    DecimalPipe,
    LucideArrowLeft,
    LucideArrowRight,
    LucideArrowRightLeft,
    LucideBedDouble,
    LucideBuilding2,
    LucideCheck,
    LucideCheckCircle2,
    LucideChevronDown,
    LucideDoorOpen,
    LucideFilter,
    LucideLayers3,
    LucideMapPin,
    LucideLogOut,
    LucidePlus,
    LucideRefreshCw,
    LucideSearch,
    LucideSettings2,
    LucideUserRound,
    LucideUserRoundPlus,
    LucideX,
  ],
  templateUrl: './hostel-management.component.html',
  styleUrl: './hostel-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostelManagementComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private pendingCapacityRoomId = '';
  private bypassGenerationConfirm = false;
  readonly section = signal<HostelSection>('details');
  readonly hostels = signal<Hostel[]>([]);
  readonly blocks = signal<HostelBlock[]>([]);
  readonly floors = signal<HostelFloor[]>([]);
  readonly rooms = signal<HostelRoom[]>([]);
  readonly students = signal<HostelStudentOption[]>([]);
  readonly allocations = signal<HostelAllocation[]>([]);
  readonly sessions = signal<MasterValue[]>([]);
  readonly overview = signal<HostelOverview | null>(null);
  readonly savedSeaters = signal<number[]>([1, 2, 3, 4, 5]);
  readonly savedRoomTypes = signal<string[]>(['AC', 'Non-AC']);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly editingHostel = signal<Hostel | null>(null);
  readonly editingBlock = signal<HostelBlock | null>(null);
  readonly editingFloor = signal<HostelFloor | null>(null);
  readonly hostelEditorOpen = signal(false);
  readonly structureDialog = signal<StructureDialog | null>(null);
  readonly deleteTarget = signal<DeleteTarget | null>(null);
  readonly selectedStructureKind = signal<StructureKind | null>(null);
  readonly selectedStructureId = signal('');
  readonly blocksExpanded = signal(true);
  readonly floorsExpanded = signal(true);
  readonly mobileFiltersOpen = signal(false);
  readonly editingRoom = signal<HostelRoom | null>(null);
  readonly viewingRoom = signal<HostelRoom | null>(null);
  readonly roomEditorOpen = signal(false);
  readonly generationConfirmOpen = signal(false);
  readonly roomFiltersOpen = signal(false);
  readonly roomsLoadFailed = signal(false);
  readonly capacityRoom = signal<HostelRoom | null>(null);
  readonly allocationDrawerOpen = signal(false);
  readonly allocationStage = signal<AllocationStage>(1);
  readonly allocationDetail = signal<HostelAllocation | null>(null);
  readonly allocationFiltersOpen = signal(false);
  readonly allocationLoading = signal(false);
  readonly allocationLoadFailed = signal(false);
  readonly allocationRoomLoading = signal(false);
  readonly eligibilityAllocations = signal<HostelAllocation[]>([]);
  readonly transferTarget = signal<HostelAllocation | null>(null);
  readonly vacateTarget = signal<HostelAllocation | null>(null);

  readonly pageTitle = computed(() => SECTION_CONTENT[this.section()].title);
  readonly pageDescription = computed(() => SECTION_CONTENT[this.section()].description);
  readonly totalHostels = computed(() => this.hostels().length);
  readonly activeHostels = computed(() => this.hostels().filter((item) => item.isActive).length);
  readonly plannedRooms = computed(() =>
    this.hostels().reduce((total, item) => total + (item.plannedRoomCount || 0), 0),
  );
  readonly createdRooms = computed(() =>
    this.hostels().reduce((total, item) => total + (item.roomCount || 0), 0),
  );
  readonly hostelActions = (hostel: Hostel): CompactActionItem[] => [
    { id: 'structure', label: 'View structure', icon: 'view' },
    { id: 'edit', label: 'Edit hostel', icon: 'edit' },
    { id: 'toggle', label: hostel.isActive ? 'Disable hostel' : 'Enable hostel', icon: 'edit' },
    { id: 'delete', label: 'Delete hostel', icon: 'delete', destructive: true, separator: true },
  ];
  readonly blockActions: CompactActionItem[] = [
    { id: 'edit', label: 'Rename block', icon: 'edit' },
    { id: 'delete', label: 'Delete block', icon: 'delete', destructive: true, separator: true },
  ];
  readonly floorActions: CompactActionItem[] = [
    { id: 'edit', label: 'Rename floor', icon: 'edit' },
    { id: 'delete', label: 'Delete floor', icon: 'delete', destructive: true, separator: true },
  ];
  readonly roomActions = (room: HostelRoom): CompactActionItem[] => [
    { id: 'view', label: 'View details', icon: 'view' },
    { id: 'edit', label: 'Edit room number', icon: 'edit' },
    { id: 'capacity', label: 'Set capacity', icon: 'edit' },
    { id: 'toggle', label: room.isActive ? 'Disable room' : 'Enable room', icon: 'edit' },
    { id: 'delete', label: 'Delete room', icon: 'delete', destructive: true, separator: true },
  ];
  readonly capacityActions = (room: HostelRoom): CompactActionItem[] => [
    {
      id: 'capacity',
      label: room.configuredForSession ? 'Edit configuration' : 'Configure capacity',
      icon: 'edit',
    },
    { id: 'toggle', label: room.isActive ? 'Disable room' : 'Enable room', icon: 'edit' },
  ];
  readonly allocationActions = (allocation: HostelAllocation): CompactActionItem[] => [
    { id: 'view', label: 'View allocation details', icon: 'view' },
    {
      id: 'transfer',
      label: 'Transfer room',
      icon: 'transfer',
      disabled: allocation.status !== 'active',
    },
    {
      id: 'vacate',
      label: 'Vacate room',
      icon: 'vacate',
      destructive: true,
      separator: true,
      disabled: allocation.status !== 'active',
    },
  ];

  hostelName = '';
  hostelType: Hostel['type'] = 'boys';
  blockCount = 1;
  floorCount = 1;
  plannedRoomCount = 0;
  hostelSearch = '';
  hostelTypeFilter: HostelTypeFilter = 'all';
  hostelStatusFilter: HostelStatusFilter = 'all';
  academicSession = currentAcademicSession();
  selectedHostelId = '';
  selectedBlockId = '';
  selectedFloorId = '';
  blockName = '';
  floorName = '';
  roomMode: 'manual' | 'automatic' = 'manual';
  roomNumber = '';
  editedRoomNumber = '';
  roomPrefix = '';
  roomStartNumber = 101;
  roomGenerationCount = 10;
  roomSearch = '';
  roomConfigurationFilter: RoomConfigurationFilter = 'all';
  roomStatusFilter: RoomStatusFilter = 'all';
  capacityChoice = '2';
  customCapacity: number | null = null;
  roomTypeChoice = 'Non-AC';
  customRoomType = '';
  selectedStudentId = '';
  selectedRoomId = '';
  selectedBedNumber: number | null = null;
  transferReason = '';
  vacateReason = '';
  allocationBrowseSession = currentAcademicSession();
  allocationBrowseHostelId = '';
  allocationStatusFilter: AllocationStatusFilter = 'active';
  allocationSearch = '';
  studentSearch = '';
  allocationRoomSearch = '';

  readonly sessionOptions = () => [
    ...new Set([this.academicSession, ...this.sessions().map((item) => item.name)].filter(Boolean)),
  ];
  readonly floorOptions = () => this.floors();
  readonly filteredRooms = () =>
    this.rooms().filter(
      (room) =>
        (!this.selectedBlockId || room.blockId === this.selectedBlockId) &&
        (!this.selectedFloorId || room.floorId === this.selectedFloorId),
    );

  locationReady() {
    return !!(this.selectedHostelId && this.selectedBlockId && this.selectedFloorId);
  }

  locationRooms() {
    if (!this.locationReady()) return [];
    return this.rooms().filter(
      (room) => room.blockId === this.selectedBlockId && room.floorId === this.selectedFloorId,
    );
  }

  visibleRooms() {
    const query = this.roomSearch.trim().toLocaleLowerCase();
    return this.locationRooms().filter((room) => {
      const configured = !!room.configuredForSession;
      const matchesQuery = !query || room.roomNumber.toLocaleLowerCase().includes(query);
      const matchesConfiguration =
        this.roomConfigurationFilter === 'all' ||
        (this.roomConfigurationFilter === 'configured' && configured) ||
        (this.roomConfigurationFilter === 'unconfigured' && !configured) ||
        (this.roomConfigurationFilter === 'disabled' && !room.isActive);
      const matchesStatus =
        this.roomStatusFilter === 'all' ||
        (this.roomStatusFilter === 'active' ? room.isActive : !room.isActive);
      return matchesQuery && matchesConfiguration && matchesStatus;
    });
  }

  selectedBlockOption() {
    return this.blocks().find((block) => block._id === this.selectedBlockId) || null;
  }

  selectedFloorOption() {
    return this.floors().find((floor) => floor._id === this.selectedFloorId) || null;
  }

  locationLabel() {
    return [
      this.selectedHostel()?.name,
      this.selectedBlockOption()?.name,
      this.selectedFloorOption()?.name,
    ]
      .filter(Boolean)
      .join(' / ');
  }

  configuredRoomCount() {
    return this.locationRooms().filter((room) => room.configuredForSession).length;
  }

  locationBedCount() {
    return this.locationRooms().reduce((total, room) => total + (room.capacity || 0), 0);
  }

  capacityProgress() {
    const total = this.locationRooms().length;
    return total ? Math.round((this.configuredRoomCount() * 100) / total) : 0;
  }

  nextUnconfiguredRoom() {
    return this.locationRooms().find((room) => room.isActive && !room.configuredForSession) || null;
  }

  generationPreview() {
    const count = Math.max(0, Math.min(500, Number(this.roomGenerationCount) || 0));
    const start = Math.max(1, Number(this.roomStartNumber) || 1);
    if (!count) return [];
    const roomAt = (offset: number) => `${this.roomPrefix.trim()}${start + offset}`;
    if (count <= 4) return Array.from({ length: count }, (_, index) => roomAt(index));
    return [roomAt(0), roomAt(1), roomAt(2), `… ${roomAt(count - 1)}`];
  }
  readonly selectedRoom = () =>
    this.rooms().find((room) => room._id === this.selectedRoomId) || null;
  readonly availableBeds = () => {
    const room = this.selectedRoom();
    return room ? room.beds.filter((bed) => !room.occupiedBeds.includes(bed)) : [];
  };
  readonly allocatedStudentIds = computed(
    () =>
      new Set(
        this.allocations()
          .filter((item) => item.status === 'active')
          .map((item) => item.studentAdmissionId),
      ),
  );

  selectedStudent() {
    return this.students().find((student) => student._id === this.selectedStudentId) || null;
  }

  activeAllocationForSelectedStudent() {
    return (
      this.eligibilityAllocations().find(
        (allocation) =>
          allocation.studentAdmissionId === this.selectedStudentId &&
          allocation.academicSession === this.academicSession &&
          allocation.status === 'active',
      ) || null
    );
  }

  visibleStudents() {
    const query = this.studentSearch.trim().toLocaleLowerCase();
    return this.students()
      .filter(
        (student) =>
          !query ||
          student.name.toLocaleLowerCase().includes(query) ||
          student.applicationNumber.toLocaleLowerCase().includes(query),
      )
      .slice(0, 40);
  }

  visibleAllocations() {
    const query = this.allocationSearch.trim().toLocaleLowerCase();
    return this.allocations().filter(
      (allocation) =>
        !query ||
        allocation.studentName.toLocaleLowerCase().includes(query) ||
        allocation.studentApplicationNumber.toLocaleLowerCase().includes(query) ||
        allocation.hostelName.toLocaleLowerCase().includes(query) ||
        allocation.roomNumber.toLocaleLowerCase().includes(query),
    );
  }

  allocationAvailableRooms() {
    const query = this.allocationRoomSearch.trim().toLocaleLowerCase();
    return this.rooms().filter(
      (room) =>
        room.blockId === this.selectedBlockId &&
        room.floorId === this.selectedFloorId &&
        room.isActive &&
        room.configuredForSession &&
        room.capacity > room.occupiedBeds.length &&
        (!query || room.roomNumber.toLocaleLowerCase().includes(query)),
    );
  }

  allocationConfiguredRooms() {
    return this.rooms().filter(
      (room) =>
        room.blockId === this.selectedBlockId &&
        room.floorId === this.selectedFloorId &&
        room.isActive &&
        room.configuredForSession,
    );
  }

  selectedStudentInitials() {
    const name = this.selectedStudent()?.name || this.transferTarget()?.studentName || '';
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');
  }

  allocationLocationReady() {
    return !!(this.selectedHostelId && this.selectedBlockId && this.selectedFloorId);
  }

  visibleHostels() {
    const query = this.hostelSearch.trim().toLocaleLowerCase();
    return this.hostels().filter((hostel) => {
      const matchesQuery =
        !query ||
        hostel.name.toLocaleLowerCase().includes(query) ||
        hostel.code.toLocaleLowerCase().includes(query);
      const matchesType = this.hostelTypeFilter === 'all' || hostel.type === this.hostelTypeFilter;
      const matchesStatus =
        this.hostelStatusFilter === 'all' ||
        (this.hostelStatusFilter === 'active' ? hostel.isActive : !hostel.isActive);
      return matchesQuery && matchesType && matchesStatus;
    });
  }

  selectedHostel() {
    return this.hostels().find((hostel) => hostel._id === this.selectedHostelId) || null;
  }

  selectedBlock() {
    if (this.selectedStructureKind() !== 'block') return null;
    return this.blocks().find((block) => block._id === this.selectedStructureId()) || null;
  }

  selectedFloor() {
    if (this.selectedStructureKind() !== 'floor') return null;
    return this.floors().find((floor) => floor._id === this.selectedStructureId()) || null;
  }

  roomsForBlock(block: HostelBlock) {
    return this.rooms().filter((room) => room.blockId === block._id).length;
  }

  roomsForFloor(floor: HostelFloor) {
    return this.rooms().filter((room) => room.floorId === floor._id).length;
  }

  constructor() {
    this.route.data.subscribe((data) => {
      this.section.set((data['section'] as HostelSection) || 'details');
      this.loadForSection();
    });
    this.route.queryParamMap.subscribe((params) => {
      const hostelId = params.get('hostel');
      if (!hostelId) return;
      this.selectedHostelId = hostelId;
      this.selectedBlockId = params.get('block') || this.selectedBlockId;
      this.selectedFloorId = params.get('floor') || this.selectedFloorId;
      this.academicSession = params.get('session') || this.academicSession;
      this.pendingCapacityRoomId = params.get('room') || '';
      if (['structure', 'rooms', 'capacity'].includes(this.section())) this.loadStructure(true);
    });
    this.loadHostels();
    this.api.masterValues('academic', { active: true }).subscribe({
      next: ({ items }) => this.sessions.set(items),
    });
    this.api.hostelStudents().subscribe({ next: ({ items }) => this.students.set(items) });
    this.api.hostelCapacityOptions().subscribe({
      next: ({ seaters, roomTypes }) => {
        this.savedSeaters.set(seaters);
        this.savedRoomTypes.set(roomTypes);
      },
    });
  }

  saveHostel() {
    if (this.hostelName.trim().length < 2)
      return this.error.set('Hostel name must contain at least 2 characters.');
    if (this.blockCount < 0 || this.floorCount < 0 || this.plannedRoomCount < 0)
      return this.error.set('Blocks, floors and total rooms cannot be negative.');
    this.startSaving();
    const editing = this.editingHostel();
    const body = {
      name: this.hostelName.trim(),
      type: this.hostelType,
      blockCount: this.blockCount,
      floorCount: this.floorCount,
      plannedRoomCount: this.plannedRoomCount,
    };
    const request = editing
      ? this.api.updateHostel(editing._id, body)
      : this.api.createHostel(body);
    request.subscribe({
      next: () => {
        this.message.set(
          editing ? 'Hostel details updated.' : 'Hostel created. Add blocks and floors manually.',
        );
        this.resetHostelForm();
        this.hostelEditorOpen.set(false);
        this.loadHostels();
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  handleHostelAction(action: string, hostel: Hostel) {
    if (action === 'structure') {
      void this.router.navigate(['/admin/master-data/hostel/structure'], {
        queryParams: { hostel: hostel._id },
      });
    } else if (action === 'edit') {
      this.error.set('');
      this.editingHostel.set(hostel);
      this.hostelName = hostel.name;
      this.hostelType = hostel.type;
      this.blockCount = hostel.blockCount;
      this.floorCount = hostel.floorCount || 0;
      this.plannedRoomCount = hostel.plannedRoomCount || 0;
      this.hostelEditorOpen.set(true);
    } else if (action === 'toggle') {
      this.api.updateHostel(hostel._id, { isActive: !hostel.isActive }).subscribe({
        next: () => {
          this.message.set(hostel.isActive ? 'Hostel disabled.' : 'Hostel enabled.');
          this.loadHostels();
        },
        error: (error) => this.fail(error),
      });
    } else if (action === 'delete') {
      this.deleteTarget.set({ kind: 'hostel', item: hostel });
    }
  }

  openHostelEditor() {
    this.error.set('');
    this.message.set('');
    this.resetHostelForm();
    this.hostelEditorOpen.set(true);
  }

  closeHostelEditor() {
    if (this.saving()) return;
    this.hostelEditorOpen.set(false);
    this.resetHostelForm();
  }

  resetHostelForm() {
    this.editingHostel.set(null);
    this.hostelName = '';
    this.hostelType = 'boys';
    this.blockCount = 1;
    this.floorCount = 1;
    this.plannedRoomCount = 0;
  }

  hostelSelectionChanged() {
    this.selectedBlockId = '';
    this.selectedFloorId = '';
    this.selectedRoomId = '';
    this.selectedBedNumber = null;
    this.selectedStructureKind.set(null);
    this.selectedStructureId.set('');
    this.roomSearch = '';
    this.roomConfigurationFilter = 'all';
    this.roomStatusFilter = 'all';
    this.closeRoomEditor();
    this.closeCapacityEditor();
    if (!this.selectedHostelId) {
      this.blocks.set([]);
      this.floors.set([]);
      this.rooms.set([]);
      return;
    }
    this.loadStructure(['structure', 'rooms', 'capacity', 'allocation'].includes(this.section()));
  }

  blockSelectionChanged() {
    this.selectedFloorId = '';
    this.roomSearch = '';
  }

  floorSelectionChanged() {
    this.roomSearch = '';
  }

  saveBlock() {
    if (!this.selectedHostelId || !this.blockName.trim())
      return this.error.set('Select a hostel and enter the block name.');
    this.startSaving();
    const editing = this.editingBlock();
    const request = editing
      ? this.api.updateHostelBlock(editing._id, this.blockName.trim())
      : this.api.createHostelBlock({
          hostelId: this.selectedHostelId,
          name: this.blockName.trim(),
        });
    request.subscribe({
      next: () => this.structureSaved('Block saved.'),
      error: (error) => this.fail(error),
    });
  }

  handleBlockAction(action: string, block: HostelBlock) {
    if (action === 'edit') {
      this.error.set('');
      this.editingBlock.set(block);
      this.blockName = block.name;
      this.structureDialog.set({ kind: 'block', mode: 'edit' });
    } else if (action === 'delete') {
      this.deleteTarget.set({ kind: 'block', item: block });
    }
  }

  saveFloor() {
    if (!this.selectedHostelId || !this.floorName.trim())
      return this.error.set('Select a hostel and enter the floor name.');
    this.startSaving();
    const editing = this.editingFloor();
    const request = editing
      ? this.api.updateHostelFloor(editing._id, this.floorName.trim())
      : this.api.createHostelFloor({
          hostelId: this.selectedHostelId,
          name: this.floorName.trim(),
        });
    request.subscribe({
      next: () => this.structureSaved('Floor saved.'),
      error: (error) => this.fail(error),
    });
  }

  handleFloorAction(action: string, floor: HostelFloor) {
    if (action === 'edit') {
      this.error.set('');
      this.editingFloor.set(floor);
      this.floorName = floor.name;
      this.structureDialog.set({ kind: 'floor', mode: 'edit' });
    } else if (action === 'delete') {
      this.deleteTarget.set({ kind: 'floor', item: floor });
    }
  }

  openStructureDialog(kind: StructureKind) {
    if (!this.selectedHostelId) {
      this.error.set('Select a hostel before adding structure items.');
      return;
    }
    this.error.set('');
    this.message.set('');
    this.cancelStructureEdit();
    this.structureDialog.set({ kind, mode: 'create' });
  }

  closeStructureDialog() {
    if (this.saving()) return;
    this.structureDialog.set(null);
    this.cancelStructureEdit();
  }

  submitStructureDialog() {
    const dialog = this.structureDialog();
    if (!dialog) return;
    if (dialog.kind === 'block') this.saveBlock();
    else this.saveFloor();
  }

  selectStructure(kind: StructureKind, id: string) {
    this.selectedStructureKind.set(kind);
    this.selectedStructureId.set(id);
  }

  deleteTitle() {
    const target = this.deleteTarget();
    if (!target) return '';
    return target.kind === 'room'
      ? `Delete room ${target.item.roomNumber}?`
      : `Delete ${target.item.name}?`;
  }

  deleteDescription() {
    const target = this.deleteTarget();
    if (!target) return '';
    if (target.kind === 'hostel') {
      return 'This action may be blocked when allocation history exists. Related structure is removed only when the current server permits deletion.';
    }
    if (target.kind === 'room') {
      return `${target.item.hostelName} / ${target.item.blockName} / ${target.item.floorName}. The server will block deletion when dependent records exist.`;
    }
    return `This ${target.kind} can only be deleted when the current server rules allow it.`;
  }

  confirmDelete() {
    const target = this.deleteTarget();
    if (!target) return;
    this.startSaving();
    const request: Observable<unknown> =
      target.kind === 'hostel'
        ? this.api.deleteHostel(target.item._id)
        : target.kind === 'block'
          ? this.api.deleteHostelBlock(target.item._id)
          : target.kind === 'floor'
            ? this.api.deleteHostelFloor(target.item._id)
            : this.api.deleteHostelRoom(target.item._id);
    request.subscribe({
      next: () => {
        if (
          target.kind !== 'hostel' &&
          target.kind !== 'room' &&
          this.selectedStructureKind() === target.kind &&
          this.selectedStructureId() === target.item._id
        ) {
          this.selectedStructureKind.set(null);
          this.selectedStructureId.set('');
        }
        this.deleteTarget.set(null);
        this.message.set(
          target.kind === 'hostel'
            ? 'Hostel deleted.'
            : target.kind === 'block'
              ? 'Block deleted.'
              : target.kind === 'floor'
                ? 'Floor deleted.'
                : 'Room deleted.',
        );
        this.saving.set(false);
        if (target.kind === 'hostel') this.loadHostels();
        else if (target.kind === 'room') {
          this.loadRooms();
          this.loadHostels();
        } else this.loadStructure(true);
      },
      error: (error) => this.fail(error),
    });
  }

  closeDeleteDialog() {
    if (!this.saving()) this.deleteTarget.set(null);
  }

  cancelStructureEdit() {
    this.editingBlock.set(null);
    this.editingFloor.set(null);
    this.blockName = '';
    this.floorName = '';
  }

  @HostListener('document:keydown.escape')
  closePhaseOneOverlays() {
    this.closeHostelEditor();
    this.closeStructureDialog();
    this.closeDeleteDialog();
    this.closeRoomEditor();
    this.closeCapacityEditor();
    this.closeAllocationDrawer();
    this.closeAllocationDetail();
    if (!this.saving()) {
      this.viewingRoom.set(null);
      this.generationConfirmOpen.set(false);
    }
  }

  openRoomEditor(mode: 'manual' | 'automatic' = 'manual') {
    if (!this.locationReady()) {
      this.error.set('Select a hostel, block and floor first.');
      return;
    }
    this.error.set('');
    this.message.set('');
    this.editingRoom.set(null);
    this.viewingRoom.set(null);
    this.roomMode = mode;
    this.roomNumber = '';
    this.roomEditorOpen.set(true);
  }

  closeRoomEditor() {
    if (this.saving()) return;
    this.roomEditorOpen.set(false);
    this.editingRoom.set(null);
    this.editedRoomNumber = '';
    this.error.set('');
  }

  closeCapacityEditor() {
    if (this.saving()) return;
    this.capacityRoom.set(null);
    this.error.set('');
  }

  saveRooms() {
    if (!this.selectedHostelId || !this.selectedBlockId || !this.selectedFloorId)
      return this.error.set('Select a hostel, block and floor.');
    if (this.roomMode === 'manual' && !this.roomNumber.trim())
      return this.error.set('Enter a room number.');
    if (
      this.roomMode === 'automatic' &&
      (this.roomStartNumber < 1 ||
        this.roomGenerationCount < 1 ||
        this.roomGenerationCount > 500)
    ) {
      return this.error.set('Start number must be positive and room count must be between 1 and 500.');
    }
    if (
      this.roomMode === 'automatic' &&
      this.roomGenerationCount >= 100 &&
      !this.bypassGenerationConfirm
    ) {
      this.generationConfirmOpen.set(true);
      return;
    }
    this.bypassGenerationConfirm = false;
    this.startSaving();
    const base = {
      hostelId: this.selectedHostelId,
      blockId: this.selectedBlockId,
      floorId: this.selectedFloorId,
    };
    const request: Observable<unknown> =
      this.roomMode === 'manual'
        ? this.api.createHostelRoom({ ...base, roomNumber: this.roomNumber.trim() })
        : this.api.generateHostelRooms({
            ...base,
            prefix: this.roomPrefix.trim(),
            startNumber: this.roomStartNumber,
            count: this.roomGenerationCount,
          });
    request.subscribe({
      next: () => {
        this.message.set(
          this.roomMode === 'manual' ? 'Room created.' : 'Rooms generated successfully.',
        );
        this.roomNumber = '';
        this.roomEditorOpen.set(false);
        this.generationConfirmOpen.set(false);
        this.loadRooms();
        this.loadHostels();
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  handleRoomAction(action: string, room: HostelRoom) {
    if (action === 'view') {
      this.viewingRoom.set(room);
    } else if (action === 'edit') {
      this.error.set('');
      this.editingRoom.set(room);
      this.editedRoomNumber = room.roomNumber;
      this.roomEditorOpen.set(true);
    } else if (action === 'capacity') {
      void this.router.navigate(['/admin/master-data/hostel/capacity'], {
        queryParams: {
          session: this.academicSession,
          hostel: room.hostelId,
          block: room.blockId,
          floor: room.floorId,
          room: room._id,
        },
      });
    } else if (action === 'toggle') {
      this.api
        .updateHostelRoomDetails(room._id, { isActive: !room.isActive })
        .subscribe({
          next: () => {
            this.message.set(room.isActive ? 'Room disabled.' : 'Room enabled.');
            this.loadRooms();
          },
          error: (error) => this.fail(error),
        });
    } else if (action === 'delete') {
      this.deleteTarget.set({ kind: 'room', item: room });
    }
  }

  handleCapacityAction(action: string, room: HostelRoom) {
    if (action === 'capacity') this.openCapacity(room);
    else if (action === 'toggle') {
      this.api
        .updateHostelRoomDetails(room._id, { isActive: !room.isActive })
        .subscribe({
          next: () => {
            this.message.set(room.isActive ? 'Room disabled.' : 'Room enabled.');
            this.loadRooms();
          },
          error: (error) => this.fail(error),
        });
    }
  }

  confirmRoomGeneration() {
    this.generationConfirmOpen.set(false);
    this.bypassGenerationConfirm = true;
    this.saveRooms();
  }

  saveRoomNumber() {
    const room = this.editingRoom();
    if (!room || !this.editedRoomNumber.trim()) return;
    this.startSaving();
    this.api
      .updateHostelRoomDetails(room._id, { roomNumber: this.editedRoomNumber.trim() })
      .subscribe({
        next: () => {
          this.editingRoom.set(null);
          this.roomEditorOpen.set(false);
          this.editedRoomNumber = '';
          this.message.set('Room number updated.');
          this.loadRooms();
          this.saving.set(false);
        },
        error: (error) => this.fail(error),
      });
  }

  openCapacity(room: HostelRoom) {
    this.error.set('');
    this.message.set('');
    this.capacityRoom.set(room);
    if (!room.configuredForSession) {
      this.capacityChoice = String(this.savedSeaters()[0] || 2);
      this.customCapacity = null;
      this.roomTypeChoice = this.savedRoomTypes()[0] || 'Non-AC';
      this.customRoomType = '';
      return;
    }
    this.capacityChoice = this.savedSeaters().includes(room.capacity)
      ? String(room.capacity)
      : 'custom';
    this.customCapacity = this.capacityChoice === 'custom' ? room.capacity || null : null;
    this.roomTypeChoice = this.savedRoomTypes().includes(room.roomType) ? room.roomType : 'custom';
    this.customRoomType = this.roomTypeChoice === 'custom' ? room.roomType : '';
  }

  saveCapacity() {
    const room = this.capacityRoom();
    const capacity =
      this.capacityChoice === 'custom' ? Number(this.customCapacity) : Number(this.capacityChoice);
    const roomType =
      this.roomTypeChoice === 'custom' ? this.customRoomType.trim() : this.roomTypeChoice;
    if (!room || !this.academicSession || !capacity || capacity > 30 || !roomType)
      return this.error.set('Select the session, seater and room type.');
    this.startSaving();
    this.api
      .saveHostelRoomCapacity(room._id, {
        academicSession: this.academicSession,
        capacity,
        roomType,
      })
      .subscribe({
        next: () => {
          this.capacityRoom.set(null);
          this.message.set(`Capacity saved for room ${room.roomNumber}.`);
          this.loadRooms();
          this.api.hostelCapacityOptions().subscribe({
            next: ({ seaters, roomTypes }) => {
              this.savedSeaters.set(seaters);
              this.savedRoomTypes.set(roomTypes);
            },
          });
          this.saving.set(false);
        },
        error: (error) => this.fail(error),
      });
  }

  openAllocationDrawer() {
    this.error.set('');
    this.message.set('');
    this.transferTarget.set(null);
    this.allocationDetail.set(null);
    this.academicSession = this.allocationBrowseSession || currentAcademicSession();
    this.selectedStudentId = '';
    this.studentSearch = '';
    this.resetAllocationDestination();
    this.allocationStage.set(1);
    this.allocationDrawerOpen.set(true);
    this.loadEligibilityAllocations();
  }

  closeAllocationDrawer() {
    if (this.saving()) return;
    this.allocationDrawerOpen.set(false);
    this.transferTarget.set(null);
    this.resetAllocationDestination();
    this.error.set('');
  }

  selectAllocationStudent(student: HostelStudentOption) {
    this.selectedStudentId = student._id;
    this.studentSearch = `${student.name} · ${student.applicationNumber}`;
    this.error.set('');
  }

  continueAllocation() {
    const stage = this.allocationStage();
    if (stage === 1) {
      if (!this.academicSession || !this.selectedStudentId) {
        this.error.set('Select an academic session and student to continue.');
        return;
      }
      if (this.activeAllocationForSelectedStudent()) {
        this.error.set('This student already has an active hostel allocation for the session.');
        return;
      }
      this.error.set('');
      this.allocationStage.set(2);
      return;
    }
    if (stage === 2) {
      if (!this.selectedRoomId || !this.selectedBedNumber) {
        this.error.set('Select an available room and bed to continue.');
        return;
      }
      this.error.set('');
      this.allocationStage.set(3);
    }
  }

  previousAllocationStage() {
    const stage = this.allocationStage();
    if (stage > 1 && !this.transferTarget()) this.allocationStage.set((stage - 1) as AllocationStage);
    else if (stage === 3 && this.transferTarget()) this.allocationStage.set(2);
    this.error.set('');
  }

  allocationHostelSelectionChanged() {
    this.selectedBlockId = '';
    this.selectedFloorId = '';
    this.selectedRoomId = '';
    this.selectedBedNumber = null;
    this.allocationRoomSearch = '';
    this.blocks.set([]);
    this.floors.set([]);
    this.rooms.set([]);
    if (!this.selectedHostelId) return;
    this.allocationRoomLoading.set(true);
    this.api.hostelStructure(this.selectedHostelId).subscribe({
      next: ({ items, floors }) => {
        this.blocks.set(items);
        this.floors.set(floors);
        this.loadAllocationRooms();
      },
      error: (error) => {
        this.allocationRoomLoading.set(false);
        this.fail(error);
      },
    });
  }

  allocationBlockSelectionChanged() {
    this.selectedFloorId = '';
    this.selectedRoomId = '';
    this.selectedBedNumber = null;
    this.allocationRoomSearch = '';
  }

  allocationFloorSelectionChanged() {
    this.selectedRoomId = '';
    this.selectedBedNumber = null;
    this.allocationRoomSearch = '';
  }

  selectAllocationRoom(room: HostelRoom) {
    this.selectedRoomId = room._id;
    this.selectedBedNumber = null;
    this.error.set('');
  }

  selectAllocationBed(bed: number) {
    if (!this.availableBeds().includes(bed)) return;
    this.selectedBedNumber = bed;
    this.error.set('');
  }

  viewAllocation(allocation: HostelAllocation) {
    this.allocationDetail.set(allocation);
  }

  closeAllocationDetail() {
    this.allocationDetail.set(null);
  }

  startTransfer(allocation: HostelAllocation) {
    this.error.set('');
    this.message.set('');
    this.allocationDetail.set(null);
    this.transferTarget.set(allocation);
    this.academicSession = allocation.academicSession;
    this.selectedStudentId = allocation.studentAdmissionId;
    this.resetAllocationDestination();
    this.allocationStage.set(2);
    this.allocationDrawerOpen.set(true);
  }

  allocationBrowseChanged() {
    this.loadAllocations();
  }

  allocationFormSessionChanged() {
    this.resetAllocationDestination();
    this.loadEligibilityAllocations();
  }

  clearAllocationFilters() {
    this.allocationSearch = '';
    this.allocationBrowseHostelId = '';
    this.allocationStatusFilter = 'active';
    this.loadAllocations();
  }

  loadAllocationRooms() {
    if (!this.selectedHostelId) {
      this.rooms.set([]);
      this.allocationRoomLoading.set(false);
      return;
    }
    this.allocationRoomLoading.set(true);
    this.api
      .hostelRooms({ hostelId: this.selectedHostelId, session: this.academicSession })
      .subscribe({
        next: ({ items }) => {
          this.rooms.set(items);
          this.allocationRoomLoading.set(false);
        },
        error: (error) => {
          this.allocationRoomLoading.set(false);
          this.fail(error);
        },
      });
  }

  loadEligibilityAllocations() {
    this.api
      .hostelAllocations({ session: this.academicSession, status: 'active' })
      .subscribe({
        next: ({ items }) => this.eligibilityAllocations.set(items),
        error: (error) => this.fail(error),
      });
  }

  private resetAllocationDestination() {
    this.selectedHostelId = '';
    this.selectedBlockId = '';
    this.selectedFloorId = '';
    this.selectedRoomId = '';
    this.selectedBedNumber = null;
    this.allocationRoomSearch = '';
    this.blocks.set([]);
    this.floors.set([]);
    this.rooms.set([]);
  }

  createOrTransferAllocation() {
    if (!this.academicSession || !this.selectedRoomId || !this.selectedBedNumber)
      return this.error.set('Select a session, room and available bed.');
    const transfer = this.transferTarget();
    if (!transfer && !this.selectedStudentId) return this.error.set('Select a student.');
    const studentName = transfer?.studentName || this.selectedStudent()?.name || 'Student';
    const roomNumber = this.selectedRoom()?.roomNumber || '';
    const bedNumber = this.selectedBedNumber;
    this.startSaving();
    const request = transfer
      ? this.api.transferHostelAllocation(transfer._id, {
          roomId: this.selectedRoomId,
          bedNumber: this.selectedBedNumber,
          reason: this.transferReason,
        })
      : this.api.createHostelAllocation({
          studentAdmissionId: this.selectedStudentId,
          academicSession: this.academicSession,
          roomId: this.selectedRoomId,
          bedNumber: this.selectedBedNumber,
        });
    request.subscribe({
      next: () => {
        this.message.set(
          transfer
            ? 'Student transferred successfully.'
            : `${studentName} was allocated Room ${roomNumber}, Bed ${bedNumber}.`,
        );
        this.saving.set(false);
        this.allocationDrawerOpen.set(false);
        this.transferTarget.set(null);
        this.resetAllocationDestination();
        this.selectedStudentId = '';
        this.loadAllocations();
        this.loadEligibilityAllocations();
      },
      error: (error: { status?: number; error?: { message?: string } }) => {
        const text = error.error?.message || '';
        if (error.status === 409 && /bed|room|hostel/i.test(text)) {
          this.allocationStage.set(2);
          this.loadAllocationRooms();
        }
        this.fail(error);
      },
    });
  }

  handleAllocationAction(action: string, allocation: HostelAllocation) {
    if (action === 'view') {
      this.viewAllocation(allocation);
    } else if (action === 'transfer') {
      this.startTransfer(allocation);
    } else if (action === 'vacate') {
      this.vacateReason = '';
      this.vacateTarget.set(allocation);
    }
  }

  confirmVacate() {
    const target = this.vacateTarget();
    if (!target) return;
    this.startSaving();
    this.api.vacateHostelAllocation(target._id, this.vacateReason).subscribe({
      next: () => {
        this.vacateTarget.set(null);
        this.message.set(
          `Room ${target.roomNumber}, Bed ${target.bedNumber} is now available.`,
        );
        this.loadAllocations();
        this.loadEligibilityAllocations();
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  cancelTransfer() {
    this.transferTarget.set(null);
    this.transferReason = '';
    this.allocationDrawerOpen.set(false);
    this.resetAllocationDestination();
  }

  roomChanged() {
    this.selectedBedNumber = null;
  }

  sessionChanged() {
    if (['capacity', 'allocation'].includes(this.section())) this.loadRooms();
    if (this.section() === 'allocation') this.loadAllocations();
    if (this.section() === 'overview') this.loadOverview();
  }

  loadHostels() {
    this.loading.set(true);
    this.api.hostels(this.academicSession).subscribe({
      next: ({ items }) => {
        this.hostels.set(items);
        if (!this.selectedHostelId && items.length) this.selectedHostelId = items[0]._id;
        this.loading.set(false);
        this.loadForSection();
      },
      error: (error) => this.fail(error),
    });
  }

  loadStructure(loadDependentData = false) {
    if (!this.selectedHostelId) return;
    this.api.hostelStructure(this.selectedHostelId).subscribe({
      next: ({ items, floors }) => {
        this.blocks.set(items);
        this.floors.set(floors);
        if (loadDependentData) this.loadRooms();
        if (loadDependentData && this.section() === 'allocation') this.loadAllocations();
      },
      error: (error) => this.fail(error),
    });
  }

  loadRooms() {
    if (!this.selectedHostelId) return this.rooms.set([]);
    this.loading.set(true);
    this.roomsLoadFailed.set(false);
    this.api
      .hostelRooms({ hostelId: this.selectedHostelId, session: this.academicSession })
      .subscribe({
        next: ({ items }) => {
          this.rooms.set(items);
          this.loading.set(false);
          if (this.pendingCapacityRoomId) {
            const room = items.find((item) => item._id === this.pendingCapacityRoomId);
            this.pendingCapacityRoomId = '';
            if (room) this.openCapacity(room);
          }
        },
        error: (error) => {
          this.roomsLoadFailed.set(true);
          this.fail(error);
        },
      });
  }

  loadAllocations() {
    this.allocationLoading.set(true);
    this.allocationLoadFailed.set(false);
    this.api
      .hostelAllocations({
        session: this.allocationBrowseSession,
        hostelId: this.allocationBrowseHostelId,
        status: this.allocationStatusFilter === 'all' ? undefined : this.allocationStatusFilter,
      })
      .subscribe({
        next: ({ items }) => {
          this.allocations.set(items);
          this.allocationLoading.set(false);
        },
        error: (error) => {
          this.allocationLoading.set(false);
          this.allocationLoadFailed.set(true);
          this.fail(error);
        },
      });
  }

  loadOverview() {
    this.loading.set(true);
    this.api.hostelOverview(this.academicSession).subscribe({
      next: (overview) => {
        this.overview.set(overview);
        this.loading.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  private loadForSection() {
    if (this.section() === 'allocation') {
      this.loadAllocations();
      return;
    }
    if (!this.selectedHostelId) return;
    if (this.section() === 'structure') this.loadStructure(true);
    if (['rooms', 'capacity'].includes(this.section())) this.loadStructure(true);
    if (this.section() === 'overview') this.loadOverview();
  }

  private structureSaved(message: string) {
    this.message.set(message);
    this.structureDialog.set(null);
    this.cancelStructureEdit();
    this.loadStructure(true);
    this.saving.set(false);
  }

  private startSaving() {
    this.saving.set(true);
    this.message.set('');
    this.error.set('');
  }

  private fail(error: { error?: { message?: string } }) {
    this.error.set(error.error?.message || 'The hostel operation failed.');
    this.loading.set(false);
    this.saving.set(false);
  }
}

const SECTION_CONTENT: Record<HostelSection, { title: string; description: string }> = {
  details: {
    title: 'Hostel Details',
    description: 'Create and manage hostel records.',
  },
  structure: {
    title: 'Hostel Structure',
    description: 'Organize blocks and floors for the selected hostel.',
  },
  rooms: {
    title: 'Rooms',
    description: 'Create, generate and manage hostel rooms.',
  },
  capacity: {
    title: 'Room Capacity',
    description: 'Configure session-wise room capacity.',
  },
  allocation: {
    title: 'Student Allocation',
    description: 'Allocate, transfer and vacate hostel beds.',
  },
  overview: {
    title: 'Occupancy Overview',
    description: 'Monitor rooms, beds and availability.',
  },
};

function currentAcademicSession() {
  const now = new Date();
  const start = now.getMonth() >= 5 ? now.getFullYear() : now.getFullYear() - 1;
  return `${start}/${String(start + 1).slice(-2)}`;
}

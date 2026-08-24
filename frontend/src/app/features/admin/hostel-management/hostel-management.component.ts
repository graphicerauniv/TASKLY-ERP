import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'erp-hostel-management',
  imports: [AdminPageComponent, CompactActionMenuComponent, FormsModule, DatePipe, DecimalPipe],
  templateUrl: './hostel-management.component.html',
  styleUrl: './hostel-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostelManagementComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
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
  readonly editingRoom = signal<HostelRoom | null>(null);
  readonly capacityRoom = signal<HostelRoom | null>(null);
  readonly transferTarget = signal<HostelAllocation | null>(null);
  readonly vacateTarget = signal<HostelAllocation | null>(null);

  readonly pageTitle = computed(() => SECTION_CONTENT[this.section()].title);
  readonly pageDescription = computed(() => SECTION_CONTENT[this.section()].description);
  readonly hostelActions = (hostel: Hostel): CompactActionItem[] => [
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
    { id: 'edit', label: 'Edit room number', icon: 'edit' },
    { id: 'toggle', label: room.isActive ? 'Disable room' : 'Enable room', icon: 'edit' },
    { id: 'delete', label: 'Delete room', icon: 'delete', destructive: true, separator: true },
  ];
  readonly capacityActions: CompactActionItem[] = [
    { id: 'capacity', label: 'Set room capacity', icon: 'edit' },
  ];
  readonly allocationActions: CompactActionItem[] = [
    { id: 'transfer', label: 'Transfer room', icon: 'transfer' },
    { id: 'vacate', label: 'Vacate room', icon: 'vacate', destructive: true, separator: true },
  ];

  hostelName = '';
  hostelType: Hostel['type'] = 'boys';
  blockCount = 1;
  floorCount = 1;
  plannedRoomCount = 0;
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
  capacityChoice = '2';
  customCapacity: number | null = null;
  roomTypeChoice = 'Non-AC';
  customRoomType = '';
  selectedStudentId = '';
  selectedRoomId = '';
  selectedBedNumber: number | null = null;
  transferReason = '';
  vacateReason = '';

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

  constructor() {
    this.route.data.subscribe((data) => {
      this.section.set((data['section'] as HostelSection) || 'details');
      this.loadForSection();
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
    if (!this.hostelName.trim()) return this.error.set('Enter a hostel name.');
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
        this.loadHostels();
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  handleHostelAction(action: string, hostel: Hostel) {
    if (action === 'edit') {
      this.editingHostel.set(hostel);
      this.hostelName = hostel.name;
      this.hostelType = hostel.type;
      this.blockCount = hostel.blockCount;
      this.floorCount = hostel.floorCount || 0;
      this.plannedRoomCount = hostel.plannedRoomCount || 0;
    } else if (action === 'toggle') {
      this.api.updateHostel(hostel._id, { isActive: !hostel.isActive }).subscribe({
        next: () => this.loadHostels(),
        error: (error) => this.fail(error),
      });
    } else if (action === 'delete' && confirm(`Delete ${hostel.name}?`)) {
      this.api.deleteHostel(hostel._id).subscribe({
        next: () => {
          this.message.set('Hostel deleted.');
          this.loadHostels();
        },
        error: (error) => this.fail(error),
      });
    }
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
    if (!this.selectedHostelId) {
      this.blocks.set([]);
      this.floors.set([]);
      this.rooms.set([]);
      return;
    }
    this.loadStructure(['rooms', 'capacity', 'allocation'].includes(this.section()));
  }

  blockSelectionChanged() {
    this.selectedFloorId = '';
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
      this.editingBlock.set(block);
      this.blockName = block.name;
    } else if (action === 'delete' && confirm(`Delete ${block.name}?`)) {
      this.api.deleteHostelBlock(block._id).subscribe({
        next: () => this.structureSaved('Block deleted.'),
        error: (error) => this.fail(error),
      });
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
      this.editingFloor.set(floor);
      this.floorName = floor.name;
    } else if (action === 'delete' && confirm(`Delete ${floor.name}?`)) {
      this.api.deleteHostelFloor(floor._id).subscribe({
        next: () => this.structureSaved('Floor deleted.'),
        error: (error) => this.fail(error),
      });
    }
  }

  cancelStructureEdit() {
    this.editingBlock.set(null);
    this.editingFloor.set(null);
    this.blockName = '';
    this.floorName = '';
  }

  saveRooms() {
    if (!this.selectedHostelId || !this.selectedBlockId || !this.selectedFloorId)
      return this.error.set('Select a hostel, block and floor.');
    if (this.roomMode === 'manual' && !this.roomNumber.trim())
      return this.error.set('Enter a room number.');
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
        this.loadRooms();
        this.loadHostels();
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  handleRoomAction(action: string, room: HostelRoom) {
    if (action === 'edit') {
      this.editingRoom.set(room);
      this.editedRoomNumber = room.roomNumber;
    } else if (action === 'toggle') {
      this.api
        .updateHostelRoomDetails(room._id, { isActive: !room.isActive })
        .subscribe({ next: () => this.loadRooms(), error: (error) => this.fail(error) });
    } else if (action === 'delete' && confirm(`Delete room ${room.roomNumber}?`)) {
      this.api.deleteHostelRoom(room._id).subscribe({
        next: () => {
          this.message.set('Room deleted.');
          this.loadRooms();
          this.loadHostels();
        },
        error: (error) => this.fail(error),
      });
    }
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
          this.editedRoomNumber = '';
          this.message.set('Room number updated.');
          this.loadRooms();
          this.saving.set(false);
        },
        error: (error) => this.fail(error),
      });
  }

  openCapacity(room: HostelRoom) {
    this.capacityRoom.set(room);
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
    if (!room || !this.academicSession || !capacity || !roomType)
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

  createOrTransferAllocation() {
    if (!this.academicSession || !this.selectedRoomId || !this.selectedBedNumber)
      return this.error.set('Select a session, room and available bed.');
    const transfer = this.transferTarget();
    if (!transfer && !this.selectedStudentId) return this.error.set('Select a student.');
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
          transfer ? 'Student transferred successfully.' : 'Student allocated successfully.',
        );
        this.cancelTransfer();
        this.selectedStudentId = '';
        this.loadRooms();
        this.loadAllocations();
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  handleAllocationAction(action: string, allocation: HostelAllocation) {
    if (action === 'transfer') {
      this.transferTarget.set(allocation);
      this.selectedHostelId = allocation.hostelId;
      this.selectedBlockId = allocation.blockId || '';
      this.selectedFloorId = allocation.floorId || '';
      this.selectedRoomId = '';
      this.selectedBedNumber = null;
      this.loadStructure(true);
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
        this.message.set('Room vacated and bed released.');
        this.loadRooms();
        this.loadAllocations();
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  cancelTransfer() {
    this.transferTarget.set(null);
    this.transferReason = '';
    this.selectedRoomId = '';
    this.selectedBedNumber = null;
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
    this.api
      .hostelRooms({ hostelId: this.selectedHostelId, session: this.academicSession })
      .subscribe({
        next: ({ items }) => {
          this.rooms.set(items);
          this.loading.set(false);
        },
        error: (error) => this.fail(error),
      });
  }

  loadAllocations() {
    this.api
      .hostelAllocations({
        session: this.academicSession,
        hostelId: this.selectedHostelId,
        status: 'active',
      })
      .subscribe({
        next: ({ items }) => this.allocations.set(items),
        error: (error) => this.fail(error),
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
    if (!this.selectedHostelId) return;
    if (this.section() === 'structure') this.loadStructure();
    if (['rooms', 'capacity', 'allocation'].includes(this.section())) this.loadStructure(true);
    if (this.section() === 'overview') this.loadOverview();
  }

  private structureSaved(message: string) {
    this.message.set(message);
    this.cancelStructureEdit();
    this.loadStructure();
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
    description: 'Create hostels and maintain their basic structure information.',
  },
  structure: {
    title: 'Hostel Wise Block, Floor',
    description: 'Assign meaningful block and floor names for every hostel.',
  },
  rooms: {
    title: 'Hostel Room Detail',
    description: 'Create rooms manually or automatically within a selected floor.',
  },
  capacity: {
    title: 'Room Capacity Detail',
    description: 'Configure session-wise room seater and AC or Non-AC type.',
  },
  allocation: {
    title: 'Student Allocation',
    description: 'Allocate, transfer and vacate configured hostel beds.',
  },
  overview: {
    title: 'Occupancy Overview',
    description: 'Monitor session-wise hostel rooms, occupied beds and availability.',
  },
};

function currentAcademicSession() {
  const now = new Date();
  const start = now.getMonth() >= 5 ? now.getFullYear() : now.getFullYear() - 1;
  return `${start}/${String(start + 1).slice(-2)}`;
}

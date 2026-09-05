import {
  LucideBedDouble,
  LucideBookOpen,
  LucideBookOpenCheck,
  LucideBuilding2,
  LucideCalendarCheck,
  LucideClipboardCheck,
  LucideClipboardList,
  LucideDatabase,
  LucideDoorOpen,
  LucideFilePenLine,
  LucideGlobe,
  LucideGraduationCap,
  LucideHouse,
  LucideLandmark,
  LucideLayers,
  LucideLayoutDashboard,
  LucideMap,
  LucideMapPinned,
  LucideReceiptIndianRupee,
  LucideSettings2,
  LucideTableProperties,
  LucideTags,
  LucideTrash2,
  LucideUniversity,
  LucideUserPlus,
  LucideUsersRound,
  LucideWalletCards,
} from '@lucide/angular';

const ADMIN_NAVIGATION_ICONS = {
  bed: LucideBedDouble,
  book: LucideBookOpen,
  academic: LucideBookOpenCheck,
  building: LucideBuilding2,
  calendar: LucideCalendarCheck,
  approval: LucideClipboardCheck,
  admissions: LucideClipboardList,
  database: LucideDatabase,
  room: LucideDoorOpen,
  draft: LucideFilePenLine,
  globe: LucideGlobe,
  scholarship: LucideGraduationCap,
  hostel: LucideHouse,
  university: LucideLandmark,
  structure: LucideLayers,
  home: LucideLayoutDashboard,
  map: LucideMap,
  location: LucideMapPinned,
  fees: LucideReceiptIndianRupee,
  settings: LucideSettings2,
  records: LucideTableProperties,
  tags: LucideTags,
  delete: LucideTrash2,
  college: LucideUniversity,
  createStudent: LucideUserPlus,
  students: LucideUsersRound,
  finance: LucideWalletCards,
} as const;

export type AdminNavigationIcon = keyof typeof ADMIN_NAVIGATION_ICONS;

export interface AdminNavigationLink {
  readonly id: string;
  readonly label: string;
  readonly route: string;
  readonly icon: AdminNavigationIcon;
  readonly activeWhen: readonly RegExp[];
}

export interface AdminNavigationEntry {
  readonly id: string;
  readonly label: string;
  readonly description?: string;
  readonly group?: string;
  readonly icon: AdminNavigationIcon;
  readonly route?: string;
  readonly activeWhen?: readonly RegExp[];
  readonly children?: readonly AdminNavigationLink[];
}

export interface AdminNavigationSection {
  readonly id: string;
  readonly label: string;
  readonly pageTitle?: string;
  readonly description?: string;
  readonly icon: AdminNavigationIcon;
  readonly route?: string;
  readonly activeWhen: readonly RegExp[];
  readonly children?: readonly AdminNavigationEntry[];
}

export interface AdminNavigationTrail {
  readonly section: AdminNavigationSection;
  readonly cluster?: AdminNavigationEntry;
  readonly link?: AdminNavigationLink | AdminNavigationEntry;
}

export interface AdminPageContext {
  readonly title: string;
  readonly breadcrumbs: readonly string[];
}

const exact = (path: string) => new RegExp(`^${escapeRegExp(path)}/?$`);
const branch = (path: string) => new RegExp(`^${escapeRegExp(path)}(?:/|$)`);

export const ADMIN_NAVIGATION: readonly AdminNavigationSection[] = [
  {
    id: 'home',
    label: 'Home',
    pageTitle: 'Dashboard',
    icon: 'home',
    route: '/admin/dashboard',
    activeWhen: [exact('/admin/dashboard')],
  },
  {
    id: 'admissions',
    label: 'Admissions',
    icon: 'admissions',
    activeWhen: [
      exact('/admin/admission/student'),
      /^\/admin\/admissions\/applications\/[^/]+(?:\/review)?\/?$/,
      branch('/admin/admissions/forms'),
      branch('/admin/form-builder'),
      /^\/admin\/admissions\/[^/]+\/edit\/?$/,
    ],
    children: [
      {
        id: 'new-admission',
        label: 'New admission',
        route: '/admin/admission/student',
        icon: 'createStudent',
        activeWhen: [exact('/admin/admission/student'), /^\/admin\/admissions\/[^/]+\/edit\/?$/],
      },
      {
        id: 'admission-forms',
        label: 'Forms',
        route: '/admin/admissions/forms',
        icon: 'draft',
        activeWhen: [branch('/admin/admissions/forms'), branch('/admin/form-builder')],
      },
    ],
  },
  {
    id: 'students',
    label: 'Students',
    icon: 'students',
    activeWhen: [
      exact('/admin/admissions/applications'),
      exact('/admin/admissions/approved'),
      exact('/admin/admissions/unfilled'),
      exact('/admin/admissions/not-approved'),
      branch('/admin/admissions/promotions'),
      exact('/admin/delete-admissions'),
      /^\/admin\/admissions\/[^/]+\/scholarships\/?$/,
    ],
    children: [
      {
        id: 'all-student-applications',
        label: 'All applications',
        route: '/admin/admissions/applications',
        icon: 'records',
        activeWhen: [exact('/admin/admissions/applications')],
      },
      {
        id: 'student-drafts',
        label: 'Draft applications',
        route: '/admin/admissions/unfilled',
        icon: 'draft',
        activeWhen: [exact('/admin/admissions/unfilled')],
      },
      {
        id: 'student-review-queue',
        label: 'Awaiting review',
        route: '/admin/admissions/not-approved',
        icon: 'approval',
        activeWhen: [exact('/admin/admissions/not-approved')],
      },
      {
        id: 'student-directory',
        label: 'Approved students',
        route: '/admin/admissions/approved',
        icon: 'students',
        activeWhen: [
          exact('/admin/admissions/approved'),
          /^\/admin\/admissions\/[^/]+\/scholarships\/?$/,
        ],
      },
      {
        id: 'student-promotions',
        label: 'Student promotions',
        route: '/admin/admissions/promotions',
        icon: 'calendar',
        activeWhen: [branch('/admin/admissions/promotions')],
      },
      {
        id: 'record-deletion',
        label: 'Record deletion',
        route: '/admin/delete-admissions',
        icon: 'delete',
        activeWhen: [exact('/admin/delete-admissions')],
      },
    ],
  },
  {
    id: 'academics',
    label: 'Academics',
    description: 'Build structures, assign learners and manage timetables.',
    icon: 'academic',
    activeWhen: [branch('/admin/academics')],
    children: [
      {
        id: 'academic-groups',
        label: 'Groups',
        description: 'Create programme cohorts',
        group: 'Academic structure',
        route: '/admin/academics/groups',
        icon: 'students',
        activeWhen: [exact('/admin/academics/groups')],
      },
      {
        id: 'academic-sections',
        label: 'Sections',
        description: 'Map teachable sections',
        group: 'Academic structure',
        route: '/admin/academics/sections',
        icon: 'structure',
        activeWhen: [exact('/admin/academics/sections')],
      },
      {
        id: 'academic-sets',
        label: 'Sets',
        description: 'Build smaller learning sets',
        group: 'Academic structure',
        route: '/admin/academics/sets',
        icon: 'tags',
        activeWhen: [exact('/admin/academics/sets')],
      },
      {
        id: 'academic-subjects',
        label: 'Subjects',
        description: 'Configure curriculum and marks',
        group: 'Academic structure',
        route: '/admin/academics/subjects',
        icon: 'book',
        activeWhen: [exact('/admin/academics/subjects')],
      },
      {
        id: 'academic-faculty',
        label: 'Faculty',
        description: 'Manage teaching scope',
        group: 'Academic structure',
        route: '/admin/academics/faculties',
        icon: 'students',
        activeWhen: [exact('/admin/academics/faculties')],
      },
      {
        id: 'academic-rooms',
        label: 'Rooms and labs',
        description: 'Manage spaces and capacity',
        group: 'Academic structure',
        route: '/admin/academics/rooms',
        icon: 'room',
        activeWhen: [exact('/admin/academics/rooms')],
      },
      {
        id: 'student-allocation',
        label: 'Student allocation',
        description: 'Assign students to groups',
        group: 'Assignments',
        route: '/admin/academics/student-allocation',
        icon: 'approval',
        activeWhen: [exact('/admin/academics/student-allocation')],
      },
      {
        id: 'subject-assignment',
        label: 'Subject assignment',
        description: 'Map subjects to cohorts',
        group: 'Assignments',
        route: '/admin/academics/subject-assignment',
        icon: 'records',
        activeWhen: [exact('/admin/academics/subject-assignment')],
      },
      {
        id: 'timetable-masters',
        label: 'Timetable masters',
        description: 'Create schedule containers',
        group: 'Timetable',
        route: '/admin/academics/timetable-masters',
        icon: 'calendar',
        activeWhen: [exact('/admin/academics/timetable-masters')],
      },
      {
        id: 'timetable-structures',
        label: 'Timetable structures',
        description: 'Set days and period capacity',
        group: 'Timetable',
        route: '/admin/academics/timetable-structures',
        icon: 'structure',
        activeWhen: [exact('/admin/academics/timetable-structures')],
      },
      {
        id: 'timetable-periods',
        label: 'Configure periods',
        description: 'Define lectures and breaks',
        group: 'Timetable',
        route: '/admin/academics/timetable-periods',
        icon: 'calendar',
        activeWhen: [exact('/admin/academics/timetable-periods')],
      },
      {
        id: 'timetables',
        label: 'Create timetable',
        description: 'Build the weekly schedule',
        group: 'Timetable',
        route: '/admin/academics/timetables',
        icon: 'calendar',
        activeWhen: [exact('/admin/academics/timetables')],
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: 'finance',
    activeWhen: [branch('/admin/fees'), branch('/admin/accounts')],
    children: [
      {
        id: 'accounts',
        label: 'Accounts & payments',
        route: '/admin/accounts',
        icon: 'finance',
        activeWhen: [branch('/admin/accounts')],
      },
      {
        id: 'fee-progression',
        label: 'Fee progression',
        route: '/admin/fees/progression',
        icon: 'calendar',
        activeWhen: [branch('/admin/fees/progression')],
      },
      {
        id: 'fee-schedules',
        label: 'Fee change & publication',
        route: '/admin/fees/schedules',
        icon: 'calendar',
        activeWhen: [branch('/admin/fees/schedules')],
      },
      {
        id: 'scholarships',
        label: 'Scholarships',
        route: '/admin/fees/scholarships/view',
        icon: 'scholarship',
        activeWhen: [branch('/admin/fees/scholarships')],
      },
      {
        id: 'fee-configuration',
        label: 'Fee configuration',
        icon: 'fees',
        children: [
          {
            id: 'fee-books',
            label: 'Fee books',
            route: '/admin/fees/books/view',
            icon: 'book',
            activeWhen: [branch('/admin/fees/books')],
          },
          {
            id: 'fee-heads',
            label: 'Fee heads',
            route: '/admin/fees/heads/view',
            icon: 'tags',
            activeWhen: [branch('/admin/fees/heads')],
          },
          {
            id: 'course-fees',
            label: 'Course fees',
            route: '/admin/fees/course-fees/view',
            icon: 'academic',
            activeWhen: [branch('/admin/fees/course-fees')],
          },
          {
            id: 'hostel-fees',
            label: 'Hostel fees',
            route: '/admin/fees/hostel-fees/view',
            icon: 'bed',
            activeWhen: [branch('/admin/fees/hostel-fees')],
          },
        ],
      },
    ],
  },
  {
    id: 'hostel',
    label: 'Hostel',
    icon: 'hostel',
    activeWhen: [branch('/admin/master-data/hostel')],
    children: [
      {
        id: 'hostel-details',
        label: 'Hostel details',
        route: '/admin/master-data/hostel/details',
        icon: 'building',
        activeWhen: [exact('/admin/master-data/hostel/details')],
      },
      {
        id: 'hostel-structure',
        label: 'Structure',
        route: '/admin/master-data/hostel/structure',
        icon: 'structure',
        activeWhen: [exact('/admin/master-data/hostel/structure')],
      },
      {
        id: 'hostel-rooms',
        label: 'Rooms',
        route: '/admin/master-data/hostel/rooms',
        icon: 'room',
        activeWhen: [exact('/admin/master-data/hostel/rooms')],
      },
      {
        id: 'hostel-capacity',
        label: 'Room capacity',
        route: '/admin/master-data/hostel/capacity',
        icon: 'bed',
        activeWhen: [exact('/admin/master-data/hostel/capacity')],
      },
      {
        id: 'hostel-allocation',
        label: 'Allocations',
        route: '/admin/master-data/hostel/allocation',
        icon: 'students',
        activeWhen: [exact('/admin/master-data/hostel/allocation')],
      },
      {
        id: 'hostel-overview',
        label: 'Occupancy overview',
        route: '/admin/master-data/hostel/overview',
        icon: 'records',
        activeWhen: [exact('/admin/master-data/hostel/overview')],
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    activeWhen: [/^\/admin\/master-data\/(?!hostel(?:\/|$))[^/]+(?:\/|$)/],
    children: [
      {
        id: 'academic-masters',
        label: 'Academic masters',
        icon: 'academic',
        children: [
          masterLink('academic', 'Academic sessions', 'academic'),
          masterLink('university', 'Universities', 'university'),
          masterLink('college', 'Colleges', 'college'),
          masterLink('department', 'Departments', 'database'),
          masterLink('level', 'Levels', 'structure'),
          masterLink('course', 'Courses', 'book'),
        ],
      },
      {
        id: 'student-masters',
        label: 'Student setup',
        icon: 'students',
        children: [
          masterLink('domicile', 'Domiciles', 'location'),
          masterLink('student-type', 'Student types', 'students'),
          masterLink('fee-type', 'Fee types', 'tags'),
        ],
      },
      {
        id: 'location-masters',
        label: 'Locations',
        icon: 'location',
        children: [
          masterLink('country', 'Countries', 'globe'),
          masterLink('state', 'States', 'map'),
          masterLink('district', 'Districts', 'location'),
          masterLink('city', 'Cities', 'building'),
        ],
      },
      {
        id: 'custom-masters',
        label: 'Custom masters',
        route: '/admin/master-data/custom/view',
        icon: 'database',
        activeWhen: [branch('/admin/master-data/custom')],
      },
    ],
  },
];

const ADMIN_PAGE_TITLES: readonly { readonly pattern: RegExp; readonly title: string }[] = [
  { pattern: exact('/admin/admission/student'), title: 'New admission' },
  { pattern: exact('/admin/admissions/applications'), title: 'All applications' },
  { pattern: exact('/admin/admissions/unfilled'), title: 'Draft applications' },
  { pattern: exact('/admin/admissions/not-approved'), title: 'Awaiting review' },
  { pattern: exact('/admin/admissions/approved'), title: 'Approved students' },
  {
    pattern: /^\/admin\/admissions\/applications\/[^/]+\/?$/,
    title: 'Application record',
  },
  { pattern: /^\/admin\/admissions\/[^/]+\/edit\/?$/, title: 'Edit application' },
  {
    pattern: /^\/admin\/admissions\/[^/]+\/scholarships\/?$/,
    title: 'Scholarships & discounts',
  },
  { pattern: exact('/admin/fees/books/create'), title: 'Create fee book' },
  { pattern: /^\/admin\/fees\/books\/[^/]+\/edit\/?$/, title: 'Edit fee book' },
  { pattern: exact('/admin/fees/heads/create'), title: 'Create fee head' },
  { pattern: /^\/admin\/fees\/heads\/[^/]+\/edit\/?$/, title: 'Edit fee head' },
  { pattern: exact('/admin/fees/hostel-fees/create'), title: 'Create hostel fee' },
  { pattern: exact('/admin/fees/course-fees/create'), title: 'Configure course fees' },
  { pattern: exact('/admin/fees/course-fees/import'), title: 'Import course fees' },
  { pattern: exact('/admin/fees/course-fees/drafts'), title: 'Course fee drafts' },
  { pattern: exact('/admin/fees/scholarships/create'), title: 'Create scholarship' },
  {
    pattern: /^\/admin\/fees\/scholarships\/[^/]+\/edit\/?$/,
    title: 'Edit scholarship',
  },
];

export function adminNavigationIcon(icon: AdminNavigationIcon) {
  return ADMIN_NAVIGATION_ICONS[icon];
}

export function matchesAdminRoute(patterns: readonly RegExp[] | undefined, url: string): boolean {
  const path = normaliseAdminPath(url);
  return patterns?.some((pattern) => pattern.test(path)) ?? false;
}

export function findAdminNavigationTrail(url: string): AdminNavigationTrail | null {
  const path = normaliseAdminPath(url);

  for (const section of ADMIN_NAVIGATION) {
    if (!matchesAdminRoute(section.activeWhen, path)) continue;
    if (!section.children) return { section };

    for (const entry of section.children) {
      if (entry.children) {
        const link = entry.children.find((item) => matchesAdminRoute(item.activeWhen, path));
        if (link) return { section, cluster: entry, link };
      } else if (matchesAdminRoute(entry.activeWhen, path)) {
        return { section, link: entry };
      }
    }

    return { section };
  }

  return null;
}

export function resolveAdminPageContext(url: string, routeTitle = ''): AdminPageContext {
  const path = normaliseAdminPath(url);
  const trail = findAdminNavigationTrail(path);
  const configuredTitle = ADMIN_PAGE_TITLES.find((item) => item.pattern.test(path))?.title;
  const masterContext = resolveMasterDataTitle(path);
  const title =
    routeTitle ||
    configuredTitle ||
    masterContext ||
    trail?.link?.label ||
    trail?.section.pageTitle ||
    trail?.section.label ||
    'Admin workspace';
  const breadcrumbs = trail ? ['Admin', trail.section.label] : ['Admin'];

  if (trail?.cluster && trail.cluster.label !== title) breadcrumbs.push(trail.cluster.label);
  if (trail?.link && trail.link.label !== title && trail.link.label !== trail.cluster?.label) {
    breadcrumbs.push(trail.link.label);
  }

  return { title, breadcrumbs };
}

function masterLink(slug: string, label: string, icon: AdminNavigationIcon): AdminNavigationLink {
  return {
    id: `master-${slug}`,
    label,
    route: `/admin/master-data/${slug}/view`,
    icon,
    activeWhen: [branch(`/admin/master-data/${slug}`)],
  };
}

function resolveMasterDataTitle(path: string): string {
  const match = path.match(/^\/admin\/master-data\/([^/]+)(?:\/([^/]+))?(?:\/([^/]+))?\/?$/);
  if (!match || match[1] === 'hostel') return '';
  const [, slug, secondSegment, thirdSegment] = match;
  const label = humaniseSlug(slug);
  if (secondSegment === 'create') return `Create ${label}`;
  if (thirdSegment === 'edit') return `Edit ${label}`;
  return label;
}

function humaniseSlug(slug: string): string {
  const knownLabels: Record<string, string> = {
    academic: 'Academic sessions',
    university: 'Universities',
    college: 'Colleges',
    department: 'Departments',
    level: 'Levels',
    course: 'Courses',
    domicile: 'Domiciles',
    'student-type': 'Student types',
    'fee-type': 'Fee types',
    country: 'Countries',
    state: 'States',
    district: 'Districts',
    city: 'Cities',
    custom: 'Custom masters',
  };
  return (
    knownLabels[slug] || slug.replaceAll('-', ' ').replace(/^./, (letter) => letter.toUpperCase())
  );
}

function normaliseAdminPath(url: string): string {
  const path = url.split(/[?#]/, 1)[0] || '/admin/dashboard';
  return path.length > 1 ? path.replace(/\/$/, '') : path;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

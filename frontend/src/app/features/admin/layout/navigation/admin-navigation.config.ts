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
    description: 'Create admission forms and manage applicant intake.',
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
        label: 'New application',
        description: 'Register a new student application',
        group: 'Application intake',
        route: '/admin/admission/student',
        icon: 'createStudent',
        activeWhen: [exact('/admin/admission/student'), /^\/admin\/admissions\/[^/]+\/edit\/?$/],
      },
      {
        id: 'admission-forms',
        label: 'Form builder',
        description: 'Build and manage admission forms',
        group: 'Configuration',
        route: '/admin/admissions/forms',
        icon: 'draft',
        activeWhen: [branch('/admin/admissions/forms'), branch('/admin/form-builder')],
      },
    ],
  },
  {
    id: 'students',
    label: 'Students',
    description: 'Review applications and manage the student lifecycle.',
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
        description: 'Browse every submitted application',
        route: '/admin/admissions/applications',
        icon: 'records',
        activeWhen: [exact('/admin/admissions/applications')],
      },
      {
        id: 'student-drafts',
        label: 'Draft applications',
        description: 'Continue incomplete applications',
        route: '/admin/admissions/unfilled',
        icon: 'draft',
        activeWhen: [exact('/admin/admissions/unfilled')],
      },
      {
        id: 'student-review-queue',
        label: 'Awaiting review',
        description: 'Process applications needing approval',
        route: '/admin/admissions/not-approved',
        icon: 'approval',
        activeWhen: [exact('/admin/admissions/not-approved')],
      },
      {
        id: 'student-directory',
        label: 'Approved students',
        description: 'Open the active student directory',
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
        description: 'Move eligible students forward',
        route: '/admin/admissions/promotions',
        icon: 'calendar',
        activeWhen: [branch('/admin/admissions/promotions')],
      },
      {
        id: 'record-deletion',
        label: 'Record deletion',
        description: 'Review and remove student records',
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
    id: 'exams',
    label: 'Exam',
    description: 'Configure examination schedules and delivery.',
    icon: 'calendar',
    activeWhen: [branch('/admin/exams')],
    children: [
      {
        id: 'exam-schedules',
        label: 'Exam schedule',
        description: 'Create and manage exam definitions',
        route: '/admin/exams/schedules',
        icon: 'calendar',
        activeWhen: [exact('/admin/exams/schedules')],
      },
      {
        id: 'exam-shifts',
        label: 'Shift schedule',
        description: 'Configure exam shift timings',
        route: '/admin/exams/shifts',
        icon: 'calendar',
        activeWhen: [exact('/admin/exams/shifts')],
      },
      {
        id: 'exam-subject-schedules',
        label: 'Subject schedule',
        description: 'Schedule subjects, dates and shifts',
        route: '/admin/exams/subject-schedules',
        icon: 'book',
        activeWhen: [exact('/admin/exams/subject-schedules')],
      },
      {
        id: 'exam-eligibility',
        label: 'Eligible students',
        description: 'Review exam eligibility and blocking reasons',
        route: '/admin/exams/eligibility',
        icon: 'approval',
        activeWhen: [exact('/admin/exams/eligibility')],
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    description: 'Manage fees, payments, scholarships and publications.',
    icon: 'finance',
    activeWhen: [branch('/admin/fees'), branch('/admin/accounts')],
    children: [
      {
        id: 'finance-overview',
        label: 'Finance overview',
        description: 'Open a focused finance workspace',
        route: '/admin/fees/overview',
        icon: 'finance',
        activeWhen: [exact('/admin/fees/overview')],
      },
      {
        id: 'accounts',
        label: 'Accounts & payments',
        description: 'Track collections and payment activity',
        icon: 'finance',
        activeWhen: [branch('/admin/accounts')],
        children: [
          {
            id: 'collection-overview',
            label: 'Collections overview',
            route: '/admin/accounts/overview',
            icon: 'finance',
            activeWhen: [exact('/admin/accounts/overview')],
          },
          {
            id: 'payment-directory',
            label: 'Student payments',
            route: '/admin/accounts/payments',
            icon: 'fees',
            activeWhen: [exact('/admin/accounts/payments')],
          },
          {
            id: 'credit-directory',
            label: 'Excess credits',
            route: '/admin/accounts/credits',
            icon: 'finance',
            activeWhen: [exact('/admin/accounts/credits')],
          },
          {
            id: 'discount-directory',
            label: 'Discount audit',
            route: '/admin/accounts/discounts',
            icon: 'scholarship',
            activeWhen: [exact('/admin/accounts/discounts')],
          },
        ],
      },
      {
        id: 'fee-progression',
        label: 'Fee progression',
        description: 'Prepare fees for upcoming periods',
        route: '/admin/fees/progression',
        icon: 'calendar',
        activeWhen: [branch('/admin/fees/progression')],
      },
      {
        id: 'fee-schedules',
        label: 'Fee change & publication',
        description: 'Schedule and publish fee changes',
        route: '/admin/fees/schedules',
        icon: 'calendar',
        activeWhen: [branch('/admin/fees/schedules')],
      },
      {
        id: 'scholarships',
        label: 'Scholarships',
        description: 'Configure student discounts and awards',
        route: '/admin/fees/scholarships/view',
        icon: 'scholarship',
        activeWhen: [branch('/admin/fees/scholarships')],
      },
      {
        id: 'fee-configuration',
        label: 'Fee configuration',
        description: 'Set up reusable fee structures',
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
    description: 'Manage hostel structure, rooms and student occupancy.',
    icon: 'hostel',
    activeWhen: [branch('/admin/master-data/hostel')],
    children: [
      {
        id: 'hostel-details',
        label: 'Hostel details',
        description: 'Maintain hostel identity and facilities',
        route: '/admin/master-data/hostel/details',
        icon: 'building',
        activeWhen: [exact('/admin/master-data/hostel/details')],
      },
      {
        id: 'hostel-structure',
        label: 'Structure',
        description: 'Organise blocks and floors',
        route: '/admin/master-data/hostel/structure',
        icon: 'structure',
        activeWhen: [exact('/admin/master-data/hostel/structure')],
      },
      {
        id: 'hostel-rooms',
        label: 'Rooms',
        description: 'Create and manage hostel rooms',
        route: '/admin/master-data/hostel/rooms',
        icon: 'room',
        activeWhen: [exact('/admin/master-data/hostel/rooms')],
      },
      {
        id: 'hostel-capacity',
        label: 'Room capacity',
        description: 'Configure beds and room limits',
        route: '/admin/master-data/hostel/capacity',
        icon: 'bed',
        activeWhen: [exact('/admin/master-data/hostel/capacity')],
      },
      {
        id: 'hostel-allocation',
        label: 'Allocations',
        description: 'Assign students to available beds',
        route: '/admin/master-data/hostel/allocation',
        icon: 'students',
        activeWhen: [exact('/admin/master-data/hostel/allocation')],
      },
      {
        id: 'hostel-overview',
        label: 'Occupancy overview',
        description: 'Monitor availability and occupancy',
        route: '/admin/master-data/hostel/overview',
        icon: 'records',
        activeWhen: [exact('/admin/master-data/hostel/overview')],
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Configure reusable academic and operational master data.',
    icon: 'settings',
    activeWhen: [
      /^\/admin\/master-data\/(?!hostel(?:\/|$))[^/]+(?:\/|$)/,
      branch('/admin/settings'),
    ],
    children: [
      {
        id: 'exam-master',
        label: 'Exam master',
        description: 'Buildings, floors and examination rooms',
        icon: 'calendar',
        children: [
          {
            id: 'exam-buildings',
            label: 'Buildings',
            route: '/admin/settings/exam-master/buildings',
            icon: 'building',
            activeWhen: [exact('/admin/settings/exam-master/buildings')],
          },
          {
            id: 'exam-floors',
            label: 'Floors',
            route: '/admin/settings/exam-master/floors',
            icon: 'structure',
            activeWhen: [exact('/admin/settings/exam-master/floors')],
          },
          {
            id: 'exam-rooms',
            label: 'Rooms',
            route: '/admin/settings/exam-master/rooms',
            icon: 'room',
            activeWhen: [exact('/admin/settings/exam-master/rooms')],
          },
        ],
      },
      {
        id: 'academic-masters',
        label: 'Academic masters',
        description: 'Sessions, institutions and programmes',
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
        description: 'Student categories and fee types',
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
        description: 'Countries, states, districts and cities',
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
        description: 'Create organisation-specific lists',
        route: '/admin/master-data/custom/view',
        icon: 'database',
        activeWhen: [branch('/admin/master-data/custom')],
      },
    ],
  },
];

const ADMIN_PAGE_TITLES: readonly { readonly pattern: RegExp; readonly title: string }[] = [
  { pattern: exact('/admin/admission/student'), title: 'New application' },
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

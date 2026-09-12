import { AdminIllustrationKind } from '../admin-illustration/admin-illustration.registry';

export interface AdminWorkspaceLink {
  label: string;
  route: string;
  active: boolean;
}

export interface AdminWorkspace {
  module: string;
  title: string;
  illustration: AdminIllustrationKind;
  links: AdminWorkspaceLink[];
}

/** One presentation contract for admin routes. No student data or API state belongs here. */
export function resolveAdminWorkspace(url: string): AdminWorkspace | null {
  const path = url.split(/[?#]/)[0].replace(/\/+$/, '');
  if (!path.startsWith('/admin/') || path.startsWith('/admin/academics')) return null;
  const link = (label: string, route: string, active = path === route): AdminWorkspaceLink => ({
    label,
    route,
    active,
  });
  const workspace = (
    module: string,
    title: string,
    illustration: AdminIllustrationKind,
    links: AdminWorkspaceLink[] = [],
  ): AdminWorkspace => ({ module, title, illustration, links });
  const directory = (base: string) => [
    link('Directory', `${base}/view`, path === `${base}/view`),
    link('Create new', `${base}/create`),
    ...(path.endsWith('/edit') ? [link('Edit record', path)] : []),
  ];

  const fee = path.match(
    /^\/admin\/fees\/(books|heads|hostel-fees|course-fees|scholarships)(?:\/|$)/,
  );
  if (fee) {
    const titles: Record<string, string> = {
      books: 'Fee books',
      heads: 'Fee heads',
      'hostel-fees': 'Hostel fees',
      'course-fees': 'Course fees',
      scholarships: 'Scholarships',
    };
    const base = `/admin/fees/${fee[1]}`;
    const links = directory(base);
    if (fee[1] === 'course-fees')
      links.push(link('Import workbook', `${base}/import`), link('Saved drafts', `${base}/drafts`));
    return workspace(
      'Finance',
      titles[fee[1]],
      fee[1] === 'scholarships' ? 'scholarshipEmpty' : 'feeConfiguration',
      links,
    );
  }
  if (path.startsWith('/admin/accounts/')) {
    return workspace('Finance', 'Collections & audit', 'feeWallet', [
      link('Overview', '/admin/accounts/overview'),
      link('Payments', '/admin/accounts/payments'),
      link('Excess credits', '/admin/accounts/credits'),
      link('Discount audit', '/admin/accounts/discounts'),
      link('Finance operations', '/admin/fees/overview'),
    ]);
  }
  if (path.startsWith('/admin/exams/')) {
    return workspace('Exam', 'Exam schedule', 'taskSchedule', [
      link('Exam schedules', '/admin/exams/schedules'),
      link('Shift schedules', '/admin/exams/shifts'),
      link('Subject schedules', '/admin/exams/subject-schedules'),
      link('Eligible students', '/admin/exams/eligibility'),
    ]);
  }
  if (path.startsWith('/admin/settings/exam-master/')) {
    return workspace('Settings', 'Exam master', 'roomUnavailable', [
      link('Buildings', '/admin/settings/exam-master/buildings'),
      link('Floors', '/admin/settings/exam-master/floors'),
      link('Rooms', '/admin/settings/exam-master/rooms'),
    ]);
  }
  if (/^\/admin\/fees\/(overview|schedules|progression)$/.test(path)) {
    return workspace(
      'Finance',
      path.endsWith('overview')
        ? 'Finance operations'
        : path.endsWith('schedules')
          ? 'Fee publication'
          : 'Fee progression',
      path.endsWith('overview') ? 'feeWallet' : 'taskSchedule',
      [
        link('Finance overview', '/admin/fees/overview'),
        link('Payments', '/admin/accounts/payments'),
        link('Publication', '/admin/fees/schedules'),
        link('Progression', '/admin/fees/progression'),
      ],
    );
  }
  const student = path.match(/^\/admin\/admissions\/([^/]+)\/(scholarships|offline-payment|edit)$/);
  if (student && student[1] !== 'forms') {
    const id = student[1];
    return workspace(
      student[2] === 'edit' ? 'Students' : 'Finance',
      'Student workspace',
      student[2] === 'scholarships'
        ? 'scholarshipEmpty'
        : student[2] === 'offline-payment'
          ? 'feeWallet'
          : 'applicationForm',
      [
        link('Application', `/admin/admissions/applications/${id}`),
        link('Edit details', `/admin/admissions/${id}/edit`),
        link('Scholarships', `/admin/admissions/${id}/scholarships`),
        link('Offline payment', `/admin/admissions/${id}/offline-payment`),
      ],
    );
  }
  const record = path.match(/^\/admin\/admissions\/applications\/([^/]+)(\/review)?$/);
  if (record)
    return workspace('Students', 'Application workspace', 'applicationForm', [
      link('All applications', '/admin/admissions/applications'),
      link('Application', `/admin/admissions/applications/${record[1]}`),
      link('Review', `/admin/admissions/applications/${record[1]}/review`),
      link('Edit details', `/admin/admissions/${record[1]}/edit`),
    ]);

  if (path.startsWith('/admin/master-data/hostel/')) {
    const pages = [
      ['details', 'Hostels'],
      ['structure', 'Structure'],
      ['rooms', 'Rooms'],
      ['capacity', 'Capacity'],
      ['allocation', 'Allocation'],
      ['overview', 'Overview'],
    ];
    return workspace(
      'Operations',
      'Hostel management',
      'roomUnavailable',
      pages.map(([slug, label]) => link(label, `/admin/master-data/hostel/${slug}`)),
    );
  }
  const master = path.match(/^\/admin\/master-data\/([^/]+)/);
  if (master)
    return workspace(
      'Configuration',
      'Master data',
      'dataConfiguration',
      directory(`/admin/master-data/${master[1]}`),
    );

  if (
    path === '/admin/form-builder' ||
    path.startsWith('/admin/admissions/forms') ||
    path === '/admin/admission/student'
  ) {
    const links = [
      link('Forms library', '/admin/admissions/forms'),
      link('Create form', '/admin/form-builder'),
      link('New application', '/admin/admission/student'),
    ];
    if (/\/forms\/[^/]+\/edit$/.test(path)) links.push(link('Edit form', path));
    if (/\/forms\/[^/]+\/applications$/.test(path)) links.push(link('Form applications', path));
    return workspace('Admissions', 'Application forms', 'applicationForm', links);
  }
  if (
    path.startsWith('/admin/database/') ||
    path.startsWith('/admin/applications/') ||
    path.startsWith('/admin/forms/')
  ) {
    const links = [
      link('Students', '/admin/database/students'),
      link('Forms library', '/admin/admissions/forms'),
    ];
    if (path !== '/admin/database/students')
      links.push(
        link(
          path.endsWith('/edit') ? 'Edit record' : path.endsWith('/fill') ? 'Fill form' : 'Records',
          path,
        ),
      );
    return workspace('Records', 'Database workspace', 'dataConfiguration', links);
  }
  if (path.startsWith('/admin/admissions/') || path === '/admin/delete-admissions') {
    return workspace(
      'Students',
      'Student management',
      path.endsWith('promotions') ? 'taskSchedule' : 'addStudent',
      [
        link('Applications', '/admin/admissions/applications'),
        link('Drafts', '/admin/admissions/unfilled'),
        link('Awaiting review', '/admin/admissions/not-approved'),
        link('Approved', '/admin/admissions/approved'),
        link('Promotions', '/admin/admissions/promotions'),
        link('Record deletion', '/admin/delete-admissions'),
      ],
    );
  }
  return workspace('Overview', 'Admin workspace', 'analyticsSearch', [
    link('Dashboard', '/admin/dashboard'),
  ]);
}

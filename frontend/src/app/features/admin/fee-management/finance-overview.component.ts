import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminIllustrationKind } from '../../../shared/ui/admin-illustration/admin-illustration.registry';

@Component({
  selector: 'erp-finance-overview',
  imports: [RouterLink, LucideArrowRight, AdminPageComponent, AdminIllustrationComponent],
  templateUrl: './finance-overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceOverviewComponent {
  readonly groups: {
    title: string;
    description: string;
    illustration: AdminIllustrationKind;
    links: { title: string; description: string; route: string }[];
  }[] = [
    {
      title: 'Fee configuration',
      description: 'Define reusable fee structures before assigning charges.',
      illustration: 'feeConfiguration',
      links: [
        {
          title: 'Fee books',
          description: 'College, academic session and collection frequency',
          route: '/admin/fees/books/view',
        },
        {
          title: 'Fee heads',
          description: 'Charge categories and collection priorities',
          route: '/admin/fees/heads/view',
        },
        {
          title: 'Course fee structures',
          description: 'Review published structures by course and period',
          route: '/admin/fees/course-fees/view',
        },
        {
          title: 'Bulk workbook import',
          description: 'Upload, map and review course-fee assignments',
          route: '/admin/fees/course-fees/import',
        },
        {
          title: 'Saved fee drafts',
          description: 'Resume a structure before saving it',
          route: '/admin/fees/course-fees/drafts',
        },
        {
          title: 'Hostel fees',
          description: 'Maintain residence fee configuration',
          route: '/admin/fees/hostel-fees/view',
        },
      ],
    },
    {
      title: 'Generation & publication',
      description: 'Preparation and publication are separate operations.',
      illustration: 'taskSchedule',
      links: [
        {
          title: 'Prepare next-period fees',
          description: 'Review eligible students and confirm the selection',
          route: '/admin/fees/progression',
        },
        {
          title: 'Publication schedules',
          description: 'Configure visibility dates, deadlines and fine rules',
          route: '/admin/fees/schedules',
        },
        {
          title: 'Scholarship schemes',
          description: 'Manage reusable concession rules',
          route: '/admin/fees/scholarships/view',
        },
      ],
    },
    {
      title: 'Collections & audit',
      description: 'Separate, searchable directories with record-level details.',
      illustration: 'feeWallet',
      links: [
        {
          title: 'Collections overview',
          description: 'All-time collections, pending orders and available credit',
          route: '/admin/accounts/overview',
        },
        {
          title: 'Student payments',
          description: 'Transactions, allocations and receipt downloads',
          route: '/admin/accounts/payments',
        },
        {
          title: 'Excess credits',
          description: 'Original, remaining and consumed student credit',
          route: '/admin/accounts/credits',
        },
        {
          title: 'Discount audit',
          description: 'One-time concessions and internal review notes',
          route: '/admin/accounts/discounts',
        },
      ],
    },
  ];
}

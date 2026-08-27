import { FeeServiceCardViewModel } from '../models/student-fee-dashboard.models';

const ASSET = '/assets/student/dashboard/modules';

export const FEE_SERVICE_CARDS: readonly FeeServiceCardViewModel[] = [
  { id: 'pay', title: 'Pay Fees', description: 'Select a fee period and continue to payment', image: `${ASSET}/fees.webp`, tone: 'violet', route: '/student/fees/pay' },
  { id: 'details', title: 'Fee Details', description: 'View fee heads, discounts and balances', image: `${ASSET}/documents.webp`, tone: 'blue', route: '/student/fees/details' },
  { id: 'receipts', title: 'Receipts', description: 'Download verified payment receipts', image: `${ASSET}/documents.webp`, tone: 'green', route: null },
  { id: 'history', title: 'Payment History', description: 'Track successful, pending and failed payments', image: `${ASSET}/attendance.webp`, tone: 'orange', route: null },
  { id: 'challan', title: 'Challan', description: 'Generate or print a bank challan', image: `${ASSET}/exams.webp`, tone: 'coral', route: null },
  { id: 'installments', title: 'Installments', description: 'Review your approved payment schedule', image: `${ASSET}/attendance.webp`, tone: 'sky', route: null },
  { id: 'scholarship', title: 'Scholarship Details', description: 'View applied scholarships and discounts', image: `${ASSET}/academics.webp`, tone: 'gold', route: null },
  { id: 'support', title: 'Fee Support', description: 'Raise a discrepancy or get payment help', image: `${ASSET}/complaints.webp`, tone: 'teal', route: null },
];

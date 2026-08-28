import { FeeServiceCardViewModel } from '../models/student-fee-dashboard.models';

const ASSET = '/assets/student/fee-icons/compact';

export const FEE_SERVICE_CARDS: readonly FeeServiceCardViewModel[] = [
  { id: 'pay', title: 'Pay Fees', description: 'Select a fee period and continue to payment', image: `${ASSET}/pay-fees.webp`, tone: 'violet', route: '/student/fees/pay' },
  { id: 'details', title: 'Fee Details', description: 'View fee heads, discounts and balances', image: `${ASSET}/fee-details.webp`, tone: 'blue', route: '/student/fees/details' },
  { id: 'receipts', title: 'Receipts', description: 'Download verified payment receipts', image: `${ASSET}/payment-receipts.webp`, tone: 'green', route: '/student/fees/receipts' },
  { id: 'history', title: 'Payment History', description: 'Track successful, pending and failed payments', image: `${ASSET}/payment-history.webp`, tone: 'orange', route: '/student/fees/history' },
  { id: 'challan', title: 'Challan', description: 'Generate or print a bank challan', image: `${ASSET}/fee-challan.webp`, tone: 'coral', route: '/student/fees/challan' },
  { id: 'installments', title: 'Installments', description: 'Review your approved payment schedule', image: `${ASSET}/fee-installments.webp`, tone: 'sky', route: '/student/fees/installments' },
  { id: 'scholarship', title: 'Scholarship Details', description: 'View applied scholarships and discounts', image: `${ASSET}/scholarship-details.webp`, tone: 'gold', route: '/student/fees/scholarships' },
  { id: 'support', title: 'Fee Support', description: 'Raise a discrepancy or get payment help', image: `${ASSET}/fee-support.webp`, tone: 'teal', route: '/student/fees/support' },
];

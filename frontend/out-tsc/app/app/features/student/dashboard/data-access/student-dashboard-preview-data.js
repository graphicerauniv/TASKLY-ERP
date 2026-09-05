/**
 * Approved dashboard-only preview content.
 * Replace each section with its student-authorized backend endpoint when that capability exists.
 * This file is never used as an HTTP service and is shared by desktop and mobile presentation.
 */
export const STUDENT_DASHBOARD_PREVIEW_DATA = Object.freeze({
    // Replace with the future student timetable endpoint.
    schedule: [
        {
            id: 'preview-schedule-data-structures',
            title: 'Data Structures',
            startTime: '09:00 AM',
            endTime: '10:00 AM',
            location: 'Room 204, Block B',
            faculty: 'CS301',
            relativeLabel: 'In 25 min',
            type: 'class',
            status: 'upcoming',
        },
        {
            id: 'preview-schedule-discrete-mathematics',
            title: 'Discrete Mathematics',
            startTime: '11:15 AM',
            endTime: '12:15 PM',
            location: 'Room 105, Block A',
            faculty: 'MA201',
            relativeLabel: 'In 2h 45m',
            type: 'class',
            status: 'upcoming',
        },
        {
            id: 'preview-schedule-mentor-meeting',
            title: 'Mentor Meeting',
            startTime: '02:00 PM',
            endTime: '03:00 PM',
            location: 'Faculty Cabin',
            faculty: 'Dr. Neha Joshi',
            relativeLabel: 'In 5h 30m',
            type: 'meeting',
            status: 'upcoming',
        },
    ],
    // Replace with the future student attendance summary endpoint.
    attendance: {
        percentage: 82,
        attendedClasses: 107,
        totalClasses: 130,
        absentClasses: 23,
        minimumRequired: 75,
        trendPercentage: null,
        status: 'safe',
    },
    // Replace with the future student ledger summary endpoint.
    fees: {
        totalBilled: '₹1,20,000',
        totalPaid: '₹90,000',
        currentDue: '₹30,000',
        overdueAmount: null,
        dueDate: '28 Aug 2025',
        currency: 'INR',
        paymentStatus: 'Due',
    },
    // Replace with the future student examination summary endpoint.
    examination: {
        title: 'Discrete Mathematics',
        date: '05 Sep',
        relativeLabel: 'Upcoming exam',
    },
    // Replace with the future student notices endpoint.
    notices: [
        {
            id: 'preview-notice-mid-sem',
            title: 'Mid-Sem Exam Timetable Released',
            publishedAt: '12 May 2025',
            category: 'Examinations',
            unread: true,
        },
        {
            id: 'preview-notice-workshop',
            title: 'Workshop on “AI & ML Basics” on 18th May at Seminar Hall.',
            publishedAt: '10 May 2025',
            category: 'Workshop',
            unread: false,
        },
        {
            id: 'preview-notice-internship',
            title: 'Last date to apply for Summer Internship Program is 25th May 2025.',
            publishedAt: '08 May 2025',
            category: 'Placement',
            unread: false,
        },
    ],
    quickActions: [
        { id: 'fees', label: 'Pay fees', icon: 'wallet-cards', route: '/student/fees', available: true },
        { id: 'id-card', label: 'Download ID', icon: 'badge-id', route: null, available: false },
        { id: 'certificate', label: 'Certificate', icon: 'file-check', route: null, available: false },
        { id: 'leave', label: 'Apply leave', icon: 'calendar-plus', route: null, available: false },
    ],
});

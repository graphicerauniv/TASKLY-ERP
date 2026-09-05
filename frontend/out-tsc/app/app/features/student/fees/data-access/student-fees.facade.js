import { Injectable, inject } from '@angular/core';
import { catchError, forkJoin, map, of } from 'rxjs';
import { ApiService } from '../../../../core/api.service';
import { FEE_SERVICE_CARDS } from '../config/fee-service.config';
import * as i0 from "@angular/core";
const INR = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
});
export class StudentFeesFacade {
    api = inject(ApiService);
    load(token, storedStudent) {
        const fees$ = this.api.studentFees(token).pipe(map((value) => ({ ok: true, value })), catchError(() => of({ ok: false, value: null })));
        const payments$ = this.api.studentPaymentHistory(token).pipe(map((value) => ({ ok: true, value })), catchError(() => of({ ok: false, value: null })));
        return forkJoin({ fees: fees$, payments: payments$ }).pipe(map(({ fees, payments }) => this.toViewModel(fees.value?.items ?? [], payments.value?.items ?? [], fees.value?.student ?? storedStudent, fees.value?.excessCreditBalance ?? 0, fees.ok, payments.ok)));
    }
    loadWorkspace(token, storedStudent) {
        const fees$ = this.api.studentFees(token).pipe(map((value) => ({ ok: true, value })), catchError(() => of({ ok: false, value: null })));
        const payments$ = this.api.studentPaymentHistory(token).pipe(map((value) => ({ ok: true, value })), catchError(() => of({ ok: false, value: null })));
        return forkJoin({ fees: fees$, payments: payments$ }).pipe(map(({ fees, payments }) => {
            const student = fees.value?.student ?? storedStudent;
            if (!fees.ok)
                return this.workspaceLoading(student, 'error', 'We could not load your fee records. Please try again.');
            const ledgers = uniqueLedgers(fees.value?.items ?? []).map(toLedgerDetail);
            return {
                state: 'ready',
                errorMessage: payments.ok
                    ? null
                    : 'Fee records are available, but payment history is temporarily unavailable.',
                student: feeContext(student),
                ledgers,
                payments: payments.ok ? (payments.value?.items ?? []).map(toPaymentRecord) : [],
                razorpayEnabled: payments.value?.razorpayEnabled ?? false,
                excessCredit: money(Number(fees.value?.excessCreditBalance || 0)),
                feeComparison: fees.value?.feeComparison ?? null,
                source: 'backend',
                loadedAt: new Date().toISOString(),
            };
        }));
    }
    workspaceLoading(storedStudent, state = 'loading', errorMessage = null) {
        return {
            state,
            errorMessage,
            student: feeContext(storedStudent),
            ledgers: [],
            payments: [],
            razorpayEnabled: false,
            excessCredit: null,
            feeComparison: null,
            source: 'unavailable',
            loadedAt: null,
        };
    }
    loading(storedStudent) {
        return this.base(storedStudent, 'loading', 'loading');
    }
    toViewModel(ledgers, payments, student, excessCredit, feesOk, paymentsOk) {
        const unique = [...new Map(ledgers.map((ledger) => [ledger._id, ledger])).values()];
        const total = sumMoney(unique.map((ledger) => ledger.totalAmount));
        const paid = sumMoney(unique.map((ledger) => ledger.paidAmount));
        const balance = sumMoney(unique.map((ledger) => Math.max(0, ledger.balanceAmount)));
        const nextDueDate = earliestDueDate(unique);
        const academic = unique.filter((ledger) => ledger.kind === 'academic');
        const hostel = unique.filter((ledger) => ledger.kind === 'hostel');
        return {
            ...this.base(student, feesOk ? 'ready' : 'error', paymentsOk ? 'ready' : 'error'),
            summary: {
                totalFee: feesOk ? money(total) : null,
                paidAmount: feesOk ? money(paid) : null,
                outstandingAmount: feesOk ? money(balance) : null,
                excessCredit: feesOk ? money(excessCredit) : null,
                nextDueDate,
                dueState: dueState(balance, nextDueDate),
            },
            academicFee: feesOk ? feeStatus(academic, 'academic') : null,
            hostelFee: feesOk ? feeStatus(hostel, 'hostel') : null,
            recentActivity: paymentsOk ? activities(payments, unique) : [],
            lastUpdatedAt: new Date().toISOString(),
        };
    }
    base(student, feeState, activityState) {
        const period = student?.feeFrequency === 'semester'
            ? `Semester ${student.currentSemester ?? '—'}`
            : `Year ${student?.currentAcademicYear ?? '—'}`;
        return {
            student: {
                name: student?.name ?? null,
                studentId: student?.studentId ?? null,
                courseName: student?.courseName ?? null,
                academicSession: student?.academicSession ?? null,
                currentPeriod: student ? period : null,
            },
            summary: {
                totalFee: null,
                paidAmount: null,
                outstandingAmount: null,
                excessCredit: null,
                nextDueDate: null,
                dueState: 'unknown',
            },
            services: [...FEE_SERVICE_CARDS],
            academicFee: null,
            hostelFee: null,
            recentActivity: [],
            feeState,
            activityState,
            lastUpdatedAt: null,
        };
    }
    static ɵfac = function StudentFeesFacade_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentFeesFacade)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StudentFeesFacade, factory: StudentFeesFacade.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentFeesFacade, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
function feeContext(student) {
    const period = student?.feeFrequency === 'semester'
        ? `Semester ${student.currentSemester ?? '—'}`
        : `Year ${student?.currentAcademicYear ?? '—'}`;
    return {
        name: student?.name ?? null,
        studentId: student?.studentId ?? null,
        courseName: student?.courseName ?? null,
        academicSession: student?.academicSession ?? null,
        currentPeriod: student ? period : null,
    };
}
function uniqueLedgers(ledgers) {
    return [...new Map(ledgers.map((ledger) => [ledger._id, ledger])).values()];
}
function toLedgerDetail(ledger) {
    const rows = ledger.entries
        .filter((entry) => Number(entry.amount || 0) > 0 || Number(entry.paidAmount || 0) > 0)
        .map((entry) => toFeeHeadDetail(entry));
    const dueDate = earliestEntryDueDate(ledger);
    const balance = moneyOrNull(ledger.balanceAmount);
    return {
        id: ledger._id,
        kind: ledger.kind,
        title: ledger.name,
        periodLabel: ledger.periodLabel,
        academicSession: ledger.academicSession ?? null,
        feeFrequency: ledger.feeFrequency,
        currentAcademicYear: ledger.currentAcademicYear ?? null,
        currentSemester: ledger.currentSemester ?? null,
        dueDate,
        charge: moneyOrNull(ledger.chargeAmount),
        discount: moneyOrNull(ledger.discountAmount),
        payable: moneyOrNull(ledger.totalAmount),
        paid: moneyOrNull(ledger.paidAmount),
        balance,
        penalty: moneyOrNull(ledger.penaltyAmount),
        paymentStatus: ledger.paymentStatus,
        rows,
        isPayable: (balance?.amount ?? 0) > 0 && ledger.status === 'active',
        source: 'backend',
    };
}
function toFeeHeadDetail(entry) {
    const amount = moneyOrNull(entry.amount);
    return {
        id: entry.feeHeadId,
        name: entry.feeHeadName,
        category: entry.category,
        priority: entry.priority,
        periodLabel: entry.periodLabel,
        dueDate: entry.dueDate || null,
        charge: entry.category === 'discount' ? null : amount,
        discount: entry.category === 'discount' ? amount : null,
        paid: moneyOrNull(entry.paidAmount),
        balance: moneyOrNull(entry.balanceAmount),
        status: entry.status,
        isScholarship: Boolean(entry.isScholarship),
        isOneTimeScholarship: Boolean(entry.isOneTimeScholarship),
        scholarshipType: entry.scholarshipType ?? null,
        scholarshipValue: entry.scholarshipValue === undefined || entry.scholarshipValue === null
            ? null
            : Number(entry.scholarshipValue),
        source: 'backend',
    };
}
function toPaymentRecord(payment) {
    const receiptNumber = payment.receiptNumber ?? null;
    const paymentId = payment.paymentReference ?? payment.razorpayPaymentId ?? null;
    return {
        id: payment._id,
        receiptNumber,
        orderReference: payment.razorpayOrderId || payment._id,
        paymentId,
        paymentChannel: payment.paymentChannel === 'offline'
            ? 'offline'
            : payment.paymentChannel === 'credit'
                ? 'credit'
                : 'online',
        amount: money(Number(payment.amount || 0)),
        feeType: paymentFeeType(payment),
        feePeriodLabel: payment.targetPeriodLabel || 'All fee periods',
        status: mapPaymentStatus(payment.status),
        rawStatus: payment.status,
        createdAt: payment.createdAt ?? null,
        paidAt: payment.paidAt ?? null,
        method: payment.method ?? null,
        downloadable: payment.status === 'paid' && Boolean(receiptNumber || paymentId),
    };
}
function mapPaymentStatus(status) {
    if (status === 'paid')
        return 'successful';
    if (status === 'failed')
        return 'failed';
    if (status === 'refunded')
        return 'refunded';
    return 'pending';
}
function paymentFeeType(payment) {
    const kinds = new Set((payment.allocations ?? []).map((allocation) => allocation.ledgerKind));
    if (kinds.size > 1)
        return 'mixed';
    if (kinds.has('academic'))
        return 'academic';
    if (kinds.has('hostel'))
        return 'hostel';
    return 'unknown';
}
function moneyOrNull(amount) {
    const normalized = Number(amount);
    return Number.isFinite(normalized) ? money(normalized) : null;
}
function earliestEntryDueDate(ledger) {
    return (ledger.entries
        .filter((entry) => Number(entry.balanceAmount) > 0 && entry.dueDate)
        .map((entry) => new Date(entry.dueDate))
        .filter((date) => !Number.isNaN(date.getTime()))
        .sort((first, second) => first.getTime() - second.getTime())[0]
        ?.toISOString() ?? null);
}
function money(amount) {
    return { amount, formatted: INR.format(amount) };
}
function sumMoney(values) {
    return Number((values.reduce((sum, value) => sum + Math.round(Number(value || 0) * 100), 0) / 100).toFixed(2));
}
function earliestDueDate(ledgers) {
    const dates = ledgers
        .flatMap((ledger) => ledger.entries)
        .filter((entry) => Number(entry.balanceAmount) > 0 && entry.dueDate)
        .map((entry) => new Date(entry.dueDate))
        .filter((date) => !Number.isNaN(date.getTime()))
        .sort((a, b) => a.getTime() - b.getTime());
    return dates[0]?.toISOString() ?? null;
}
function dueState(balance, dueDate) {
    if (balance <= 0)
        return 'paid';
    if (!dueDate)
        return 'unknown';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0);
    const days = Math.ceil((due.getTime() - today.getTime()) / 86400000);
    return days < 0 ? 'overdue' : days <= 7 ? 'due-soon' : 'upcoming';
}
function feeStatus(ledgers, kind) {
    if (!ledgers.length)
        return {
            kind,
            title: kind === 'academic' ? 'Academic Fee' : 'Hostel Fee',
            context: kind === 'hostel'
                ? 'No hostel fee is currently assigned.'
                : 'No academic fee is currently assigned.',
            status: 'not-assigned',
            amount: null,
            image: `/assets/student/fee-icons/compact/${kind === 'academic' ? 'fee-details' : 'fee-support'}.webp`,
        };
    const balance = sumMoney(ledgers.map((ledger) => Math.max(0, Number(ledger.balanceAmount))));
    const paid = balance <= 0;
    const partial = ledgers.some((ledger) => ledger.paymentStatus === 'partial' || Number(ledger.paidAmount) > 0);
    const first = ledgers[0];
    const context = kind === 'hostel'
        ? [first.hostelName, first.roomNumber ? `Room ${first.roomNumber}` : null]
            .filter(Boolean)
            .join(' · ') || `${ledgers.length} published fee period(s)`
        : `${ledgers.length} published fee period${ledgers.length === 1 ? '' : 's'} · ${first.academicSession}`;
    return {
        kind,
        title: first.name,
        context,
        status: paid ? 'paid' : partial ? 'partial' : 'due',
        amount: money(balance),
        image: `/assets/student/fee-icons/compact/${kind === 'academic' ? 'fee-details' : 'fee-support'}.webp`,
    };
}
function activities(payments, ledgers) {
    const items = payments.map((payment) => ({
        id: payment._id,
        label: payment.status === 'paid'
            ? `Payment verified${payment.receiptNumber ? ` · ${payment.receiptNumber}` : ''}`
            : payment.status === 'failed'
                ? 'Payment failed'
                : 'Payment pending',
        date: payment.paidAt || payment.createdAt || null,
        state: payment.status === 'paid' ? 'success' : payment.status === 'failed' ? 'danger' : 'warning',
    }));
    if (!items.length && ledgers[0]?.createdAt)
        items.push({
            id: `ledger-${ledgers[0]._id}`,
            label: 'Current fee structure available',
            date: ledgers[0].createdAt,
            state: 'info',
        });
    return items
        .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
        .slice(0, 3);
}

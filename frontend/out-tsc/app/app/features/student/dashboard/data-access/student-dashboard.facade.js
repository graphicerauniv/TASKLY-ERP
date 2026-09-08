import { computed, inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../../../core/api.service';
import { StudentSessionService } from '../../shared/services/student-session.service';
import { STUDENT_DASHBOARD_SOURCE_CONFIG } from '../config/dashboard-source.config';
import { STUDENT_DASHBOARD_MODULES } from '../config/student-dashboard-modules.config';
import { STUDENT_DASHBOARD_PREVIEW_DATA } from './student-dashboard-preview-data';
import * as i0 from "@angular/core";
function unavailable() {
    return { status: 'unavailable', data: null, errorMessage: null };
}
function loaded(data) {
    return { status: 'loaded', data, errorMessage: null };
}
export class StudentDashboardFacade {
    session = inject(StudentSessionService);
    api = inject(ApiService);
    scheduleState = signal({
        status: 'loading',
        data: null,
        errorMessage: null,
    }, ...(ngDevMode ? [{ debugName: "scheduleState" }] : /* istanbul ignore next */ []));
    attendanceState = signal({
        status: 'loading',
        data: null,
        errorMessage: null,
    }, ...(ngDevMode ? [{ debugName: "attendanceState" }] : /* istanbul ignore next */ []));
    constructor() {
        this.loadOperationalData();
    }
    identity = computed(() => {
        const profile = this.session.profile();
        const firstName = this.session.firstName();
        if (!profile || !firstName)
            return unavailable();
        return {
            status: 'loaded',
            data: {
                id: profile.id,
                studentId: profile.studentId,
                displayName: profile.name,
                firstName,
                initials: this.session.initials(),
            },
            errorMessage: null,
        };
    }, ...(ngDevMode ? [{ debugName: "identity" }] : /* istanbul ignore next */ []));
    state = computed(() => ({
        sourceStatus: STUDENT_DASHBOARD_SOURCE_CONFIG,
        identity: this.identity(),
        schedule: this.scheduleState(),
        attendance: this.attendanceState(),
        academics: unavailable(),
        fees: loaded(STUDENT_DASHBOARD_PREVIEW_DATA.fees),
        examinations: loaded(STUDENT_DASHBOARD_PREVIEW_DATA.examination),
        hostel: unavailable(),
        notices: loaded(STUDENT_DASHBOARD_PREVIEW_DATA.notices),
        documents: unavailable(),
        notifications: unavailable(),
        quickActions: STUDENT_DASHBOARD_PREVIEW_DATA.quickActions,
    }), ...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    /** One normalized source consumed by both desktop and mobile dashboard presentation. */
    viewModel = computed(() => ({
        firstName: this.identity().data?.firstName ?? null,
        modules: STUDENT_DASHBOARD_MODULES,
        operational: this.state(),
    }), ...(ngDevMode ? [{ debugName: "viewModel" }] : /* istanbul ignore next */ []));
    loadOperationalData() {
        const token = this.session.token();
        if (!token) {
            this.scheduleState.set(unavailable());
            this.attendanceState.set(unavailable());
            return;
        }
        this.api.studentTimetable(token).subscribe({
            next: (result) => {
                const schedule = todaysSchedule(result.items || []);
                this.scheduleState.set({
                    status: schedule.length ? 'loaded' : 'empty',
                    data: schedule,
                    errorMessage: null,
                    lastUpdatedAt: new Date().toISOString(),
                });
            },
            error: () => this.scheduleState.set({
                status: 'error',
                data: null,
                errorMessage: 'Your timetable could not be loaded.',
            }),
        });
        this.api.studentAttendance(token).subscribe({
            next: ({ overall }) => this.attendanceState.set(loaded({
                percentage: overall.attendancePercentage,
                attendedClasses: overall.presentLectures,
                totalClasses: overall.totalLectures,
                absentClasses: overall.absentLectures,
                minimumRequired: 75,
                trendPercentage: null,
                status: overall.totalLectures === 0
                    ? 'unknown'
                    : overall.attendancePercentage >= 75
                        ? 'safe'
                        : overall.attendancePercentage >= 65
                            ? 'warning'
                            : 'critical',
            })),
            error: () => this.attendanceState.set({
                status: 'error',
                data: null,
                errorMessage: 'Your attendance could not be loaded.',
            }),
        });
    }
    static ɵfac = function StudentDashboardFacade_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentDashboardFacade)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StudentDashboardFacade, factory: StudentDashboardFacade.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentDashboardFacade, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
function todaysSchedule(entries) {
    const now = new Date();
    const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    return entries
        .filter((entry) => entry.day === currentDay && timeMinutes(entry.endTime) >= currentMinutes)
        .sort((left, right) => left.startTime.localeCompare(right.startTime))
        .slice(0, 3)
        .map((entry) => {
        const start = timeMinutes(entry.startTime);
        const end = timeMinutes(entry.endTime);
        return {
            id: entry._id,
            title: entry.subjectName || 'Scheduled class',
            startTime: displayTime(entry.startTime),
            endTime: displayTime(entry.endTime),
            location: entry.roomName || 'Room not assigned',
            faculty: entry.facultyName || null,
            relativeLabel: currentMinutes >= start && currentMinutes < end
                ? 'Now'
                : relativeTime(Math.max(0, start - currentMinutes)),
            type: entry.classType === 'lab' ? 'lab' : 'class',
            status: currentMinutes >= start && currentMinutes < end ? 'ongoing' : 'upcoming',
        };
    });
}
function timeMinutes(value) {
    const [hours, minutes] = String(value || '00:00')
        .split(':')
        .map(Number);
    return hours * 60 + minutes;
}
function displayTime(value) {
    const [hours, minutes] = String(value || '00:00')
        .split(':')
        .map(Number);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    return `${String(hours % 12 || 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${suffix}`;
}
function relativeTime(minutes) {
    if (minutes < 60)
        return `In ${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return `In ${hours}h${remainder ? ` ${remainder}m` : ''}`;
}

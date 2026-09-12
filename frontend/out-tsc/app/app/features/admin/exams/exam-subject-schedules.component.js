import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { AdminDrawerComponent } from '../../../shared/ui/admin-drawer/admin-drawer.component';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function ExamSubjectSchedulesComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.message());
} }
function ExamSubjectSchedulesComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.error());
} }
function ExamSubjectSchedulesComponent_For_44_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "td")(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "small");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "td")(25, "span", 26);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td", 13)(28, "erp-compact-action-menu", 27);
    i0.ɵɵlistener("selected", function ExamSubjectSchedulesComponent_For_44_Template_erp_compact_action_menu_selected_28_listener($event) { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleAction($event, item_r5)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.subjectCode || "No subject code");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.courseName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r5.departmentName, " \u00B7 Semester ", item_r5.semester);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.examScheduleCaption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.examDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Shift ", item_r5.shiftSerial);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4("", item_r5.timeFrom, " ", item_r5.timeFromMeridiem, " \u2013 ", item_r5.timeTo, " ", item_r5.timeToMeridiem);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.collegeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.universityName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.isActive ? "Scheduled" : "Inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r2.rowActions());
} }
function ExamSubjectSchedulesComponent_ForEmpty_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 28);
    i0.ɵɵelement(2, "erp-admin-illustration", 29);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.loading() ? "Loading subject schedules\u2026" : "No subjects scheduled.");
} }
function ExamSubjectSchedulesComponent_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.error());
} }
function ExamSubjectSchedulesComponent_For_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r6.name);
} }
function ExamSubjectSchedulesComponent_For_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r7._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.name);
} }
function ExamSubjectSchedulesComponent_For_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r8._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r8.name);
} }
function ExamSubjectSchedulesComponent_For_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r9._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.caption);
} }
function ExamSubjectSchedulesComponent_For_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r10._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r10.name);
} }
function ExamSubjectSchedulesComponent_For_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r11._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r11.name);
} }
function ExamSubjectSchedulesComponent_For_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r12._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r12.name);
} }
function ExamSubjectSchedulesComponent_For_113_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", item_r13);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", item_r13);
} }
function ExamSubjectSchedulesComponent_For_121_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r14._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", item_r14.name, "", item_r14.code ? " \u00B7 " + item_r14.code : "", " ");
} }
function ExamSubjectSchedulesComponent_For_133_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r15._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", item_r15.timeFrom, " ", item_r15.timeFromMeridiem, " - ", item_r15.timeTo, " ", item_r15.timeToMeridiem, " ");
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const message = error.error?.message;
        if (typeof message === 'string')
            return message;
    }
    return fallback;
}
export class ExamSubjectSchedulesComponent {
    api = inject(ApiService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    schedules = signal([], ...(ngDevMode ? [{ debugName: "schedules" }] : /* istanbul ignore next */ []));
    shifts = signal([], ...(ngDevMode ? [{ debugName: "shifts" }] : /* istanbul ignore next */ []));
    subjects = signal([], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    loadingSubjects = signal(false, ...(ngDevMode ? [{ debugName: "loadingSubjects" }] : /* istanbul ignore next */ []));
    uploading = signal(false, ...(ngDevMode ? [{ debugName: "uploading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    drawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "drawerOpen" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    deleteTarget = signal(null, ...(ngDevMode ? [{ debugName: "deleteTarget" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    semesters = Array.from({ length: 20 }, (_, index) => index + 1);
    search = '';
    academicSessionId = '';
    universityId = '';
    collegeId = '';
    examScheduleId = '';
    departmentId = '';
    levelId = '';
    courseId = '';
    semester = null;
    subjectId = '';
    examDate = '';
    shiftId = '';
    isActive = true;
    constructor() {
        this.load();
    }
    master(typeSlug) {
        return this.masters().filter((item) => item.typeSlug === typeSlug && item.isActive);
    }
    scopedMaster(typeSlug, parentId) {
        const items = this.master(typeSlug);
        return parentId ? items.filter((item) => !item.parentId || item.parentId === parentId) : [];
    }
    scheduleOptions() {
        const parity = this.semester ? (Number(this.semester) % 2 === 0 ? 'even' : 'odd') : null;
        return this.schedules().filter((item) => item.isActive &&
            item.academicSessionId === this.academicSessionId &&
            item.universityId === this.universityId &&
            item.collegeId === this.collegeId &&
            (!parity || item.semesterParity === parity));
    }
    shiftOptions() {
        return this.shifts().filter((item) => item.isActive && item.examScheduleId === this.examScheduleId);
    }
    visibleItems() {
        const query = this.search.trim().toLowerCase();
        if (!query)
            return this.items();
        return this.items().filter((item) => [
            item.subjectName,
            item.subjectCode,
            item.courseName,
            item.departmentName,
            item.examScheduleCaption,
            item.examDate,
        ].some((value) => value.toLowerCase().includes(query)));
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        forkJoin({
            items: this.api.examSubjectSchedules(),
            schedules: this.api.examSchedules(),
            shifts: this.api.examShiftSchedules(),
            masters: this.api.formMappingOptions(),
        }).subscribe({
            next: ({ items, schedules, shifts, masters }) => {
                this.items.set(items.items);
                this.schedules.set(schedules.items);
                this.shifts.set(shifts.items);
                this.masters.set(masters.items.filter((item) => item.isActive));
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load subject schedules.'));
                this.loading.set(false);
            },
        });
    }
    openCreate() {
        this.resetForm();
        this.error.set('');
        this.message.set('');
        this.drawerOpen.set(true);
    }
    downloadTemplate() {
        const csv = [
            [
                'academicSession',
                'university',
                'college',
                'examSchedule',
                'department',
                'level',
                'course',
                'semester',
                'subjectCode',
                'examDate',
                'shiftSerial',
                'isActive',
            ].join(','),
            [
                '2026-2027',
                'Graphic Era Deemed to be University',
                'Graphic Era Deemed to be University',
                'ODD',
                'Computer Science & Eng',
                'UG',
                'B.Tech CSE',
                '1',
                'TCS101',
                '2026-12-01',
                '1',
                'true',
            ]
                .map((value) => `"${value.replaceAll('"', '""')}"`)
                .join(','),
        ].join('\n');
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
        link.download = 'exam-subject-schedule-template.csv';
        link.click();
        URL.revokeObjectURL(link.href);
    }
    uploadCsv(event) {
        const input = event.target;
        const file = input.files?.[0];
        input.value = '';
        if (!file || this.uploading())
            return;
        this.uploading.set(true);
        this.error.set('');
        this.message.set('');
        this.api.importExamSubjectSchedules(file).subscribe({
            next: ({ imported, failed, errors }) => {
                this.uploading.set(false);
                if (imported)
                    this.message.set(`${imported} subject schedule${imported === 1 ? '' : 's'} imported successfully.`);
                if (failed)
                    this.error.set(`${failed} row${failed === 1 ? '' : 's'} could not be imported. ${errors
                        .slice(0, 3)
                        .map((item) => `Row ${item.row}: ${item.message}`)
                        .join(' ')}`);
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not upload the subject schedule CSV.'));
                this.uploading.set(false);
            },
        });
    }
    edit(item) {
        this.editingId.set(item._id);
        this.academicSessionId = item.academicSessionId;
        this.universityId = item.universityId;
        this.collegeId = item.collegeId;
        this.examScheduleId = item.examScheduleId;
        this.departmentId = item.departmentId;
        this.levelId = item.levelId;
        this.courseId = item.courseId;
        this.semester = item.semester;
        this.subjectId = item.subjectId;
        this.examDate = item.examDate;
        this.shiftId = item.shiftId;
        this.isActive = item.isActive;
        this.error.set('');
        this.drawerOpen.set(true);
        this.loadSubjects(item.subjectId);
    }
    closeDrawer() {
        if (this.saving())
            return;
        this.drawerOpen.set(false);
        this.resetForm();
    }
    universityChanged() {
        this.collegeId = '';
        this.collegeChanged();
    }
    collegeChanged() {
        this.departmentId = '';
        this.departmentChanged();
        this.examScheduleId = '';
        this.shiftId = '';
    }
    departmentChanged() {
        this.levelId = '';
        this.levelChanged();
    }
    levelChanged() {
        this.courseId = '';
        this.subjectId = '';
        this.subjects.set([]);
    }
    scheduleScopeChanged() {
        if (!this.scheduleOptions().some((item) => item._id === this.examScheduleId)) {
            this.examScheduleId = '';
            this.shiftId = '';
        }
        this.subjectId = '';
        this.subjects.set([]);
        this.loadSubjects();
    }
    examScheduleChanged() {
        if (!this.shiftOptions().some((item) => item._id === this.shiftId))
            this.shiftId = '';
    }
    loadSubjects(selectedSubjectId = '') {
        if (!this.academicSessionId ||
            !this.universityId ||
            !this.collegeId ||
            !this.departmentId ||
            !this.levelId ||
            !this.courseId ||
            !this.semester)
            return;
        this.loadingSubjects.set(true);
        this.api
            .examSubjectOptions({
            academicSessionId: this.academicSessionId,
            universityId: this.universityId,
            collegeId: this.collegeId,
            departmentId: this.departmentId,
            levelId: this.levelId,
            courseId: this.courseId,
            semester: Number(this.semester),
        })
            .subscribe({
            next: ({ items }) => {
                this.subjects.set(items);
                if (selectedSubjectId && items.some((item) => item._id === selectedSubjectId))
                    this.subjectId = selectedSubjectId;
                this.loadingSubjects.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load mapped subjects.'));
                this.loadingSubjects.set(false);
            },
        });
    }
    save() {
        if (this.saving())
            return;
        if (!this.academicSessionId ||
            !this.universityId ||
            !this.collegeId ||
            !this.examScheduleId ||
            !this.departmentId ||
            !this.levelId ||
            !this.courseId ||
            !this.semester ||
            !this.subjectId ||
            !this.examDate ||
            !this.shiftId) {
            this.error.set('Complete all required subject schedule fields.');
            return;
        }
        const body = {
            academicSessionId: this.academicSessionId,
            universityId: this.universityId,
            collegeId: this.collegeId,
            examScheduleId: this.examScheduleId,
            departmentId: this.departmentId,
            levelId: this.levelId,
            courseId: this.courseId,
            semester: Number(this.semester),
            subjectId: this.subjectId,
            examDate: this.examDate,
            shiftId: this.shiftId,
            isActive: this.isActive,
        };
        this.saving.set(true);
        this.error.set('');
        const request = this.editingId()
            ? this.api.updateExamSubjectSchedule(this.editingId(), body)
            : this.api.createExamSubjectSchedule(body);
        request.subscribe({
            next: () => {
                this.message.set(this.editingId() ? 'Subject schedule updated.' : 'Subject scheduled.');
                this.saving.set(false);
                this.drawerOpen.set(false);
                this.resetForm();
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not save the subject schedule.'));
                this.saving.set(false);
            },
        });
    }
    rowActions() {
        return [
            { id: 'edit', label: 'Edit subject schedule', icon: 'edit' },
            { id: 'delete', label: 'Delete subject schedule', icon: 'delete', destructive: true },
        ];
    }
    handleAction(action, item) {
        if (action === 'edit')
            this.edit(item);
        if (action === 'delete')
            this.deleteTarget.set(item);
    }
    deleteItem() {
        const item = this.deleteTarget();
        if (!item || this.saving())
            return;
        this.saving.set(true);
        this.api.deleteExamSubjectSchedule(item._id).subscribe({
            next: () => {
                this.items.update((items) => items.filter((entry) => entry._id !== item._id));
                this.deleteTarget.set(null);
                this.message.set('Subject schedule deleted.');
                this.saving.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not delete the subject schedule.'));
                this.deleteTarget.set(null);
                this.saving.set(false);
            },
        });
    }
    resetForm() {
        this.editingId.set(null);
        this.academicSessionId = '';
        this.universityId = '';
        this.collegeId = '';
        this.examScheduleId = '';
        this.departmentId = '';
        this.levelId = '';
        this.courseId = '';
        this.semester = null;
        this.subjectId = '';
        this.examDate = '';
        this.shiftId = '';
        this.isActive = true;
        this.subjects.set([]);
    }
    static ɵfac = function ExamSubjectSchedulesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExamSubjectSchedulesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExamSubjectSchedulesComponent, selectors: [["erp-exam-subject-schedules"]], decls: 141, vars: 37, consts: [["scheduleCsvInput", ""], ["eyebrow", "Exam", "title", "Subject schedule", "description", "Schedule mapped subjects by course, date and examination shift.", "variant", "compact", "layout", "collection"], ["page-actions", "", 1, "erp-button-group"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["type", "file", "accept", ".csv,text/csv", 1, "erp-sr-only", 3, "change"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], ["type", "search", "placeholder", "Search subjects or courses", "aria-label", "Search subject schedules", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], ["eyebrow", "Exam", "description", "Select the academic mapping, examination date and saved shift.", "illustration", "taskSchedule", 3, "closed", "open", "title", "busy"], [1, "erp-card", "erp-card--padded"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], ["type", "date", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["drawer-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["eyebrow", "Subject schedule", "title", "Delete this scheduled subject?", "confirmLabel", "Delete schedule", 3, "confirmed", "cancelled", "open", "message", "destructive"], [1, "erp-status"], [3, "selected", "items"], ["colspan", "8", 1, "erp-empty-state"], ["kind", "taskSchedule", "size", "compact"]], template: function ExamSubjectSchedulesComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "erp-admin-page", 1)(1, "div", 2)(2, "button", 3);
            i0.ɵɵlistener("click", function ExamSubjectSchedulesComponent_Template_button_click_2_listener() { return ctx.downloadTemplate(); });
            i0.ɵɵtext(3, " Download CSV template ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 4);
            i0.ɵɵlistener("click", function ExamSubjectSchedulesComponent_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const scheduleCsvInput_r2 = i0.ɵɵreference(7); return i0.ɵɵresetView(scheduleCsvInput_r2.click()); });
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 5, 0);
            i0.ɵɵlistener("change", function ExamSubjectSchedulesComponent_Template_input_change_6_listener($event) { return ctx.uploadCsv($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 6);
            i0.ɵɵlistener("click", function ExamSubjectSchedulesComponent_Template_button_click_8_listener() { return ctx.openCreate(); });
            i0.ɵɵtext(9, " Schedule subject ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(10, ExamSubjectSchedulesComponent_Conditional_10_Template, 2, 1, "p", 7);
            i0.ɵɵconditionalCreate(11, ExamSubjectSchedulesComponent_Conditional_11_Template, 2, 1, "p", 8);
            i0.ɵɵelementStart(12, "section", 9)(13, "div", 10)(14, "div")(15, "h2");
            i0.ɵɵtext(16, " Scheduled subjects ");
            i0.ɵɵelementStart(17, "small");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "p");
            i0.ɵɵtext(20, "Subjects are validated against their configured academic scope.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 12)(23, "table")(24, "thead")(25, "tr")(26, "th");
            i0.ɵɵtext(27, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "th");
            i0.ɵɵtext(29, "Course / Semester");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "th");
            i0.ɵɵtext(31, "Exam schedule");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "th");
            i0.ɵɵtext(33, "Exam date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "th");
            i0.ɵɵtext(35, "Shift");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "th");
            i0.ɵɵtext(37, "University / College");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "th");
            i0.ɵɵtext(39, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "th", 13);
            i0.ɵɵtext(41, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "tbody");
            i0.ɵɵrepeaterCreate(43, ExamSubjectSchedulesComponent_For_44_Template, 29, 16, "tr", null, _forTrack0, false, ExamSubjectSchedulesComponent_ForEmpty_45_Template, 5, 1, "tr");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(46, "erp-admin-drawer", 14);
            i0.ɵɵlistener("closed", function ExamSubjectSchedulesComponent_Template_erp_admin_drawer_closed_46_listener() { return ctx.closeDrawer(); });
            i0.ɵɵconditionalCreate(47, ExamSubjectSchedulesComponent_Conditional_47_Template, 2, 1, "p", 8);
            i0.ɵɵelementStart(48, "section", 15)(49, "div", 16)(50, "label")(51, "span");
            i0.ɵɵtext(52, "Academic session *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "select", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_53_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.academicSessionId, $event) || (ctx.academicSessionId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_53_listener() { return ctx.scheduleScopeChanged(); });
            i0.ɵɵelementStart(54, "option", 18);
            i0.ɵɵtext(55, "Select academic session");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(56, ExamSubjectSchedulesComponent_For_57_Template, 2, 2, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "label")(59, "span");
            i0.ɵɵtext(60, "University *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "select", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_61_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.universityId, $event) || (ctx.universityId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_61_listener() { return ctx.universityChanged(); });
            i0.ɵɵelementStart(62, "option", 18);
            i0.ɵɵtext(63, "Select university");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(64, ExamSubjectSchedulesComponent_For_65_Template, 2, 2, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "label")(67, "span");
            i0.ɵɵtext(68, "College *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "select", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_69_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.collegeId, $event) || (ctx.collegeId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_69_listener() { return ctx.collegeChanged(); });
            i0.ɵɵelementStart(70, "option", 18);
            i0.ɵɵtext(71, "Select college");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(72, ExamSubjectSchedulesComponent_For_73_Template, 2, 2, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "label")(75, "span");
            i0.ɵɵtext(76, "Exam schedule *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "select", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_77_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.examScheduleId, $event) || (ctx.examScheduleId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_77_listener() { return ctx.examScheduleChanged(); });
            i0.ɵɵelementStart(78, "option", 18);
            i0.ɵɵtext(79, "Select exam schedule");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(80, ExamSubjectSchedulesComponent_For_81_Template, 2, 2, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(82, "label")(83, "span");
            i0.ɵɵtext(84, "Department *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "select", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_85_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.departmentId, $event) || (ctx.departmentId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_85_listener() { return ctx.departmentChanged(); });
            i0.ɵɵelementStart(86, "option", 18);
            i0.ɵɵtext(87, "Select department");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(88, ExamSubjectSchedulesComponent_For_89_Template, 2, 2, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(90, "label")(91, "span");
            i0.ɵɵtext(92, "Level *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "select", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_93_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.levelId, $event) || (ctx.levelId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_93_listener() { return ctx.levelChanged(); });
            i0.ɵɵelementStart(94, "option", 18);
            i0.ɵɵtext(95, "Select level");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(96, ExamSubjectSchedulesComponent_For_97_Template, 2, 2, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(98, "label")(99, "span");
            i0.ɵɵtext(100, "Course *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(101, "select", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_101_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.courseId, $event) || (ctx.courseId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_101_listener() { return ctx.scheduleScopeChanged(); });
            i0.ɵɵelementStart(102, "option", 18);
            i0.ɵɵtext(103, "Select course");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(104, ExamSubjectSchedulesComponent_For_105_Template, 2, 2, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(106, "label")(107, "span");
            i0.ɵɵtext(108, "Semester *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "select", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_109_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.semester, $event) || (ctx.semester = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_109_listener() { return ctx.scheduleScopeChanged(); });
            i0.ɵɵelementStart(110, "option", 21);
            i0.ɵɵtext(111, "Select semester");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(112, ExamSubjectSchedulesComponent_For_113_Template, 2, 2, "option", 21, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(114, "label")(115, "span");
            i0.ɵɵtext(116, "Mapped subject *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(117, "select", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_117_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.subjectId, $event) || (ctx.subjectId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(118, "option", 18);
            i0.ɵɵtext(119);
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(120, ExamSubjectSchedulesComponent_For_121_Template, 2, 3, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(122, "label")(123, "span");
            i0.ɵɵtext(124, "Exam date *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_input_ngModelChange_125_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.examDate, $event) || (ctx.examDate = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(126, "label")(127, "span");
            i0.ɵɵtext(128, "Shift *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "select", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_select_ngModelChange_129_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.shiftId, $event) || (ctx.shiftId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(130, "option", 18);
            i0.ɵɵtext(131, "Select shift time");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(132, ExamSubjectSchedulesComponent_For_133_Template, 2, 5, "option", 19, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(134, "label")(135, "input", 23);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSubjectSchedulesComponent_Template_input_ngModelChange_135_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.isActive, $event) || (ctx.isActive = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "span");
            i0.ɵɵtext(137, "Active subject schedule");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(138, "button", 24);
            i0.ɵɵlistener("click", function ExamSubjectSchedulesComponent_Template_button_click_138_listener() { return ctx.save(); });
            i0.ɵɵtext(139);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(140, "erp-confirm-dialog", 25);
            i0.ɵɵlistener("confirmed", function ExamSubjectSchedulesComponent_Template_erp_confirm_dialog_confirmed_140_listener() { return ctx.deleteItem(); })("cancelled", function ExamSubjectSchedulesComponent_Template_erp_confirm_dialog_cancelled_140_listener() { return ctx.deleteTarget.set(null); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.uploading());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.uploading() ? "Uploading\u2026" : "Upload CSV", " ");
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.message() ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() && !ctx.drawerOpen() ? 11 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.items().length);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(22);
            i0.ɵɵrepeater(ctx.visibleItems());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("open", ctx.drawerOpen())("title", ctx.editingId() ? "Edit subject schedule" : "Schedule a subject")("busy", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 47 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.academicSessionId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.master("academic"));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.universityId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.master("university"));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.collegeId);
            i0.ɵɵproperty("disabled", !ctx.universityId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.scopedMaster("college", ctx.universityId));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.examScheduleId);
            i0.ɵɵproperty("disabled", !ctx.academicSessionId || !ctx.universityId || !ctx.collegeId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.scheduleOptions());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.departmentId);
            i0.ɵɵproperty("disabled", !ctx.collegeId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.scopedMaster("department", ctx.collegeId));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.levelId);
            i0.ɵɵproperty("disabled", !ctx.departmentId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.scopedMaster("level", ctx.departmentId));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.courseId);
            i0.ɵɵproperty("disabled", !ctx.levelId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.scopedMaster("course", ctx.levelId));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.semester);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngValue", null);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.semesters);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.subjectId);
            i0.ɵɵproperty("disabled", ctx.loadingSubjects() || !ctx.courseId);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.loadingSubjects() ? "Loading subjects\u2026" : "Select subject");
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.subjects());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.examDate);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.shiftId);
            i0.ɵɵproperty("disabled", !ctx.examScheduleId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.shiftOptions());
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.isActive);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.saving() || ctx.loadingSubjects());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Saving\u2026" : "Save subject schedule", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("open", !!ctx.deleteTarget())("message", "This removes the subject from the selected examination schedule.")("destructive", true);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, AdminDrawerComponent,
            AdminIllustrationComponent,
            AdminPageComponent,
            CompactActionMenuComponent,
            ConfirmDialogComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExamSubjectSchedulesComponent, [{
        type: Component,
        args: [{ selector: 'erp-exam-subject-schedules', imports: [
                    FormsModule,
                    AdminDrawerComponent,
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Exam\"\n  title=\"Subject schedule\"\n  description=\"Schedule mapped subjects by course, date and examination shift.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <div page-actions class=\"erp-button-group\">\n    <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"downloadTemplate()\">\n      Download CSV template\n    </button>\n    <button\n      class=\"erp-button erp-button--secondary\"\n      type=\"button\"\n      [disabled]=\"uploading()\"\n      (click)=\"scheduleCsvInput.click()\"\n    >\n      {{ uploading() ? 'Uploading\u2026' : 'Upload CSV' }}\n    </button>\n    <input\n      #scheduleCsvInput\n      class=\"erp-sr-only\"\n      type=\"file\"\n      accept=\".csv,text/csv\"\n      (change)=\"uploadCsv($event)\"\n    />\n    <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n      Schedule subject\n    </button>\n  </div>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error() && !drawerOpen()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Scheduled subjects <small>{{ items().length }}</small>\n        </h2>\n        <p>Subjects are validated against their configured academic scope.</p>\n      </div>\n      <input\n        class=\"erp-control\"\n        type=\"search\"\n        placeholder=\"Search subjects or courses\"\n        aria-label=\"Search subject schedules\"\n        [(ngModel)]=\"search\"\n      />\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Subject</th>\n            <th>Course / Semester</th>\n            <th>Exam schedule</th>\n            <th>Exam date</th>\n            <th>Shift</th>\n            <th>University / College</th>\n            <th>Status</th>\n            <th class=\"erp-table-shell__actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of visibleItems(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{ item.subjectName }}</strong\n                ><small>{{ item.subjectCode || 'No subject code' }}</small>\n              </td>\n              <td>\n                <strong>{{ item.courseName }}</strong\n                ><small>{{ item.departmentName }} \u00B7 Semester {{ item.semester }}</small>\n              </td>\n              <td>{{ item.examScheduleCaption }}</td>\n              <td>{{ item.examDate }}</td>\n              <td>\n                Shift {{ item.shiftSerial\n                }}<small\n                  >{{ item.timeFrom }} {{ item.timeFromMeridiem }} \u2013 {{ item.timeTo }}\n                  {{ item.timeToMeridiem }}</small\n                >\n              </td>\n              <td>\n                <strong>{{ item.collegeName }}</strong\n                ><small>{{ item.universityName }}</small>\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ item.isActive ? 'Scheduled' : 'Inactive' }}</span>\n              </td>\n              <td class=\"erp-table-shell__actions\">\n                <erp-compact-action-menu\n                  [items]=\"rowActions()\"\n                  (selected)=\"handleAction($event, item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">\n                <erp-admin-illustration kind=\"taskSchedule\" size=\"compact\" />\n                <p>{{ loading() ? 'Loading subject schedules\u2026' : 'No subjects scheduled.' }}</p>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n\n<erp-admin-drawer\n  [open]=\"drawerOpen()\"\n  [title]=\"editingId() ? 'Edit subject schedule' : 'Schedule a subject'\"\n  eyebrow=\"Exam\"\n  description=\"Select the academic mapping, examination date and saved shift.\"\n  illustration=\"taskSchedule\"\n  [busy]=\"saving()\"\n  (closed)=\"closeDrawer()\"\n>\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-form-grid\">\n      <label>\n        <span>Academic session *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"academicSessionId\"\n          (ngModelChange)=\"scheduleScopeChanged()\"\n        >\n          <option value=\"\">Select academic session</option>\n          @for (item of master('academic'); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>University *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"universityId\"\n          (ngModelChange)=\"universityChanged()\"\n        >\n          <option value=\"\">Select university</option>\n          @for (item of master('university'); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>College *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"collegeId\"\n          [disabled]=\"!universityId\"\n          (ngModelChange)=\"collegeChanged()\"\n        >\n          <option value=\"\">Select college</option>\n          @for (item of scopedMaster('college', universityId); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Exam schedule *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"examScheduleId\"\n          [disabled]=\"!academicSessionId || !universityId || !collegeId\"\n          (ngModelChange)=\"examScheduleChanged()\"\n        >\n          <option value=\"\">Select exam schedule</option>\n          @for (item of scheduleOptions(); track item._id) {\n            <option [value]=\"item._id\">{{ item.caption }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Department *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"departmentId\"\n          [disabled]=\"!collegeId\"\n          (ngModelChange)=\"departmentChanged()\"\n        >\n          <option value=\"\">Select department</option>\n          @for (item of scopedMaster('department', collegeId); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Level *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"levelId\"\n          [disabled]=\"!departmentId\"\n          (ngModelChange)=\"levelChanged()\"\n        >\n          <option value=\"\">Select level</option>\n          @for (item of scopedMaster('level', departmentId); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Course *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"courseId\"\n          [disabled]=\"!levelId\"\n          (ngModelChange)=\"scheduleScopeChanged()\"\n        >\n          <option value=\"\">Select course</option>\n          @for (item of scopedMaster('course', levelId); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Semester *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"semester\" (ngModelChange)=\"scheduleScopeChanged()\">\n          <option [ngValue]=\"null\">Select semester</option>\n          @for (item of semesters; track item) {\n            <option [ngValue]=\"item\">Semester {{ item }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Mapped subject *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"subjectId\"\n          [disabled]=\"loadingSubjects() || !courseId\"\n        >\n          <option value=\"\">{{ loadingSubjects() ? 'Loading subjects\u2026' : 'Select subject' }}</option>\n          @for (item of subjects(); track item._id) {\n            <option [value]=\"item._id\">\n              {{ item.name }}{{ item.code ? ' \u00B7 ' + item.code : '' }}\n            </option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Exam date *</span>\n        <input class=\"erp-control\" type=\"date\" [(ngModel)]=\"examDate\" />\n      </label>\n      <label>\n        <span>Shift *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"shiftId\" [disabled]=\"!examScheduleId\">\n          <option value=\"\">Select shift time</option>\n          @for (item of shiftOptions(); track item._id) {\n            <option [value]=\"item._id\">\n              {{ item.timeFrom }} {{ item.timeFromMeridiem }} - {{ item.timeTo }}\n              {{ item.timeToMeridiem }}\n            </option>\n          }\n        </select>\n      </label>\n      <label>\n        <input type=\"checkbox\" [(ngModel)]=\"isActive\" />\n        <span>Active subject schedule</span>\n      </label>\n    </div>\n  </section>\n  <button\n    drawer-actions\n    class=\"erp-button erp-button--primary\"\n    type=\"button\"\n    [disabled]=\"saving() || loadingSubjects()\"\n    (click)=\"save()\"\n  >\n    {{ saving() ? 'Saving\u2026' : 'Save subject schedule' }}\n  </button>\n</erp-admin-drawer>\n\n<erp-confirm-dialog\n  [open]=\"!!deleteTarget()\"\n  eyebrow=\"Subject schedule\"\n  title=\"Delete this scheduled subject?\"\n  [message]=\"'This removes the subject from the selected examination schedule.'\"\n  confirmLabel=\"Delete schedule\"\n  [destructive]=\"true\"\n  (confirmed)=\"deleteItem()\"\n  (cancelled)=\"deleteTarget.set(null)\"\n/>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExamSubjectSchedulesComponent, { className: "ExamSubjectSchedulesComponent", filePath: "frontend/src/app/features/admin/exams/exam-subject-schedules.component.ts", lineNumber: 44 }); })();

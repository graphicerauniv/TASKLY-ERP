import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { FacultySessionService } from '../shared/faculty-session.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.admissionId;
function FacultyAttendanceComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function FacultyAttendanceComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function FacultyAttendanceComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "h2");
    i0.ɵɵtext(2, "Faculty timetable mapping required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Your Academic Faculty code must match your Employee ID.");
    i0.ɵɵelementEnd()();
} }
function FacultyAttendanceComponent_Conditional_16_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function FacultyAttendanceComponent_Conditional_16_For_2_Template_button_click_0_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openClass(item_r3)); });
    i0.ɵɵelementStart(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", item_r3.subjectCode, " \u00B7 ", item_r3.groupName, " / ", item_r3.sectionName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", item_r3.startTime, "\u2013", item_r3.endTime);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r3.rosterCount, " students \u00B7 ", item_r3.attendanceStatus === "saved" ? "Attendance saved" : "Not marked");
} }
function FacultyAttendanceComponent_Conditional_16_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "h2");
    i0.ɵɵtext(2, "No classes on this date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Classes appear after both a subject and faculty are assigned in the timetable.");
    i0.ɵɵelementEnd()();
} }
function FacultyAttendanceComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵrepeaterCreate(1, FacultyAttendanceComponent_Conditional_16_For_2_Template, 11, 8, "button", 8, _forTrack0, false, FacultyAttendanceComponent_Conditional_16_ForEmpty_3_Template, 5, 0, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.classes());
} }
function FacultyAttendanceComponent_Conditional_17_For_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td")(6, "select", 12);
    i0.ɵɵtwoWayListener("ngModelChange", function FacultyAttendanceComponent_Conditional_17_For_26_Template_select_ngModelChange_6_listener($event) { const student_r6 = i0.ɵɵrestoreView(_r5).$implicit; i0.ɵɵtwoWayBindingSet(student_r6.status, $event) || (student_r6.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(7, "option", 13);
    i0.ɵɵtext(8, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 14);
    i0.ɵɵtext(10, "Absent");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const student_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r6.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r6.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", student_r6.status);
} }
function FacultyAttendanceComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 7)(1, "header")(2, "div")(3, "button", 9);
    i0.ɵɵlistener("click", function FacultyAttendanceComponent_Conditional_17_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectedClass.set(null)); });
    i0.ɵɵtext(4, "\u2190 Classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div")(10, "button", 9);
    i0.ɵɵlistener("click", function FacultyAttendanceComponent_Conditional_17_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setAll("present")); });
    i0.ɵɵtext(11, "Mark all present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 9);
    i0.ɵɵlistener("click", function FacultyAttendanceComponent_Conditional_17_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setAll("absent")); });
    i0.ɵɵtext(13, "Mark all absent");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 10)(15, "table")(16, "thead")(17, "tr")(18, "th");
    i0.ɵɵtext(19, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Attendance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "tbody");
    i0.ɵɵrepeaterCreate(25, FacultyAttendanceComponent_Conditional_17_For_26_Template, 11, 3, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "footer")(28, "button", 11);
    i0.ɵɵlistener("click", function FacultyAttendanceComponent_Conditional_17_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r0.selectedClass()) == null ? null : tmp_1_0.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (tmp_2_0 = ctx_r0.selectedClass()) == null ? null : tmp_2_0.groupName, " \u00B7 ", (tmp_2_0 = ctx_r0.selectedClass()) == null ? null : tmp_2_0.sectionName);
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r0.students());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.saving() || !ctx_r0.students().length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : "Save attendance", " ");
} }
export class FacultyAttendanceComponent {
    api = inject(ApiService);
    session = inject(FacultySessionService);
    classes = signal([], ...(ngDevMode ? [{ debugName: "classes" }] : /* istanbul ignore next */ []));
    students = signal([], ...(ngDevMode ? [{ debugName: "students" }] : /* istanbul ignore next */ []));
    selectedClass = signal(null, ...(ngDevMode ? [{ debugName: "selectedClass" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    mapped = signal(true, ...(ngDevMode ? [{ debugName: "mapped" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    date = localDate();
    constructor() {
        this.loadClasses();
    }
    loadClasses() {
        const token = this.session.token();
        if (!token)
            return;
        this.loading.set(true);
        this.error.set('');
        this.api.facultyAttendanceClasses(token, this.date).subscribe({
            next: (result) => {
                this.classes.set(result.items);
                this.mapped.set(result.facultyMapped);
                this.selectedClass.set(null);
                this.students.set([]);
                this.loading.set(false);
            },
            error: () => {
                this.error.set('Attendance classes could not be loaded.');
                this.loading.set(false);
            },
        });
    }
    openClass(item) {
        const token = this.session.token();
        if (!token)
            return;
        this.loading.set(true);
        this.api.facultyAttendanceRoster(token, item._id, this.date).subscribe({
            next: (result) => {
                this.selectedClass.set(item);
                this.students.set(result.students);
                this.loading.set(false);
            },
            error: () => {
                this.error.set('The student roster could not be loaded.');
                this.loading.set(false);
            },
        });
    }
    setAll(status) {
        this.students.update((items) => items.map((student) => ({ ...student, status })));
    }
    save() {
        const token = this.session.token();
        const entry = this.selectedClass();
        if (!token || !entry || !this.students().length)
            return;
        this.saving.set(true);
        this.api
            .saveFacultyAttendance(token, entry._id, this.date, this.students().map((student) => ({
            studentAdmissionId: student.admissionId,
            status: student.status,
        })))
            .subscribe({
            next: () => {
                this.message.set('Attendance saved successfully.');
                this.saving.set(false);
                this.loadClasses();
            },
            error: () => {
                this.error.set('Attendance could not be saved.');
                this.saving.set(false);
            },
        });
    }
    static ɵfac = function FacultyAttendanceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FacultyAttendanceComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FacultyAttendanceComponent, selectors: [["erp-faculty-attendance"]], decls: 18, vars: 4, consts: [[1, "faculty-attendance-page"], [1, "faculty-attendance-heading"], ["type", "date", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-alert", "erp-alert--error"], [1, "erp-alert", "erp-alert--success"], [1, "faculty-attendance-empty"], [1, "faculty-class-list"], [1, "faculty-roster"], ["type", "button"], ["type", "button", 3, "click"], [1, "faculty-roster__table"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "present"], ["value", "absent"]], template: function FacultyAttendanceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p");
            i0.ɵɵtext(4, "Faculty portal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Attendance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "Open a scheduled class and mark its combined student roster.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "label")(10, "span");
            i0.ɵɵtext(11, "Attendance date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "input", 2);
            i0.ɵɵtwoWayListener("ngModelChange", function FacultyAttendanceComponent_Template_input_ngModelChange_12_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.date, $event) || (ctx.date = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function FacultyAttendanceComponent_Template_input_ngModelChange_12_listener() { return ctx.loadClasses(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(13, FacultyAttendanceComponent_Conditional_13_Template, 2, 1, "div", 3);
            i0.ɵɵconditionalCreate(14, FacultyAttendanceComponent_Conditional_14_Template, 2, 1, "div", 4);
            i0.ɵɵconditionalCreate(15, FacultyAttendanceComponent_Conditional_15_Template, 5, 0, "div", 5)(16, FacultyAttendanceComponent_Conditional_16_Template, 4, 1, "div", 6)(17, FacultyAttendanceComponent_Conditional_17_Template, 30, 5, "section", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.date);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.mapped() ? 15 : !ctx.selectedClass() ? 16 : 17);
        } }, dependencies: [CommonModule, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.faculty-attendance-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n.faculty-attendance-heading[_ngcontent-%COMP%], \n.faculty-roster[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: flex-end;\n}\n.faculty-attendance-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.faculty-attendance-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.faculty-attendance-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.faculty-roster[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.faculty-roster[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.faculty-attendance-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n}\n.faculty-class-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.faculty-class-list[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 18px;\n  border: 1px solid var(--student-border);\n  border-radius: 14px;\n  background: var(--student-surface);\n  text-align: left;\n}\n.faculty-class-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.faculty-class-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.faculty-class-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: var(--student-text-muted);\n}\n.faculty-attendance-empty[_ngcontent-%COMP%], \n.faculty-roster[_ngcontent-%COMP%] {\n  padding: 24px;\n  border: 1px solid var(--student-border);\n  border-radius: 16px;\n  background: var(--student-surface);\n}\n.faculty-roster[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.faculty-roster[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  gap: 8px;\n}\n.faculty-roster[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 36px;\n}\n.faculty-roster__table[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.faculty-roster[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.faculty-roster[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.faculty-roster[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid var(--student-border);\n  text-align: left;\n}\n.faculty-roster[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n@media (max-width: 700px) {\n  .faculty-attendance-heading[_ngcontent-%COMP%], \n   .faculty-roster[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n   .faculty-class-list[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FacultyAttendanceComponent, [{
        type: Component,
        args: [{ selector: 'erp-faculty-attendance', imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"faculty-attendance-page\">\n  <header class=\"faculty-attendance-heading\">\n    <div>\n      <p>Faculty portal</p>\n      <h1>Attendance</h1>\n      <span>Open a scheduled class and mark its combined student roster.</span>\n    </div>\n    <label\n      ><span>Attendance date</span\n      ><input class=\"erp-control\" type=\"date\" [(ngModel)]=\"date\" (ngModelChange)=\"loadClasses()\"\n    /></label>\n  </header>\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--error\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n  @if (!mapped()) {\n    <div class=\"faculty-attendance-empty\">\n      <h2>Faculty timetable mapping required</h2>\n      <p>Your Academic Faculty code must match your Employee ID.</p>\n    </div>\n  } @else if (!selectedClass()) {\n    <div class=\"faculty-class-list\">\n      @for (item of classes(); track item._id) {\n        <button type=\"button\" (click)=\"openClass(item)\">\n          <span\n            ><strong>{{ item.subjectName }}</strong\n            ><small\n              >{{ item.subjectCode }} \u00B7 {{ item.groupName }} / {{ item.sectionName }}</small\n            ></span\n          >\n          <span\n            ><strong>{{ item.startTime }}\u2013{{ item.endTime }}</strong\n            ><small\n              >{{ item.rosterCount }} students \u00B7\n              {{ item.attendanceStatus === 'saved' ? 'Attendance saved' : 'Not marked' }}</small\n            ></span\n          >\n        </button>\n      } @empty {\n        <div class=\"faculty-attendance-empty\">\n          <h2>No classes on this date</h2>\n          <p>Classes appear after both a subject and faculty are assigned in the timetable.</p>\n        </div>\n      }\n    </div>\n  } @else {\n    <section class=\"faculty-roster\">\n      <header>\n        <div>\n          <button type=\"button\" (click)=\"selectedClass.set(null)\">\u2190 Classes</button>\n          <h2>{{ selectedClass()?.subjectName }}</h2>\n          <p>{{ selectedClass()?.groupName }} \u00B7 {{ selectedClass()?.sectionName }}</p>\n        </div>\n        <div>\n          <button type=\"button\" (click)=\"setAll('present')\">Mark all present</button\n          ><button type=\"button\" (click)=\"setAll('absent')\">Mark all absent</button>\n        </div>\n      </header>\n      <div class=\"faculty-roster__table\">\n        <table>\n          <thead>\n            <tr>\n              <th>Student ID</th>\n              <th>Student</th>\n              <th>Attendance</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (student of students(); track student.admissionId) {\n              <tr>\n                <td>{{ student.studentId }}</td>\n                <td>{{ student.studentName }}</td>\n                <td>\n                  <select class=\"erp-control\" [(ngModel)]=\"student.status\">\n                    <option value=\"present\">Present</option>\n                    <option value=\"absent\">Absent</option>\n                  </select>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n      <footer>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"saving() || !students().length\"\n          (click)=\"save()\"\n        >\n          {{ saving() ? 'Saving\u2026' : 'Save attendance' }}\n        </button>\n      </footer>\n    </section>\n  }\n</section>\n", styles: [":host {\n  display: block;\n}\n.faculty-attendance-page {\n  display: grid;\n  gap: 20px;\n}\n.faculty-attendance-heading,\n.faculty-roster > header {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: flex-end;\n}\n.faculty-attendance-heading h1,\n.faculty-attendance-heading p,\n.faculty-attendance-heading span,\n.faculty-roster h2,\n.faculty-roster p {\n  margin: 0;\n}\n.faculty-attendance-heading label {\n  display: grid;\n  gap: 6px;\n}\n.faculty-class-list {\n  display: grid;\n  gap: 12px;\n}\n.faculty-class-list > button {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 18px;\n  border: 1px solid var(--student-border);\n  border-radius: 14px;\n  background: var(--student-surface);\n  text-align: left;\n}\n.faculty-class-list span,\n.faculty-class-list small {\n  display: block;\n}\n.faculty-class-list small {\n  margin-top: 5px;\n  color: var(--student-text-muted);\n}\n.faculty-attendance-empty,\n.faculty-roster {\n  padding: 24px;\n  border: 1px solid var(--student-border);\n  border-radius: 16px;\n  background: var(--student-surface);\n}\n.faculty-roster {\n  display: grid;\n  gap: 18px;\n}\n.faculty-roster header > div:last-child {\n  display: flex;\n  gap: 8px;\n}\n.faculty-roster button {\n  min-height: 36px;\n}\n.faculty-roster__table {\n  overflow: auto;\n}\n.faculty-roster table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.faculty-roster th,\n.faculty-roster td {\n  padding: 12px;\n  border-bottom: 1px solid var(--student-border);\n  text-align: left;\n}\n.faculty-roster footer {\n  display: flex;\n  justify-content: flex-end;\n}\n@media (max-width: 700px) {\n  .faculty-attendance-heading,\n  .faculty-roster > header,\n  .faculty-class-list > button {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FacultyAttendanceComponent, { className: "FacultyAttendanceComponent", filePath: "frontend/src/app/features/faculty/pages/faculty-attendance.component.ts", lineNumber: 15 }); })();
function localDate() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LucideSearch } from '@lucide/angular';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function StudentAcademicsDashboardComponent_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function StudentAcademicsDashboardComponent_For_12_Template_button_click_0_listener() { const group_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeCategory.set(group_r2.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.activeCategory() === group_r2.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", group_r2.shortTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r2.items.length);
} }
function StudentAcademicsDashboardComponent_For_18_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 16)(1, "span", 18);
    i0.ɵɵelement(2, "img", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "i", 20);
    i0.ɵɵtext(9, "\u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r4.route);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r4.icon, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.description);
} }
function StudentAcademicsDashboardComponent_For_18_ForEmpty_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, "No matching services in this category.");
    i0.ɵɵelementEnd();
} }
function StudentAcademicsDashboardComponent_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14)(1, "header")(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 15);
    i0.ɵɵrepeaterCreate(7, StudentAcademicsDashboardComponent_For_18_For_8_Template, 10, 4, "a", 16, _forTrack0, false, StudentAcademicsDashboardComponent_For_18_ForEmpty_9_Template, 2, 0, "div", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("mobile-active", ctx_r2.activeCategory() === group_r5.id);
    i0.ɵɵattribute("data-group", group_r5.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(group_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r5.description);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(group_r5.items);
} }
function StudentAcademicsDashboardComponent_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.activeCategory() === group_r6.id);
} }
const ASSET_ROOT = '/assets/student/academics';
export class StudentAcademicsDashboardComponent {
    activeCategory = signal('learning', ...(ngDevMode ? [{ debugName: "activeCategory" }] : /* istanbul ignore next */ []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    groups = [
        {
            id: 'learning',
            shortTitle: 'Learning',
            title: 'Learning & Schedule',
            description: 'Manage your classes, schedule and learning activities.',
            items: [
                {
                    id: 'attendance',
                    title: 'Attendance',
                    description: 'View your attendance',
                    icon: `${ASSET_ROOT}/attendance.png`,
                    route: '/student/attendance',
                },
                {
                    id: 'timetable',
                    title: 'Timetable',
                    description: 'View class schedule',
                    icon: `${ASSET_ROOT}/timetable.png`,
                    route: '/student/academics/timetable',
                },
                {
                    id: 'assignments',
                    title: 'Assignments',
                    description: 'View and submit work',
                    icon: `${ASSET_ROOT}/assignment.png`,
                    route: '/student/academics/service/assignments',
                },
                {
                    id: 'feedback',
                    title: 'Feedback',
                    description: 'Share your feedback',
                    icon: `${ASSET_ROOT}/feedback.png`,
                    route: '/student/academics/service/feedback',
                },
                {
                    id: 'subjects',
                    title: 'Current Subjects',
                    description: 'View subject details',
                    icon: `${ASSET_ROOT}/current-subjects.png`,
                    route: '/student/academics/service/subjects',
                },
            ],
        },
        {
            id: 'registration',
            shortTitle: 'Registration',
            title: 'Registration & Programmes',
            description: 'Explore course options and manage your registrations.',
            items: [
                {
                    id: 'minor',
                    title: 'Minor / Specialization Course',
                    description: 'Explore additional courses',
                    icon: `${ASSET_ROOT}/minor-specialization.png`,
                    route: '/student/academics/service/minor',
                },
                {
                    id: 'semester-registration',
                    title: 'Semester Registration',
                    description: 'Register for next semester',
                    icon: `${ASSET_ROOT}/semester-registration.png`,
                    route: '/student/academics/semester-registration',
                },
                {
                    id: 'enrollment',
                    title: 'Enrollment Form',
                    description: 'Fill and submit form',
                    icon: `${ASSET_ROOT}/enrollment-form.png`,
                    route: '/student/academics/service/enrollment',
                },
                {
                    id: 'electives',
                    title: 'Elective Subject Options',
                    description: 'Choose your electives',
                    icon: `${ASSET_ROOT}/elective-subjects.png`,
                    route: '/student/academics/service/electives',
                },
                {
                    id: 'thesis',
                    title: 'Submit Thesis and Subject',
                    description: 'Submit your thesis',
                    icon: `${ASSET_ROOT}/thesis-submission.png`,
                    route: '/student/academics/service/thesis',
                },
            ],
        },
        {
            id: 'records',
            shortTitle: 'Records',
            title: 'Records & Services',
            description: 'Access important documents and student services.',
            items: [
                {
                    id: 'international-document',
                    title: 'International Document',
                    description: 'Apply for international documents',
                    icon: `${ASSET_ROOT}/international-document.png`,
                    route: '/student/academics/service/international-document',
                },
                {
                    id: 'abc-account',
                    title: 'ABC Account Number',
                    description: 'View your ABC ID',
                    icon: `${ASSET_ROOT}/abc-account.png`,
                    route: '/student/academics/service/abc-account',
                },
                {
                    id: 'vehicle-registration',
                    title: 'Vehicle Registration',
                    description: 'Register your vehicle',
                    icon: `${ASSET_ROOT}/vehicle-registration.png`,
                    route: '/student/academics/service/vehicle-registration',
                },
                {
                    id: 'document-upload',
                    title: 'Document Upload',
                    description: 'Upload your documents',
                    icon: `${ASSET_ROOT}/document-upload.png`,
                    route: '/student/academics/service/document-upload',
                },
                {
                    id: 'document-download',
                    title: 'Student Document Download',
                    description: 'Download your documents',
                    icon: `${ASSET_ROOT}/document-download.png`,
                    route: '/student/academics/service/document-download',
                },
            ],
        },
    ];
    visibleGroups = computed(() => {
        const term = this.search().trim().toLowerCase();
        return this.groups.map((group) => ({
            ...group,
            items: group.items.filter((item) => !term || `${item.title} ${item.description}`.toLowerCase().includes(term)),
        }));
    }, ...(ngDevMode ? [{ debugName: "visibleGroups" }] : /* istanbul ignore next */ []));
    static ɵfac = function StudentAcademicsDashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAcademicsDashboardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAcademicsDashboardComponent, selectors: [["erp-student-academics-dashboard"]], decls: 24, vars: 1, consts: [[1, "academics-page"], [1, "academics-hero"], ["src", "/assets/student/academics/academics-hero.png", "width", "560", "height", "467", "alt", "Academic books, graduation cap and certificate"], ["aria-label", "Academic categories", 1, "academics-tabs"], ["type", "button", 3, "active"], [1, "academics-search"], ["lucideSearch", ""], ["type", "search", "placeholder", "Search academics", 3, "ngModelChange", "ngModel"], [1, "academics-groups"], [1, "academics-group", 3, "mobile-active"], ["aria-hidden", "true", 1, "academics-pages"], [3, "active"], [1, "academics-swipe"], ["type", "button", 3, "click"], [1, "academics-group"], [1, "academics-list"], [3, "routerLink"], [1, "academics-empty"], [1, "academics-icon"], ["width", "320", "height", "320", "alt", "", "aria-hidden", "true", 3, "src"], ["aria-hidden", "true"]], template: function StudentAcademicsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "small");
            i0.ɵɵtext(4, "Academics");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Academics");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Your courses, registrations and academic records.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(9, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "nav", 3);
            i0.ɵɵrepeaterCreate(11, StudentAcademicsDashboardComponent_For_12_Template, 4, 4, "button", 4, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "label", 5);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(14, "svg", 6);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(15, "input", 7);
            i0.ɵɵlistener("ngModelChange", function StudentAcademicsDashboardComponent_Template_input_ngModelChange_15_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 8);
            i0.ɵɵrepeaterCreate(17, StudentAcademicsDashboardComponent_For_18_Template, 10, 6, "section", 9, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 10);
            i0.ɵɵrepeaterCreate(20, StudentAcademicsDashboardComponent_For_21_Template, 1, 2, "i", 11, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "p", 12);
            i0.ɵɵtext(23, "Choose a category above to explore more services");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵrepeater(ctx.groups);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.visibleGroups());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.groups);
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, RouterLink, LucideSearch], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.academics-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  color: var(--student-color-text);\n}\n.academics-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 138px;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n}\n.academics-hero[_ngcontent-%COMP%]::after {\n  position: absolute;\n  z-index: -1;\n  top: -90px;\n  right: -80px;\n  width: 390px;\n  height: 260px;\n  border-radius: 50%;\n  background: var(--student-color-primary-soft);\n  content: '';\n  opacity: 0.7;\n}\n.academics-hero[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n  font-weight: 750;\n}\n.academics-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0 4px;\n  font-size: clamp(34px, 4vw, 48px);\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.academics-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n  font-size: 18px;\n}\n.academics-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 150px;\n  object-fit: contain;\n}\n.academics-tabs[_ngcontent-%COMP%], \n.academics-search[_ngcontent-%COMP%] {\n  display: none;\n}\n.academics-groups[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.academics-group[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 18px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n.academics-group[data-group='learning'][_ngcontent-%COMP%] {\n  background: linear-gradient(\n    155deg,\n    var(--student-color-surface),\n    var(--student-academics-learning-soft)\n  );\n}\n.academics-group[data-group='registration'][_ngcontent-%COMP%] {\n  background: linear-gradient(\n    155deg,\n    var(--student-color-surface),\n    var(--student-academics-registration-soft)\n  );\n}\n.academics-group[data-group='records'][_ngcontent-%COMP%] {\n  background: linear-gradient(\n    155deg,\n    var(--student-color-surface),\n    var(--student-academics-records-soft)\n  );\n}\n.academics-group[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.academics-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n}\n.academics-group[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n  line-height: 1.4;\n}\n.academics-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.academics-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 88px;\n  grid-template-columns: 96px minmax(0, 1fr) 42px;\n  align-items: center;\n  gap: 12px;\n  overflow: hidden;\n  padding: 8px 12px 8px 7px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 13px;\n  color: var(--student-color-text);\n  background: color-mix(in srgb, var(--student-color-surface) 76%, transparent);\n  text-decoration: none;\n  transition:\n    transform var(--student-motion-fast),\n    box-shadow var(--student-motion-fast),\n    border-color var(--student-motion-fast);\n}\n.academics-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -45px;\n  width: 95px;\n  height: 140%;\n  transform: skewX(-28deg);\n  background: color-mix(in srgb, var(--student-color-surface-raised) 60%, transparent);\n  content: '';\n}\n.academics-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: var(--student-color-primary-middle);\n  box-shadow: var(--student-shadow-card);\n}\n.academics-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 90px;\n  height: 72px;\n  place-items: center;\n  border-radius: 12px;\n  background: var(--student-color-primary-subtle);\n}\n.academics-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 82px;\n  height: 82px;\n  object-fit: contain;\n}\n.academics-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.academics-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.academics-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.academics-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.25;\n}\n.academics-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  overflow: hidden;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.academics-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface-raised);\n  font-size: 25px;\n  font-style: normal;\n}\n.academics-empty[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 120px;\n  place-items: center;\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n.academics-pages[_ngcontent-%COMP%], \n.academics-swipe[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1150px) {\n  .academics-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 210px;\n  }\n  .academics-groups[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .academics-group[_ngcontent-%COMP%]:last-child {\n    grid-column: 1/-1;\n  }\n  .academics-group[_ngcontent-%COMP%]:last-child   .academics-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 767px) {\n  .academics-page[_ngcontent-%COMP%] {\n    gap: 16px;\n    padding-bottom: 24px;\n  }\n  .academics-hero[_ngcontent-%COMP%] {\n    display: block;\n    min-height: auto;\n    overflow: visible;\n  }\n  .academics-hero[_ngcontent-%COMP%]::after, \n   .academics-hero[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n   .academics-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .academics-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .academics-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 38px;\n  }\n  .academics-tabs[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 6px;\n    border: 1px solid var(--student-color-border);\n    border-radius: 18px;\n    background: var(--student-color-surface);\n    box-shadow: var(--student-shadow-card);\n  }\n  .academics-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: flex;\n    min-height: 54px;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    border: 0;\n    border-radius: 14px;\n    color: var(--student-color-text-secondary);\n    background: transparent;\n    font: inherit;\n    font-weight: 750;\n  }\n  .academics-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n    color: var(--student-color-primary-pressed);\n    background: var(--student-color-primary-soft);\n  }\n  .academics-tabs[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    display: grid;\n    min-width: 30px;\n    height: 30px;\n    place-items: center;\n    border-radius: 50%;\n    background: var(--student-color-primary-subtle);\n  }\n  .academics-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: var(--student-color-text-inverse);\n    background: var(--student-color-primary);\n  }\n  .academics-search[_ngcontent-%COMP%] {\n    display: flex;\n    min-height: 52px;\n    align-items: center;\n    gap: 12px;\n    padding: 0 16px;\n    border: 1px solid var(--student-color-border);\n    border-radius: 16px;\n    color: var(--student-color-text-secondary);\n    background: var(--student-color-surface);\n    box-shadow: var(--student-shadow-card);\n  }\n  .academics-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 0;\n    outline: 0;\n    color: var(--student-color-text);\n    background: transparent;\n    font: inherit;\n  }\n  .academics-groups[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .academics-group[_ngcontent-%COMP%] {\n    display: none;\n    padding: 12px 16px;\n    border-radius: 20px;\n  }\n  .academics-group.mobile-active[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .academics-group[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .academics-list[_ngcontent-%COMP%] {\n    gap: 0;\n  }\n  .academics-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    min-height: 126px;\n    grid-template-columns: 142px minmax(0, 1fr) 54px;\n    gap: 14px;\n    padding: 10px 0;\n    border: 0;\n    border-bottom: 1px solid var(--student-color-divider);\n    border-radius: 0;\n    background: transparent;\n  }\n  .academics-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .academics-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .academics-icon[_ngcontent-%COMP%] {\n    width: 134px;\n    height: 106px;\n  }\n  .academics-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 112px;\n    height: 112px;\n  }\n  .academics-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .academics-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .academics-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    background: var(--student-color-primary-subtle);\n    font-size: 29px;\n  }\n  .academics-pages[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 28px;\n  }\n  .academics-pages[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: var(--student-color-border);\n  }\n  .academics-pages[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%] {\n    background: var(--student-color-primary);\n  }\n  .academics-swipe[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0;\n    color: var(--student-color-text-secondary);\n    text-align: center;\n  }\n}\n@media (max-width: 470px) {\n  .academics-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .academics-tabs[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    min-width: 25px;\n    height: 25px;\n  }\n  .academics-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    min-height: 106px;\n    grid-template-columns: 104px minmax(0, 1fr) 44px;\n  }\n  .academics-icon[_ngcontent-%COMP%] {\n    width: 96px;\n    height: 88px;\n  }\n  .academics-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n  }\n  .academics-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .academics-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .academics-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAcademicsDashboardComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-academics-dashboard', imports: [FormsModule, RouterLink, LucideSearch], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"academics-page\">\n  <header class=\"academics-hero\">\n    <div>\n      <small>Academics</small>\n      <h1>Academics</h1>\n      <p>Your courses, registrations and academic records.</p>\n    </div>\n    <img\n      src=\"/assets/student/academics/academics-hero.png\"\n      width=\"560\"\n      height=\"467\"\n      alt=\"Academic books, graduation cap and certificate\"\n    />\n  </header>\n\n  <nav class=\"academics-tabs\" aria-label=\"Academic categories\">\n    @for (group of groups; track group.id) {\n      <button\n        type=\"button\"\n        [class.active]=\"activeCategory() === group.id\"\n        (click)=\"activeCategory.set(group.id)\"\n      >\n        {{ group.shortTitle }}<b>{{ group.items.length }}</b>\n      </button>\n    }\n  </nav>\n\n  <label class=\"academics-search\"\n    ><svg lucideSearch></svg\n    ><input\n      type=\"search\"\n      placeholder=\"Search academics\"\n      [ngModel]=\"search()\"\n      (ngModelChange)=\"search.set($event)\"\n  /></label>\n\n  <div class=\"academics-groups\">\n    @for (group of visibleGroups(); track group.id) {\n      <section\n        class=\"academics-group\"\n        [attr.data-group]=\"group.id\"\n        [class.mobile-active]=\"activeCategory() === group.id\"\n      >\n        <header>\n          <h2>{{ group.title }}</h2>\n          <p>{{ group.description }}</p>\n        </header>\n        <div class=\"academics-list\">\n          @for (item of group.items; track item.id) {\n            <a [routerLink]=\"item.route\">\n              <span class=\"academics-icon\"\n                ><img [src]=\"item.icon\" width=\"320\" height=\"320\" alt=\"\" aria-hidden=\"true\"\n              /></span>\n              <span\n                ><strong>{{ item.title }}</strong\n                ><small>{{ item.description }}</small></span\n              >\n              <i aria-hidden=\"true\">\u2192</i>\n            </a>\n          } @empty {\n            <div class=\"academics-empty\">No matching services in this category.</div>\n          }\n        </div>\n      </section>\n    }\n  </div>\n  <div class=\"academics-pages\" aria-hidden=\"true\">\n    @for (group of groups; track group.id) {\n      <i [class.active]=\"activeCategory() === group.id\"></i>\n    }\n  </div>\n  <p class=\"academics-swipe\">Choose a category above to explore more services</p>\n</main>\n", styles: [":host {\n  display: block;\n}\n.academics-page {\n  display: grid;\n  gap: 18px;\n  color: var(--student-color-text);\n}\n.academics-hero {\n  position: relative;\n  display: flex;\n  min-height: 138px;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n}\n.academics-hero::after {\n  position: absolute;\n  z-index: -1;\n  top: -90px;\n  right: -80px;\n  width: 390px;\n  height: 260px;\n  border-radius: 50%;\n  background: var(--student-color-primary-soft);\n  content: '';\n  opacity: 0.7;\n}\n.academics-hero small {\n  color: var(--student-color-primary);\n  font-weight: 750;\n}\n.academics-hero h1 {\n  margin: 10px 0 4px;\n  font-size: clamp(34px, 4vw, 48px);\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.academics-hero p {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n  font-size: 18px;\n}\n.academics-hero img {\n  width: 260px;\n  height: 150px;\n  object-fit: contain;\n}\n.academics-tabs,\n.academics-search {\n  display: none;\n}\n.academics-groups {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.academics-group {\n  min-width: 0;\n  padding: 18px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n.academics-group[data-group='learning'] {\n  background: linear-gradient(\n    155deg,\n    var(--student-color-surface),\n    var(--student-academics-learning-soft)\n  );\n}\n.academics-group[data-group='registration'] {\n  background: linear-gradient(\n    155deg,\n    var(--student-color-surface),\n    var(--student-academics-registration-soft)\n  );\n}\n.academics-group[data-group='records'] {\n  background: linear-gradient(\n    155deg,\n    var(--student-color-surface),\n    var(--student-academics-records-soft)\n  );\n}\n.academics-group > header {\n  margin-bottom: 14px;\n}\n.academics-group h2 {\n  margin: 0;\n  font-size: 20px;\n}\n.academics-group > header p {\n  margin: 4px 0 0;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n  line-height: 1.4;\n}\n.academics-list {\n  display: grid;\n  gap: 10px;\n}\n.academics-list > a {\n  position: relative;\n  display: grid;\n  min-height: 88px;\n  grid-template-columns: 96px minmax(0, 1fr) 42px;\n  align-items: center;\n  gap: 12px;\n  overflow: hidden;\n  padding: 8px 12px 8px 7px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 13px;\n  color: var(--student-color-text);\n  background: color-mix(in srgb, var(--student-color-surface) 76%, transparent);\n  text-decoration: none;\n  transition:\n    transform var(--student-motion-fast),\n    box-shadow var(--student-motion-fast),\n    border-color var(--student-motion-fast);\n}\n.academics-list > a::after {\n  position: absolute;\n  right: -45px;\n  width: 95px;\n  height: 140%;\n  transform: skewX(-28deg);\n  background: color-mix(in srgb, var(--student-color-surface-raised) 60%, transparent);\n  content: '';\n}\n.academics-list > a:hover {\n  transform: translateY(-2px);\n  border-color: var(--student-color-primary-middle);\n  box-shadow: var(--student-shadow-card);\n}\n.academics-icon {\n  display: grid;\n  width: 90px;\n  height: 72px;\n  place-items: center;\n  border-radius: 12px;\n  background: var(--student-color-primary-subtle);\n}\n.academics-icon img {\n  width: 82px;\n  height: 82px;\n  object-fit: contain;\n}\n.academics-list > a > span:nth-child(2) {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.academics-list strong,\n.academics-list small {\n  display: block;\n}\n.academics-list strong {\n  font-size: 15px;\n  line-height: 1.25;\n}\n.academics-list small {\n  margin-top: 5px;\n  overflow: hidden;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.academics-list i {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface-raised);\n  font-size: 25px;\n  font-style: normal;\n}\n.academics-empty {\n  display: grid;\n  min-height: 120px;\n  place-items: center;\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n.academics-pages,\n.academics-swipe {\n  display: none;\n}\n@media (max-width: 1150px) {\n  .academics-hero img {\n    width: 210px;\n  }\n  .academics-groups {\n    grid-template-columns: 1fr 1fr;\n  }\n  .academics-group:last-child {\n    grid-column: 1/-1;\n  }\n  .academics-group:last-child .academics-list {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 767px) {\n  .academics-page {\n    gap: 16px;\n    padding-bottom: 24px;\n  }\n  .academics-hero {\n    display: block;\n    min-height: auto;\n    overflow: visible;\n  }\n  .academics-hero::after,\n  .academics-hero small,\n  .academics-hero p,\n  .academics-hero img {\n    display: none;\n  }\n  .academics-hero h1 {\n    margin: 0;\n    font-size: 38px;\n  }\n  .academics-tabs {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 6px;\n    border: 1px solid var(--student-color-border);\n    border-radius: 18px;\n    background: var(--student-color-surface);\n    box-shadow: var(--student-shadow-card);\n  }\n  .academics-tabs button {\n    display: flex;\n    min-height: 54px;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    border: 0;\n    border-radius: 14px;\n    color: var(--student-color-text-secondary);\n    background: transparent;\n    font: inherit;\n    font-weight: 750;\n  }\n  .academics-tabs button.active {\n    color: var(--student-color-primary-pressed);\n    background: var(--student-color-primary-soft);\n  }\n  .academics-tabs b {\n    display: grid;\n    min-width: 30px;\n    height: 30px;\n    place-items: center;\n    border-radius: 50%;\n    background: var(--student-color-primary-subtle);\n  }\n  .academics-tabs button.active b {\n    color: var(--student-color-text-inverse);\n    background: var(--student-color-primary);\n  }\n  .academics-search {\n    display: flex;\n    min-height: 52px;\n    align-items: center;\n    gap: 12px;\n    padding: 0 16px;\n    border: 1px solid var(--student-color-border);\n    border-radius: 16px;\n    color: var(--student-color-text-secondary);\n    background: var(--student-color-surface);\n    box-shadow: var(--student-shadow-card);\n  }\n  .academics-search input {\n    width: 100%;\n    border: 0;\n    outline: 0;\n    color: var(--student-color-text);\n    background: transparent;\n    font: inherit;\n  }\n  .academics-groups {\n    display: block;\n  }\n  .academics-group {\n    display: none;\n    padding: 12px 16px;\n    border-radius: 20px;\n  }\n  .academics-group.mobile-active {\n    display: block;\n  }\n  .academics-group > header {\n    display: none;\n  }\n  .academics-list {\n    gap: 0;\n  }\n  .academics-list > a {\n    min-height: 126px;\n    grid-template-columns: 142px minmax(0, 1fr) 54px;\n    gap: 14px;\n    padding: 10px 0;\n    border: 0;\n    border-bottom: 1px solid var(--student-color-divider);\n    border-radius: 0;\n    background: transparent;\n  }\n  .academics-list > a::after {\n    display: none;\n  }\n  .academics-list > a:last-child {\n    border-bottom: 0;\n  }\n  .academics-icon {\n    width: 134px;\n    height: 106px;\n  }\n  .academics-icon img {\n    width: 112px;\n    height: 112px;\n  }\n  .academics-list strong {\n    font-size: 20px;\n  }\n  .academics-list small {\n    font-size: 16px;\n  }\n  .academics-list i {\n    width: 50px;\n    height: 50px;\n    background: var(--student-color-primary-subtle);\n    font-size: 29px;\n  }\n  .academics-pages {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 28px;\n  }\n  .academics-pages i {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: var(--student-color-border);\n  }\n  .academics-pages i.active {\n    background: var(--student-color-primary);\n  }\n  .academics-swipe {\n    display: block;\n    margin: 0;\n    color: var(--student-color-text-secondary);\n    text-align: center;\n  }\n}\n@media (max-width: 470px) {\n  .academics-tabs button {\n    font-size: 13px;\n  }\n  .academics-tabs b {\n    min-width: 25px;\n    height: 25px;\n  }\n  .academics-list > a {\n    min-height: 106px;\n    grid-template-columns: 104px minmax(0, 1fr) 44px;\n  }\n  .academics-icon {\n    width: 96px;\n    height: 88px;\n  }\n  .academics-icon img {\n    width: 90px;\n    height: 90px;\n  }\n  .academics-list strong {\n    font-size: 17px;\n  }\n  .academics-list small {\n    font-size: 14px;\n  }\n  .academics-list i {\n    width: 42px;\n    height: 42px;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAcademicsDashboardComponent, { className: "StudentAcademicsDashboardComponent", filePath: "frontend/src/app/features/student/academics/student-academics-dashboard.component.ts", lineNumber: 31 }); })();

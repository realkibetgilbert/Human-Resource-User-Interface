import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { addListener } from 'process';
import { AdministratorComponent } from './administrator/administrator.component';
import { AttendancefieldcheckinComponent } from './administrator/attendancefieldcheckin/attendancefieldcheckin.component';
import { AttendanceholidaysComponent } from './administrator/attendanceholidays/attendanceholidays.component';
import { AttendancemanagementComponent } from './administrator/attendancemanagement/attendancemanagement.component';
import { AttendancetimeclocksummaryComponent } from './administrator/attendancetimeclocksummary/attendancetimeclocksummary.component';
import { AttendancetransactionsummaryComponent } from './administrator/attendancetransactionsummary/attendancetransactionsummary.component';
import { AttendanceworkdaysComponent } from './administrator/attendanceworkdays/attendanceworkdays.component';
import { DocumentworkflowapprovalworkflowComponent } from './administrator/documentworkflowapprovalworkflow/documentworkflowapprovalworkflow.component';
import { NewdocumentworkflowapprovalworkflowComponent } from './administrator/documentworkflowapprovalworkflow/newdocumentworkflowapprovalworkflow/newdocumentworkflowapprovalworkflow.component';
import { DocumentworkflowcustomapproverComponent } from './administrator/documentworkflowcustomapprover/documentworkflowcustomapprover.component';
import { NewdocumentworkflowcustomapproverComponent } from './administrator/documentworkflowcustomapprover/newdocumentworkflowcustomapprover/newdocumentworkflowcustomapprover.component';
import { DocumentworkflowmanagementComponent } from './administrator/documentworkflowmanagement/documentworkflowmanagement.component';
import { DocumentworkflowreviewComponent } from './administrator/documentworkflowreview/documentworkflowreview.component';
import { EmployeeManagementNewComponent } from './administrator/employee-management-new/employee-management-new.component';
import { EmployeeeducationComponent } from './administrator/employeeeducation/employeeeducation.component';
import { EmployeeemploymenttermsComponent } from './administrator/employeeemploymentterms/employeeemploymentterms.component';
import { EmployeeplacementComponent } from './administrator/employeeplacement/employeeplacement.component';
import { EmployeeexperienceComponent } from './administrator/employeeexperience/employeeexperience.component';
import { NewEmployeeExperienceComponent } from './administrator/employeeexperience/new-employee-experience/new-employee-experience.component';
import { EmployeehrroleComponent } from './administrator/employeehrrole/employeehrrole.component';
import { NewhrroleComponent } from './administrator/employeehrrole/newhrrole/newhrrole.component';
import { EmployeelegaldocumentComponent } from './administrator/employeelegaldocument/employeelegaldocument.component';
import { NewEmployeeLegalDocumentComponent } from './administrator/employeelegaldocument/new-employee-legal-document/new-employee-legal-document.component';
import { EmployeemanagementComponent } from './administrator/employeemanagement/employeemanagement.component';
import { EmployeetrainingComponent } from './administrator/employeetraining/employeetraining.component';
import { EmployeeTrainingNewComponent } from './administrator/employeetraining/employee-training-new/employee-training-new.component';
import { EmployeewebaccountComponent } from './administrator/employeewebaccount/employeewebaccount.component';
import { EmployerbankComponent } from './administrator/employerbank/employerbank.component';
import { NewbankComponent } from './administrator/employerbank/newbank/newbank.component';
import { EmployerbranchComponent } from './administrator/employerbranch/employerbranch.component';
import { NewbranchComponent } from './administrator/employerbranch/newbranch/newbranch.component';
import { EmployercourseComponent } from './administrator/employercourse/employercourse.component';
import { NewcourseComponent } from './administrator/employercourse/newcourse/newcourse.component';
import { EmployercustomapproverComponent } from './administrator/employercustomapprover/employercustomapprover.component';
import { NewcustomapproverComponent } from './administrator/employercustomapprover/newcustomapprover/newcustomapprover.component';
import { EmployerdepartmentComponent } from './administrator/employerdepartment/employerdepartment.component';
import { NewComponent } from './administrator/employerdepartment/new/new.component';
import { EmployerdocumentcategoryComponent } from './administrator/employerdocumentcategory/employerdocumentcategory.component';
import { NewdocumentcategoryComponent } from './administrator/employerdocumentcategory/newdocumentcategory/newdocumentcategory.component';
import { EmployerethnicityComponent } from './administrator/employerethnicity/employerethnicity.component';
import { NewethnicityComponent } from './administrator/employerethnicity/newethnicity/newethnicity.component';
import { EmployerfilestorageComponent } from './administrator/employerfilestorage/employerfilestorage.component';
import { EmployerinformationComponent } from './administrator/employerinformation/employerinformation.component';
import { DisplayComponent } from './administrator/employerjobposition/display/display.component';
import { EmployerjobpositionComponent } from './administrator/employerjobposition/employerjobposition.component';
import { EmployerlevelComponent } from './administrator/employerlevel/employerlevel.component';
import { NewlevelComponent } from './administrator/employerlevel/newlevel/newlevel.component';
import { EmployerreligionComponent } from './administrator/employerreligion/employerreligion.component';
import { NewreligionComponent } from './administrator/employerreligion/newreligion/newreligion.component';
import { EmployersettingComponent } from './administrator/employersetting/employersetting.component';
import { EmployertrainerComponent } from './administrator/employertrainer/employertrainer.component';
import { NewtrainerComponent } from './administrator/employertrainer/newtrainer/newtrainer.component';
import { ExpenseclaimapprovalComponent } from './administrator/expenseclaimapproval/expenseclaimapproval.component';
import { ExpenseclaimcategoryComponent } from './administrator/expenseclaimcategory/expenseclaimcategory.component';
import { NewexpenseclaimcategoryComponent } from './administrator/expenseclaimcategory/newexpenseclaimcategory/newexpenseclaimcategory.component';
import { ExpenseclaimcustomapproverComponent } from './administrator/expenseclaimcustomapprover/expenseclaimcustomapprover.component';
import { NewexpenseclaimcustomapproverComponent } from './administrator/expenseclaimcustomapprover/newexpenseclaimcustomapprover/newexpenseclaimcustomapprover.component';
import { ExpenseclaimmanagementComponent } from './administrator/expenseclaimmanagement/expenseclaimmanagement.component';
import { ExpenseclaimreviewComponent } from './administrator/expenseclaimreview/expenseclaimreview.component';
import { ExpenseclaimtransactionComponent } from './administrator/expenseclaimtransaction/expenseclaimtransaction.component';
import { ExpenseclaimtypeComponent } from './administrator/expenseclaimtype/expenseclaimtype.component';
import { NewexpenseclaimtypeComponent } from './administrator/expenseclaimtype/newexpenseclaimtype/newexpenseclaimtype.component';
import { HomeComponent } from './administrator/home/home.component';
import { LeaveApprovalWorkflowComponent } from './administrator/leave-approval-workflow/leave-approval-workflow.component';
import { LeaveCustomApproverComponent } from './administrator/leave-custom-approver/leave-custom-approver.component';
import { NewleavecustomapproverComponent } from './administrator/leave-custom-approver/newleavecustomapprover/newleavecustomapprover.component';
import { LeaveEarningPolicyComponent } from './administrator/leave-earning-policy/leave-earning-policy.component';
import { NewleaveearningpolicyComponent } from './administrator/leave-earning-policy/newleaveearningpolicy/newleaveearningpolicy.component';
import { LeaveEntitlementSummaryComponent } from './administrator/leave-entitlement-summary/leave-entitlement-summary.component';
import { LeaveHolidaysComponent } from './administrator/leave-holidays/leave-holidays.component';
import { LeaveTransactionSummaryComponent } from './administrator/leave-transaction-summary/leave-transaction-summary.component';
import { LeaveTypeComponent } from './administrator/leave-type/leave-type.component';
import { NewleavetypeComponent } from './administrator/leave-type/newleavetype/newleavetype.component';
import { LeaveWorkDaysComponent } from './administrator/leave-work-days/leave-work-days.component';
import { LeavemanagementComponent } from './administrator/leavemanagement/leavemanagement.component';
import { ModuleaccessComponent } from './administrator/moduleaccess/moduleaccess.component';
import { MyaccountchangeemailComponent } from './administrator/myaccountchangeemail/myaccountchangeemail.component';
import { MyaccountchangepasswordComponent } from './administrator/myaccountchangepassword/myaccountchangepassword.component';
import { PayrollannualsalaryadjustmentComponent } from './administrator/payrollannualsalaryadjustment/payrollannualsalaryadjustment.component';
import { NewpayrollbonusComponent } from './administrator/payrollbonus/newpayrollbonus/newpayrollbonus.component';
import { PayrollbonusComponent } from './administrator/payrollbonus/payrollbonus.component';
import { PayrollhistoryComponent } from './administrator/payrollhistory/payrollhistory.component';
import { PayrollprocessComponent } from './administrator/payrollprocess/payrollprocess.component';
import { PayrollsalaryadjustmentComponent } from './administrator/payrollsalaryadjustment/payrollsalaryadjustment.component';
import { PayrollstatutorycontributionComponent } from './administrator/payrollstatutorycontribution/payrollstatutorycontribution.component';
import { NewpayrollvariabledeductionComponent } from './administrator/payrollvariablededuction/newpayrollvariablededuction/newpayrollvariablededuction.component';
import { PayrollvariabledeductionComponent } from './administrator/payrollvariablededuction/payrollvariablededuction.component';
import { NewpayrollvariablepayComponent } from './administrator/payrollvariablepay/newpayrollvariablepay/newpayrollvariablepay.component';
import { PayrollvariablepayComponent } from './administrator/payrollvariablepay/payrollvariablepay.component';
import { NewstatutorycontributionComponent } from './administrator/statutorycontribution/newstatutorycontribution/newstatutorycontribution.component';
import { NewteamannouncementComponent } from './administrator/teamannouncement/newteamannouncement/newteamannouncement.component';
import { TeamannouncementComponent } from './administrator/teamannouncement/teamannouncement.component';
import { TeamdiscussionComponent } from './administrator/teamdiscussion/teamdiscussion.component';
import { NewteamdocumentsharingComponent } from './administrator/teamdocumentsharing/newteamdocumentsharing/newteamdocumentsharing.component';
import { TeamdocumentsharingComponent } from './administrator/teamdocumentsharing/teamdocumentsharing.component';
import { AdministratorforgotpasswordComponent } from './administratorforgotpassword/administratorforgotpassword.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveapplicationComponent } from './employee/leaveapplication/leaveapplication.component';
import { LeaveplannerComponent } from './employee/leaveplanner/leaveplanner.component';
import { EmployeeforgotpasswordComponent } from './employeeforgotpassword/employeeforgotpassword.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { SignupComponent } from './signup/signup.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UserguideComponent } from './userguide/userguide.component';
import { NewteamdiscussionComponent } from './admnistrator/teamdiscussion/newteamdiscussion/newteamdiscussion.component';
import { NewEmployeeEducationComponent } from './administrator/employeeeducation/new-employee-education/new-employee-education.component';
import { EmployeePlacementNewComponent } from './administrator/employeeplacement/employee-placement-new/employee-placement-new.component';
import { EmployeeEmployementTermsNewComponent } from './administrator/employeeemploymentterms/employee-employement-terms-new/employee-employement-terms-new.component';
import { EmployeeWebAccountNewComponent } from './administrator/employeewebaccount/employee-web-account-new/employee-web-account-new.component';
import { NewEmployerInformationComponent } from './administrator/employerinformation/new-employer-information/new-employer-information.component';
import { MemberreportComponent } from './reports/memberreport/memberreport.component';

const routes: Routes = [
  //{path:'',redirectTo:'/login',pathMatch:'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'reports',
    component: MemberreportComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'userguide', component: UserguideComponent },
  {
    path: 'administrator',
    component: AdministratorComponent,
    children: [
      //administrator home routing

      { path: 'home', component: HomeComponent },

      //administrator expense claim routing
      {
        path: 'expenseclaim/management',
        component: ExpenseclaimmanagementComponent,
      },
      { path: 'expenseclaim/review', component: ExpenseclaimreviewComponent },
      {
        path: 'expenseclaim/transactionSummary',
        component: ExpenseclaimtransactionComponent,
      },
      {
        path: 'expenseclaim/category',
        component: ExpenseclaimcategoryComponent,
      },
      {
        path: 'expenseclaim/category/new',
        component: NewexpenseclaimcategoryComponent,
      },
      { path: 'expenseclaim/type', component: ExpenseclaimtypeComponent },
      {
        path: 'expenseclaim/type/new',
        component: NewexpenseclaimtypeComponent,
      },
      {
        path: 'expenseclaim/approvalWorkflow',
        component: ExpenseclaimapprovalComponent,
      },
      {
        path: 'expenseclaim/customApprover',
        component: ExpenseclaimcustomapproverComponent,
      },
      {
        path: 'expenseclaim/customApprover/new',
        component: NewexpenseclaimcustomapproverComponent,
      },
      //administrator attendance routing
      {
        path: 'attendance/management',
        component: AttendancemanagementComponent,
      },
      {
        path: 'attendance/fieldCheckIn',
        component: AttendancefieldcheckinComponent,
      },
      {
        path: 'attendance/transactionSummary',
        component: AttendancetransactionsummaryComponent,
      },
      {
        path: 'attendance/timeClockSummary',
        component: AttendancetimeclocksummaryComponent,
      },
      { path: 'attendance/workdays', component: AttendanceworkdaysComponent },
      { path: 'attendance/holidays', component: AttendanceholidaysComponent },

      // administrator module access routing
      { path: 'moduleaccess', component: ModuleaccessComponent },

      //administrator team routing
      { path: 'team/discussion', component: TeamdiscussionComponent },
      { path: 'team/discussion/new', component: NewteamdiscussionComponent },
      { path: 'team/documentsharing', component: TeamdocumentsharingComponent },
      {
        path: 'team/documentsharing/new',
        component: NewteamdocumentsharingComponent,
      },
      { path: 'team/announcement', component: TeamannouncementComponent },
      {
        path: 'team/announcement/new',
        component: NewteamannouncementComponent,
      },

      //administrator payroll routing
      {
        path: 'payroll/salaryAdjustment',
        component: PayrollsalaryadjustmentComponent,
      },
      { path: 'payroll/process', component: PayrollprocessComponent },
      { path: 'payroll/history', component: PayrollhistoryComponent },
      {
        path: 'payroll/annualSalaryStatement',
        component: PayrollannualsalaryadjustmentComponent,
      },
      { path: 'payroll/variablePay', component: PayrollvariablepayComponent },
      {
        path: 'payroll/variablePay/new',
        component: NewpayrollvariablepayComponent,
      },
      {
        path: 'payroll/variableDeduction',
        component: PayrollvariabledeductionComponent,
      },
      {
        path: 'payroll/variableDeduction/new',
        component: NewpayrollvariabledeductionComponent,
      },
      { path: 'payroll/bonus', component: PayrollbonusComponent },

      { path: 'payroll/bonus/new', component: NewpayrollbonusComponent },
      {
        path: 'payroll/statutoryContribution',
        component: PayrollstatutorycontributionComponent,
      },
      {
        path: 'payroll/statutoryContribution/new',
        component: NewstatutorycontributionComponent,
      },
      //administrator my account routing
      {
        path: 'myaccount/changepassword',
        component: MyaccountchangepasswordComponent,
      },
      {
        path: 'myaccount/changeemail',
        component: MyaccountchangeemailComponent,
      },

      //administrator document workflow routing
      {
        path: 'documentworkflow/management',
        component: DocumentworkflowmanagementComponent,
      },
      {
        path: 'documentworkflow/documentreview',
        component: DocumentworkflowreviewComponent,
      },
      {
        path: 'documentworkflow/approvalWorkflow',
        component: DocumentworkflowapprovalworkflowComponent,
      },
      {
        path: 'documentworkflow/approvalWorkflow/new',
        component: NewdocumentworkflowapprovalworkflowComponent,
      },
      {
        path: 'documentworkflow/customApprover',
        component: DocumentworkflowcustomapproverComponent,
      },
      {
        path: 'documentworkflow/customApprover/new',
        component: NewdocumentworkflowcustomapproverComponent,
      },

      //administrator employee routing
      {
        path: 'employee/employementterms',
        component: EmployeeemploymenttermsComponent,
      },

      {
        path: 'employee/employementterms/new',
        children: [
          { path: '', component: EmployeeEmployementTermsNewComponent },
          { path: 'edit/:id', component: EmployeeEmployementTermsNewComponent },
        ],
      },

      { path: 'employee/placement', component: EmployeeplacementComponent },

      {
        path: 'employee/placement/new',
        children: [
          { path: '', component: EmployeePlacementNewComponent },
          { path: 'edit/:id', component: EmployeePlacementNewComponent },
        ],
      },

      { path: 'employee/management', component: EmployeemanagementComponent },

      {
        path: 'employee/management/new',
        children: [
          { path: '', component: EmployeeManagementNewComponent },
          { path: 'edit/:id', component: EmployeeManagementNewComponent },
        ],
      },

      { path: 'employee/education', component: EmployeeeducationComponent },
      {
        path: 'employee/education/new',
        component: NewEmployeeEducationComponent,
      },
      { path: 'employee/experience', component: EmployeeexperienceComponent },
      {
        path: 'employee/experience/new',
        component: NewEmployeeExperienceComponent,
      },
      { path: 'employee/training', component: EmployeetrainingComponent },
      {
        path: 'employee/training/new',
        component: EmployeeTrainingNewComponent,
      },
      {
        path: 'employee/legalDocument',
        component: EmployeelegaldocumentComponent,
      },
      {
        path: 'employee/legalDocument/new',
        component: NewEmployeeLegalDocumentComponent,
      },
      { path: 'employee/webAccount', component: EmployeewebaccountComponent },
      {
        path: 'employee/webAccount/new',
        component: EmployeeWebAccountNewComponent,
      },

      { path: 'employee/HRrole', component: EmployeehrroleComponent },

      {
        path: 'employee/HRrole/new',
        children: [
          { path: '', component: NewhrroleComponent },
          { path: 'edit/:id', component: NewhrroleComponent },
        ],
      },

      //administrator leave routing
      { path: 'leave/management', component: LeavemanagementComponent },
      { path: 'leave/planner', component: LeaveplannerComponent },
      {
        path: 'leave/transactionSummary',
        component: LeaveTransactionSummaryComponent,
      },
      {
        path: 'leave/entitlementSummary',
        component: LeaveEntitlementSummaryComponent,
      },
      { path: 'leave/type', component: LeaveTypeComponent },
      { path: 'leave/type/new', component: NewleavetypeComponent },

      { path: 'leave/earningPolicy', component: LeaveEarningPolicyComponent },
      {
        path: 'leave/earningPolicy/new',
        component: NewleaveearningpolicyComponent,
      },
      {
        path: 'leave/approvalWorkflow',
        component: LeaveApprovalWorkflowComponent,
      },
      { path: 'leave/customApprover', component: LeaveCustomApproverComponent },
      {
        path: 'leave/customApprover/new',
        component: NewleavecustomapproverComponent,
      },
      { path: 'leave/workdays', component: LeaveWorkDaysComponent },
      { path: 'leave/holidays', component: LeaveHolidaysComponent },
      //administrator employer routing

      { path: 'employer/jobposition', component: EmployerjobpositionComponent },
      {
        path: 'employer/jobposition/display',
        children: [
          { path: '', component: DisplayComponent },
          { path: 'edit/:id', component: DisplayComponent },
        ],
      },

      { path: 'employer/information', component: EmployerinformationComponent },
      {
        path: 'employer/information/new',
        children: [
          { path: '', component: NewEmployerInformationComponent },
          { path: 'edit/:id', component: NewEmployerInformationComponent },
        ],
      },

      { path: 'employer/department', component: EmployerdepartmentComponent },
      {
        path: 'employer/department/new',
        children: [
          { path: '', component: NewComponent },
          { path: 'edit/:id', component: NewComponent },
        ],
      },
      { path: 'employer/branch', component: EmployerbranchComponent },
      {
        path: 'employer/branch/new',
        children: [
          { path: '', component: NewbranchComponent },
          { path: 'edit/:id', component: NewbranchComponent },
        ],
      },
      { path: 'employer/bank', component: EmployerbankComponent },

      {
        path: 'employer/bank/new',
        children: [
          { path: '', component: NewbankComponent },
          { path: 'edit/:id', component: NewbankComponent },
        ],
      },
      { path: 'employer/level', component: EmployerlevelComponent },
      {
        path: 'employer/level/new',
        children: [
          { path: '', component: NewlevelComponent },
          { path: 'edit/:id', component: NewlevelComponent },
        ],
      },
      { path: 'employer/course', component: EmployercourseComponent },
      {
        path: 'employer/course/new',
        children: [
          { path: '', component: NewcourseComponent },
          { path: 'edit/:id', component: NewcourseComponent },
        ],
      },

      { path: 'employer/trainer', component: EmployertrainerComponent },
      {
        path: 'employer/trainer/new',
        children: [
          { path: '', component: NewtrainerComponent },
          { path: 'edit/:id', component: NewtrainerComponent },
        ],
      },
      { path: 'employer/ethnicity', component: EmployerethnicityComponent },
      {
        path: 'employer/ethnicity/new',
        children: [
          { path: '', component: NewethnicityComponent },
          { path: 'edit/:id', component: NewethnicityComponent },
        ],
      },

      { path: 'employer/religion', component: EmployerreligionComponent },
      {
        path: 'employer/religion/new',
        children: [
          { path: '', component: NewreligionComponent },
          { path: 'edit/:id', component: NewreligionComponent },
        ],
      },
      {
        path: 'employer/documentCategory',
        component: EmployerdocumentcategoryComponent,
      },
      {
        path: 'employer/documentCategory/new',
        children: [
          { path: '', component: NewdocumentcategoryComponent },
          { path: 'edit/:id', component: NewdocumentcategoryComponent },
        ],
      },

      {
        path: 'empoyer/customApprover',
        component: EmployercustomapproverComponent,
      },
      {
        path: 'empoyer/customApprover/new',
        component: NewcustomapproverComponent,
      },

      { path: 'employer/fileStorage', component: EmployerfilestorageComponent },
      { path: 'employer/setting', component: EmployersettingComponent },
    ],
  },

  {
    path: 'administrator/forgotpassword',
    component: AdministratorforgotpasswordComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      { path: 'home', component: EmployeeHomeComponent },
      { path: 'leave/application', component: LeaveapplicationComponent },
      { path: 'leave/planner', component: LeaveplannerComponent },
    ],
  },
  {
    path: 'employee/forgotpassword',
    component: EmployeeforgotpasswordComponent,
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UserguideComponent } from './userguide/userguide.component';
import { SharedService } from './shared.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';

import { AdministratorComponent } from './administrator/administrator.component';
import { EmployeeforgotpasswordComponent } from './employeeforgotpassword/employeeforgotpassword.component';
import { AdministratorforgotpasswordComponent } from './administratorforgotpassword/administratorforgotpassword.component';
import { LeaveapplicationComponent } from './employee/leaveapplication/leaveapplication.component';
import { EmployerjobpositionComponent } from './administrator/employerjobposition/employerjobposition.component';
import { DisplayComponent } from './administrator/employerjobposition/display/display.component';
import { LeaveplannerComponent } from './employee/leaveplanner/leaveplanner.component';
import { EmployerinformationComponent } from './administrator/employerinformation/employerinformation.component';
import { NewEmployerInformationComponent } from './administrator/employerinformation/new-employer-information/new-employer-information.component';
import { EmployerdepartmentComponent } from './administrator/employerdepartment/employerdepartment.component';
import { EmployerbranchComponent } from './administrator/employerbranch/employerbranch.component';
import { EmployerbankComponent } from './administrator/employerbank/employerbank.component';
import { EmployerlevelComponent } from './administrator/employerlevel/employerlevel.component';
import { EmployercourseComponent } from './administrator/employercourse/employercourse.component';
import { EmployertrainerComponent } from './administrator/employertrainer/employertrainer.component';
import { EmployerethnicityComponent } from './administrator/employerethnicity/employerethnicity.component';
import { EmployerreligionComponent } from './administrator/employerreligion/employerreligion.component';
import { EmployerdocumentcategoryComponent } from './administrator/employerdocumentcategory/employerdocumentcategory.component';
import { EmployercustomapproverComponent } from './administrator/employercustomapprover/employercustomapprover.component';
import { EmployerfilestorageComponent } from './administrator/employerfilestorage/employerfilestorage.component';
import { EmployersettingComponent } from './administrator/employersetting/employersetting.component';
import { EmployeemanagementComponent } from './administrator/employeemanagement/employeemanagement.component';
import { EmployeeeducationComponent } from './administrator/employeeeducation/employeeeducation.component';
import { NewEmployeeEducationComponent } from './administrator/employeeeducation/new-employee-education/new-employee-education.component';
import { EmployeeexperienceComponent } from './administrator/employeeexperience/employeeexperience.component';
import { NewEmployeeExperienceComponent } from './administrator/employeeexperience/new-employee-experience/new-employee-experience.component';
import { EmployeetrainingComponent } from './administrator/employeetraining/employeetraining.component';
import { EmployeeTrainingNewComponent } from './administrator/employeetraining/employee-training-new/employee-training-new.component';
import { EmployeelegaldocumentComponent } from './administrator/employeelegaldocument/employeelegaldocument.component';
import { NewEmployeeLegalDocumentComponent } from './administrator/employeelegaldocument/new-employee-legal-document/new-employee-legal-document.component';
import { EmployeewebaccountComponent } from './administrator/employeewebaccount/employeewebaccount.component';
import { EmployeeWebAccountNewComponent } from './administrator/employeewebaccount/employee-web-account-new/employee-web-account-new.component';
import { EmployeehrroleComponent } from './administrator/employeehrrole/employeehrrole.component';
import { EmployeeplacementComponent } from './administrator/employeeplacement/employeeplacement.component';
import { EmployeePlacementNewComponent } from './administrator/employeeplacement/employee-placement-new/employee-placement-new.component';

import { EmployeeemploymenttermsComponent } from './administrator/employeeemploymentterms/employeeemploymentterms.component';
import { EmployeeEmployementTermsNewComponent } from './administrator/employeeemploymentterms/employee-employement-terms-new/employee-employement-terms-new.component';

import { LeavemanagementComponent } from './administrator/leavemanagement/leavemanagement.component';
import { LeaveTransactionSummaryComponent } from './administrator/leave-transaction-summary/leave-transaction-summary.component';
import { LeaveEntitlementSummaryComponent } from './administrator/leave-entitlement-summary/leave-entitlement-summary.component';
import { LeaveTypeComponent } from './administrator/leave-type/leave-type.component';
import { LeaveEarningPolicyComponent } from './administrator/leave-earning-policy/leave-earning-policy.component';
import { LeaveApprovalWorkflowComponent } from './administrator/leave-approval-workflow/leave-approval-workflow.component';
import { LeaveCustomApproverComponent } from './administrator/leave-custom-approver/leave-custom-approver.component';
import { LeaveWorkDaysComponent } from './administrator/leave-work-days/leave-work-days.component';
import { LeaveHolidaysComponent } from './administrator/leave-holidays/leave-holidays.component';
import { TeamdiscussionComponent } from './administrator/teamdiscussion/teamdiscussion.component';
import { TeamdocumentsharingComponent } from './administrator/teamdocumentsharing/teamdocumentsharing.component';

import { TeamannouncementComponent } from './administrator/teamannouncement/teamannouncement.component';
import { PayrollsalaryadjustmentComponent } from './administrator/payrollsalaryadjustment/payrollsalaryadjustment.component';
import { PayrollprocessComponent } from './administrator/payrollprocess/payrollprocess.component';
import { PayrollhistoryComponent } from './administrator/payrollhistory/payrollhistory.component';
import { PayrollannualsalaryadjustmentComponent } from './administrator/payrollannualsalaryadjustment/payrollannualsalaryadjustment.component';
import { PayrollvariablepayComponent } from './administrator/payrollvariablepay/payrollvariablepay.component';
import { PayrollvariabledeductionComponent } from './administrator/payrollvariablededuction/payrollvariablededuction.component';
import { PayrollbonusComponent } from './administrator/payrollbonus/payrollbonus.component';
import { PayrollstatutorycontributionComponent } from './administrator/payrollstatutorycontribution/payrollstatutorycontribution.component';
import { DocumentworkflowmanagementComponent } from './administrator/documentworkflowmanagement/documentworkflowmanagement.component';
import { DocumentworkflowreviewComponent } from './administrator/documentworkflowreview/documentworkflowreview.component';
import { DocumentworkflowapprovalworkflowComponent } from './administrator/documentworkflowapprovalworkflow/documentworkflowapprovalworkflow.component';
import { DocumentworkflowcustomapproverComponent } from './administrator/documentworkflowcustomapprover/documentworkflowcustomapprover.component';
import { MyaccountchangepasswordComponent } from './administrator/myaccountchangepassword/myaccountchangepassword.component';
import { MyaccountchangeemailComponent } from './administrator/myaccountchangeemail/myaccountchangeemail.component';
import { ModuleaccessComponent } from './administrator/moduleaccess/moduleaccess.component';
import { AttendancemanagementComponent } from './administrator/attendancemanagement/attendancemanagement.component';
import { AttendancefieldcheckinComponent } from './administrator/attendancefieldcheckin/attendancefieldcheckin.component';
import { AttendancetransactionsummaryComponent } from './administrator/attendancetransactionsummary/attendancetransactionsummary.component';
import { AttendancetimeclocksummaryComponent } from './administrator/attendancetimeclocksummary/attendancetimeclocksummary.component';
import { AttendanceworkdaysComponent } from './administrator/attendanceworkdays/attendanceworkdays.component';
import { AttendanceholidaysComponent } from './administrator/attendanceholidays/attendanceholidays.component';
import { ExpenseclaimmanagementComponent } from './administrator/expenseclaimmanagement/expenseclaimmanagement.component';
import { ExpenseclaimreviewComponent } from './administrator/expenseclaimreview/expenseclaimreview.component';
import { ExpenseclaimtransactionComponent } from './administrator/expenseclaimtransaction/expenseclaimtransaction.component';
import { ExpenseclaimcategoryComponent } from './administrator/expenseclaimcategory/expenseclaimcategory.component';
import { ExpenseclaimtypeComponent } from './administrator/expenseclaimtype/expenseclaimtype.component';
import { ExpenseclaimapprovalComponent } from './administrator/expenseclaimapproval/expenseclaimapproval.component';
import { ExpenseclaimcustomapproverComponent } from './administrator/expenseclaimcustomapprover/expenseclaimcustomapprover.component';
import { HomeComponent } from './administrator/home/home.component';
import { NewComponent } from './administrator/employerdepartment/new/new.component';
import { EmployeeManagementNewComponent } from './administrator/employee-management-new/employee-management-new.component';
import { NewhrroleComponent } from './administrator/employeehrrole/newhrrole/newhrrole.component';
import { NewbranchComponent } from './administrator/employerbranch/newbranch/newbranch.component';
import { NewbankComponent } from './administrator/employerbank/newbank/newbank.component';
import { NewlevelComponent } from './administrator/employerlevel/newlevel/newlevel.component';
import { NewcourseComponent } from './administrator/employercourse/newcourse/newcourse.component';
import { NewtrainerComponent } from './administrator/employertrainer/newtrainer/newtrainer.component';
import { NewethnicityComponent } from './administrator/employerethnicity/newethnicity/newethnicity.component';
import { NewreligionComponent } from './administrator/employerreligion/newreligion/newreligion.component';
import { NewdocumentcategoryComponent } from './administrator/employerdocumentcategory/newdocumentcategory/newdocumentcategory.component';
import { NewcustomapproverComponent } from './administrator/employercustomapprover/newcustomapprover/newcustomapprover.component';
import { NewleavetypeComponent } from './administrator/leave-type/newleavetype/newleavetype.component';
import { NewleavecustomapproverComponent } from './administrator/leave-custom-approver/newleavecustomapprover/newleavecustomapprover.component';
import { NewteamdocumentsharingComponent } from './administrator/teamdocumentsharing/newteamdocumentsharing/newteamdocumentsharing.component';
//import { NewteamdiscussionComponent } from './administrator/teamdiscussion/newteamdiscussion/newteamdiscussion.component';
import { NewteamannouncementComponent } from './administrator/teamannouncement/newteamannouncement/newteamannouncement.component';
//import { NewteamdiscussionComponent } from './administrator/teamdiscussion/newteamdiscussion/newteamdiscussion.component';
import { NewexpenseclaimcategoryComponent } from './administrator/expenseclaimcategory/newexpenseclaimcategory/newexpenseclaimcategory.component';
import { NewexpenseclaimtypeComponent } from './administrator/expenseclaimtype/newexpenseclaimtype/newexpenseclaimtype.component';
import { NewexpenseclaimcustomapproverComponent } from './administrator/expenseclaimcustomapprover/newexpenseclaimcustomapprover/newexpenseclaimcustomapprover.component';
import { NewdocumentworkflowapprovalworkflowComponent } from './administrator/documentworkflowapprovalworkflow/newdocumentworkflowapprovalworkflow/newdocumentworkflowapprovalworkflow.component';
import { NewdocumentworkflowcustomapproverComponent } from './administrator/documentworkflowcustomapprover/newdocumentworkflowcustomapprover/newdocumentworkflowcustomapprover.component';
import { NewpayrollvariablepayComponent } from './administrator/payrollvariablepay/newpayrollvariablepay/newpayrollvariablepay.component';
import { NewpayrollvariabledeductionComponent } from './administrator/payrollvariablededuction/newpayrollvariablededuction/newpayrollvariablededuction.component';
import { NewpayrollbonusComponent } from './administrator/payrollbonus/newpayrollbonus/newpayrollbonus.component';
import { NewstatutorycontributionComponent } from './administrator/statutorycontribution/newstatutorycontribution/newstatutorycontribution.component';
import { NewleaveearningpolicyComponent } from './administrator/leave-earning-policy/newleaveearningpolicy/newleaveearningpolicy.component';
import { NewteamdiscussionComponent } from './admnistrator/teamdiscussion/newteamdiscussion/newteamdiscussion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TestimonialComponent,
    UserguideComponent,
    PagenotfoundComponent,
    EmployeeComponent,
    EmployeeHomeComponent,
    AdministratorComponent,
    EmployeeforgotpasswordComponent,
    AdministratorforgotpasswordComponent,
    LeaveapplicationComponent,
    EmployerjobpositionComponent,
    DisplayComponent,
    LeaveplannerComponent,
    EmployerinformationComponent,

    NewEmployerInformationComponent,
    EmployerdepartmentComponent,
    EmployerbranchComponent,
    EmployerbankComponent,
    EmployerlevelComponent,
    EmployercourseComponent,
    EmployertrainerComponent,
    EmployerethnicityComponent,
    EmployerreligionComponent,
    EmployerdocumentcategoryComponent,
    EmployercustomapproverComponent,
    EmployerfilestorageComponent,
    EmployersettingComponent,
    EmployeemanagementComponent,

    EmployeeeducationComponent,
    NewEmployeeEducationComponent,

    EmployeeemploymenttermsComponent,
    EmployeeEmployementTermsNewComponent,

    EmployeeplacementComponent,
    EmployeePlacementNewComponent,

    EmployeeexperienceComponent,
    NewEmployeeExperienceComponent,
    EmployeetrainingComponent,
    EmployeeTrainingNewComponent,
    EmployeelegaldocumentComponent,
    NewEmployeeLegalDocumentComponent,
    EmployeewebaccountComponent,
    EmployeeWebAccountNewComponent,
    EmployeehrroleComponent,
    LeavemanagementComponent,
    LeaveTransactionSummaryComponent,
    LeaveEntitlementSummaryComponent,
    LeaveTypeComponent,
    LeaveEarningPolicyComponent,
    LeaveApprovalWorkflowComponent,
    LeaveCustomApproverComponent,
    LeaveWorkDaysComponent,
    LeaveHolidaysComponent,
    TeamdiscussionComponent,
    TeamdocumentsharingComponent,
    TeamannouncementComponent,
    PayrollsalaryadjustmentComponent,
    PayrollprocessComponent,
    PayrollhistoryComponent,
    PayrollannualsalaryadjustmentComponent,
    PayrollvariablepayComponent,
    PayrollvariabledeductionComponent,
    PayrollbonusComponent,
    PayrollstatutorycontributionComponent,
    DocumentworkflowmanagementComponent,
    DocumentworkflowreviewComponent,
    DocumentworkflowapprovalworkflowComponent,
    DocumentworkflowcustomapproverComponent,
    MyaccountchangepasswordComponent,
    MyaccountchangeemailComponent,
    ModuleaccessComponent,
    AttendancemanagementComponent,
    AttendancefieldcheckinComponent,
    AttendancetransactionsummaryComponent,
    AttendancetimeclocksummaryComponent,
    AttendanceworkdaysComponent,
    AttendanceholidaysComponent,
    ExpenseclaimmanagementComponent,
    ExpenseclaimreviewComponent,
    ExpenseclaimtransactionComponent,
    ExpenseclaimcategoryComponent,
    ExpenseclaimtypeComponent,
    ExpenseclaimapprovalComponent,
    ExpenseclaimcustomapproverComponent,
    HomeComponent,
    NewComponent,
    EmployeeManagementNewComponent,
    NewhrroleComponent,
    NewbranchComponent,
    NewbankComponent,
    NewlevelComponent,
    NewcourseComponent,
    NewtrainerComponent,
    NewethnicityComponent,
    NewreligionComponent,
    NewdocumentcategoryComponent,
    NewcustomapproverComponent,
    NewleavetypeComponent,
    NewleavecustomapproverComponent,
    NewteamdocumentsharingComponent,
    NewteamannouncementComponent,
    NewexpenseclaimcategoryComponent,
    NewexpenseclaimtypeComponent,
    NewexpenseclaimcustomapproverComponent,
    NewdocumentworkflowapprovalworkflowComponent,
    NewdocumentworkflowcustomapproverComponent,
    NewpayrollvariablepayComponent,
    NewpayrollvariabledeductionComponent,
    NewpayrollbonusComponent,
    NewstatutorycontributionComponent,
    NewleaveearningpolicyComponent,
    NewteamdiscussionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}

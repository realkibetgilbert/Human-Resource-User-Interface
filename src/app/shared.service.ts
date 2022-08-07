import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  production: boolean;
  constructor(public http: HttpClient) {}
  //Methods for consuming JobPositions Api from asp.net  post put delete getall and get one
  AddJobPosition(Code, Title, Active, Responsibility, Delete) {
    return this.http.get(
      environment.url +
        '/AddJobPosition?Code=' +
        Code +
        '&&Title=' +
        Title +
        '&&Active=' +
        Active +
        '&&Responsibility=' +
        Responsibility +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  UpdateJobPosition(
    JobPositionId,
    Code,
    Title,
    Active,
    Responsibility,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/UpdateJobPosition?JobPositionId=' +
        JobPositionId +
        '&&Code=' +
        Code +
        '&&Title=' +
        Title +
        '&&Active=' +
        Active +
        '&&Responsibility=' +
        Responsibility +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  GetAllJobPosition() {
    return this.http.get('http://localhost:49986/Api/GetAllJobPosition');
  }

  DeleteJobPosition(id: number) {
    return this.http.get(environment.url + '/DeleteJobPosition?id=' + id + '');
  }

  GetJobPosition(id: number): any {
    return this.http.get(environment.url + '/GetJobPosition?id=' + id + '');
  }

  //New employee Api methods  posting getting editing and deleting
  AddNewEmployee(
    Id,
    Name,
    Gender,
    Position,
    Department,
    DateJoined,
    Status,
    Modified,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/AddNewEmployee?Id=' +
        Id +
        '&&Name=' +
        Name +
        '&&Gender=' +
        Gender +
        '&&Position=' +
        Position +
        '&&Department=' +
        Department +
        '&&DateJoined=' +
        DateJoined +
        '&&Status=' +
        Status +
        '&&Modified=' +
        Modified +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  UpdateNewEmployee(
    NewEmployeeId,
    Id,
    Name,
    Gender,
    Position,
    Department,
    DateJoined,
    Status,
    Modified,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/UpdateNewEmployee?NewEmployeeId=' +
        NewEmployeeId +
        '&&Id=' +
        Id +
        '&&Name=' +
        Name +
        '&&Gender=' +
        Gender +
        '&&Position=' +
        Position +
        '&&Department=' +
        Department +
        '&&DateJoined=' +
        DateJoined +
        '&&Status=' +
        Status +
        '&&Modified=' +
        Modified +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  GetAllNewEmployee() {
    return this.http.get('http://localhost:49986/Api/GetAllNewEmployee');
  }

  DeleteNewEmployee(id: number): Observable<Object> {
    return this.http.get(environment.url + '/DeleteNewEmployee?id=' + id + '');
  }

  GetNewEmployee(id: number): any {
    return this.http.get(environment.url + '/GetNewEmployee?id=' + id + '');
  }
  //Hr Role web APIS
  AddHrRole(Code, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddHrRole?Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  UpdateHrRole(HrRoleId, Code, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateHrRole?HrRoleId=' +
        HrRoleId +
        'Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  GetAllHrRole() {
    return this.http.get('http://localhost:53099/Api/GetAllHrRole');
  }

  DeleteHrRole(id: number): Observable<Object> {
    return this.http.get(environment.url + '/DeleteHrRole?id=' + id + '');
  }

  GetHrRole(id: number): any {
    return this.http.get(environment.url + '/GetHrRole?id=' + id + '');
  }
  //Leave type APIS
  AddLeaveType(
    Code,
    Description,
    Active,
    LeaveUnit,
    DayCount,
    PaidLeave,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/AddLeaveType?Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&LeaveUnit=' +
        LeaveUnit +
        '&&DayCount=' +
        DayCount +
        '&&PaidLeave=' +
        PaidLeave +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateLeaveType(
    LeaveTypeId,
    Code,
    Description,
    Active,
    LeaveUnit,
    DayCount,
    PaidLeave,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/UpdateLeaveType?LeaveTypeId=' +
        LeaveTypeId +
        'Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        'LeaveUnit=' +
        LeaveUnit +
        'DayCount=' +
        DayCount +
        'PaidLeave=' +
        PaidLeave +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  GetAllLeaveType() {
    return this.http.get('http://localhost:53099/Api/GetAllLeaveType');
  }
  DeleteLeaveType(id: number): Observable<Object> {
    return this.http.get(environment.url + '/DeleteLeaveType?id=' + id + '');
  }

  GetLeaveType(id: number): any {
    return this.http.get(environment.url + '/GetLeaveType?id=' + id + '');
  }

  //employee placement Apis
  AddEmployeePlacement(
    EffectiveDate,
    JobPosition,
    LineManager,
    Department,
    Branch,
    Leveel,
    Remark,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/AddEmployeePlacement?EffectiveDate=' +
        EffectiveDate +
        '&&JobPosition=' +
        JobPosition +
        '&&LineManager=' +
        LineManager +
        '&&Department=' +
        Department +
        '&&Branch=' +
        Branch +
        '&&Leveel=' +
        Leveel +
        '&&Remark=' +
        Remark +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployeePlacement(
    PlacementId,
    EffectiveDate,
    JobPosition,
    LineManager,
    Department,
    Branch,
    Leveel,
    Remark,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/UpdateEmployeePlacement?PlacementId=' +
        PlacementId +
        'EffectiveDate=' +
        EffectiveDate +
        '&&JobPosition=' +
        JobPosition +
        '&&LineManager=' +
        LineManager +
        'Department=' +
        Department +
        'Branch=' +
        Branch +
        'Leveel=' +
        Leveel +
        'Remark=' +
        Remark +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  DeleteEmployeePlacement(id: number): Observable<Object> {
    return this.http.get(
      environment.url + '/DeleteEmployeePlacement?id=' + id + ''
    );
  }

  GetAllEmployeePlacement() {
    return this.http.get('http://localhost:53099/Api/GetAllEmployeePlacement');
  }
  GetEmployeePlacement(id: number): any {
    return this.http.get(
      environment.url + '/GetEmployeePlacement?id=' + id + ''
    );
  }
  //Employment terms webapis
  AddEmploymentTerms(
    JobType,
    JobStatus,
    LeaveWorkFlow,
    WorkDay,
    Holiday,
    TermStart,
    TermEnd,
    Remark,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/AddEmploymentTerms?JobType=' +
        JobType +
        '&&JobStatus=' +
        JobStatus +
        '&&LeaveWorkFlow=' +
        LeaveWorkFlow +
        '&&WorkDay=' +
        WorkDay +
        '&&Holiday=' +
        Holiday +
        '&&TermStart=' +
        TermStart +
        '&&TermEnd=' +
        TermEnd +
        '&&Remark=' +
        Remark +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmploymentTerms(
    EmploymentId,
    JobType,
    JobStatus,
    LeaveWorkFlow,
    WorkDay,
    Holiday,
    TermStart,
    TermEnd,
    Remark,
    Delete
  ) {
    return this.http.get(
      environment.url +
        'UpdateEmploymentTerms/?EmploymentId=' +
        EmploymentId +
        '&&+JobType=' +
        JobType +
        '&&JobStatus=' +
        JobStatus +
        '&&LeaveWorkFlow=' +
        LeaveWorkFlow +
        '&&WorkDay=' +
        WorkDay +
        '&&Holiday=' +
        Holiday +
        '&&TermStart=' +
        TermStart +
        '&&TermEnd=' +
        TermEnd +
        '&&Remark=' +
        Remark +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  DeleteEmploymentTerms(id: number): Observable<Object> {
    return this.http.get(
      environment.url + '/DeleteEmploymentTerms?id=' + id + ''
    );
  }
  GetAllEmploymentTerms() {
    return this.http.get('http://localhost:53099/Api/GetAllEmploymentTerms');
  }
  GetEmploymentTerms(id: number): any {
    return this.http.get(environment.url + '/GetEmploymentTerms?id=' + id + '');
  }

  //employer information APIS
  //Upload photo

  postEmployerInfo(
    fileToUpload: File,
    Name: string,
    RegistrationNumber: string,
    Industry: string,
    HomeCountry: string,
    PortalUrl: string,
    Email: string,
    WebSite: string,
    Address1: string,
    Address2: string,
    City: string,
    PostalCode: string,
    State: string,
    Country: string,
    Telephone: string,
    Fax: string
  ) {
    const endpoint = 'http://localhost:49986/Api/AddEmployerInfo';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('Name', Name);
    formData.append('RegistrationNumber', RegistrationNumber);
    formData.append('Industry', Industry);
    formData.append('HomeCountry', HomeCountry);
    formData.append('PortalUrl', PortalUrl);

    formData.append('Email', Email);
    formData.append('WebSite', WebSite);
    formData.append('Address1', Address1);
    formData.append('Address2', Address2);
    formData.append('City', City);
    formData.append('PostalCode', PostalCode);
    formData.append('State', State);
    formData.append('Country', Country);
    formData.append('Telephone', Telephone);
    formData.append('Fax', Fax);

    return this.http.post(endpoint, formData);
  }
  UpdateEmployerInfo(
    EmployerId,
    ImageName,
    Name,
    RegistrationNumber,
    Industry,
    HomeCountry,
    PortalUrl,
    Email,
    WebSite,
    Address1,
    Address2,
    City,
    PostalCode,
    State,
    Country,
    Telephone,
    Fax
  ) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerInfo?EmployerId=' +
        EmployerId +
        '&&ImageName=' +
        ImageName +
        '&&Name=' +
        Name +
        '&&RegistrationNumber=' +
        RegistrationNumber +
        '&&Industry=' +
        Industry +
        '&&HomeCountry=' +
        HomeCountry +
        '&&PortalUrl=' +
        PortalUrl +
        '&&Email=' +
        Email +
        '&&WebSite=' +
        WebSite +
        '&&Address1=' +
        Address1 +
        '&&Address2=' +
        Address2 +
        '&&City=' +
        City +
        '&&PostalCode=' +
        PostalCode +
        '&&State=' +
        State +
        '&&Country=' +
        Country +
        '&&Telephone=' +
        Telephone +
        '&&Fax=' +
        Fax
    );
  }

  UpdateEmployeeImage(fileToUpload: File, EmployerId) {
    const endpoint = 'http://localhost:49986/Api/UpdateEmployerImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('EmployerId', EmployerId);

    return this.http.post(endpoint, formData);
  }

  GetAllEmployerInfo() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerInfo');
  }
  GetEmployerInfo(id: number): any {
    return this.http.get(
      'http://localhost:49986/Api/GetEmployerInfo?id=' + id + ''
    );
  }
  DeleteEmployerInfo(id: number): Observable<Object> {
    return this.http.get(environment.url + '/DeleteEmployerInfo?id=' + id + '');
  }
  //Javascript...kiptooo
  // formatUrl(urlPrefix: string, args: { [key: string]: any }): string {
  //   let url = urlPrefix + '?';

  //   for (let key in args) {
  //     url += `${key}=${args[key]}&`;
  //   }

  //   return url;
  // }

  //Employer bank Apis
  AddEmployerBank(
    Code,
    Name,
    Active,
    BankAccount,
    Address1,
    Address2,
    City,
    PostalCode,
    State,
    Country,
    Telephone,
    Fax,
    Delete
  ) {
    // const url = this.formatUrl(environment.url+'/AddEmployerBank',{
    //   Code,
    //   Name,
    //   Active,
    //   BankAccount,
    //   Address1,
    //   Address2,
    //   City,
    //   PostalCode,
    //   State,
    //   Country,
    //   Telephone,
    //   Fax,
    //   Delete
    // });

    // this.http.post(environment.url + '/AddEmployerBank?Code=', {
    //   Code,
    //   Name,
    //   Active,
    //   BankAccount,
    //   Address1,
    //   Address2,
    //   City,
    //   PostalCode,
    //   State,
    //   Country,
    //   Telephone,
    //   Fax,
    //   Delete,
    // });
    return this.http.get(
      environment.url +
        '/AddEmployerBank?Code=' +
        Code +
        '&&Name=' +
        Name +
        '&&Active=' +
        Active +
        '&&BankAccount=' +
        BankAccount +
        '&&Address1=' +
        Address1 +
        '&&Address2=' +
        Address2 +
        '&&City=' +
        City +
        '&&PostalCode=' +
        PostalCode +
        '&&State=' +
        State +
        +'&&Country=' +
        Country +
        +'&&Telephone=' +
        Telephone +
        +'&&Fax=' +
        Fax +
        +'&&Delete=' +
        Delete +
        ''
    );
  }

  UpdateEmployerBank(
    BankId,
    Code,
    Name,
    Active,
    BankAccount,
    Address1,
    Address2,
    City,
    PostalCode,
    State,
    Country,
    Telephone,
    Fax,
    Delete
  ) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerBank?BankId=' +
        BankId +
        '&&Code=' +
        Code +
        '&&Name=' +
        Name +
        '&&Active=' +
        Active +
        '&&BankAccount=' +
        BankAccount +
        '&&Address1=' +
        Address1 +
        '&&Address2=' +
        Address2 +
        '&&City=' +
        City +
        '&&PostalCode=' +
        PostalCode +
        '&&State=' +
        State +
        '&&Country=' +
        Country +
        '&&Telephone=' +
        Telephone +
        '&&Fax=' +
        Fax +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  GetAllEmployerBank() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerBank');
  }
  GetEmployerBank(id: number): any {
    return this.http.get(
      'http://localhost:49986/Api/GetEmployerBank?id=' + id + ''
    );
  }

  DeleteEmployerBank(id: number): Observable<Object> {
    return this.http.get(environment.url + '/DeleteEmployerBank?id=' + id + '');
  }

  //Consuming EmployerDepartment Apis in the shared service

  AddEmployerDepartment(Name, Code, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddEmployerDepartment?Name=' +
        Name +
        '&&Code=' +
        Code +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployerDepartment(DepartmentId, Name, Code, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerDepartment?DepartmentId=' +
        DepartmentId +
        '&&Name=' +
        Name +
        '&&Code=' +
        Code +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  GetAllEmployerDepartment() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerDepartment');
  }

  DeleteEmployerDepartment(id: number) {
    return this.http.get(
      environment.url + '/DeleteEmployerDepartment?id=' + id + ''
    );
  }

  GetEmployerDepartment(id: number): any {
    return this.http.get(
      environment.url + '/GetEmployerDepartment?id=' + id + ''
    );
  }

  //consuming Employer Branch Apis
  AddEmployerBranch(Code, Name, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddEmployerBranch?Code=' +
        Code +
        '&&Name=' +
        Name +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployerBranch(BranchId, Code, Name, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerBranch?BranchId=' +
        BranchId +
        '&&Code=' +
        Code +
        '&&Name=' +
        Name +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  GetAllEmployerBranch() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerBranch');
  }
  DeleteEmployerBranch(id: number) {
    return this.http.get(
      environment.url + '/DeleteEmployerBranch?id=' + id + ''
    );
  }
  GetEmployerBranch(id: number): any {
    return this.http.get(environment.url + '/GetEmployerBranch?id=' + id + '');
  }
  //Consuming employer level apis

  AddEmployerLevel(Code, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddEmployerLevel?Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployerLevel(LevelId, Code, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerLevel?LevelId=' +
        LevelId +
        '&&Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  GetAllEmployerLevel() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerLevel');
  }
  DeleteEmployerLevel(id: number) {
    return this.http.get(
      environment.url + '/DeleteEmployerLevel?id=' + id + ''
    );
  }

  GetEmployerLevel(id: number): any {
    return this.http.get(environment.url + '/GetEmployerLevel?id=' + id + '');
  }
  //consuming apis for employercourse
  AddEmployerCourse(Code, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddEmployerCourse?Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployerCourse(CourseId, Code, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerCourse?CourseId=' +
        CourseId +
        '&&Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  GetAllEmployerCourse() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerCourse');
  }
  DeleteEmployerCourse(id: number) {
    return this.http.get(
      environment.url + '/DeleteEmployerCourse?id=' + id + ''
    );
  }

  GetEmployerCourse(id: number): any {
    return this.http.get(environment.url + '/GetEmployerCourse?id=' + id + '');
  }

  //Employer trainer apis

  AddEmployerTrainer(Code, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddEmployerTrainer?Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployerTrainer(TrainerId, Code, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerTrainer?TrainerId=' +
        TrainerId +
        '&&Code=' +
        Code +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  GetAllEmployerTrainer() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerTrainer');
  }
  DeleteEmployerTrainer(id: number) {
    return this.http.get(
      environment.url + '/DeleteEmployerTrainer?id=' + id + ''
    );
  }

  GetEmployerTrainer(id: number): any {
    return this.http.get(environment.url + '/GetEmployerTrainer?id=' + id + '');
  }
  //consuming apis for employer ethiniciy
  AddEmployerEthnicity(Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddEmployerEthnicity?Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployerEthnicity(EthnicityId, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerEthnicity?EthnicityId=' +
        EthnicityId +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  GetAllEmployerEthnicity() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerEthnicity');
  }
  DeleteEmployerEthnicity(id: number) {
    return this.http.get(
      environment.url + '/DeleteEmployerEthnicity?id=' + id + ''
    );
  }

  GetEmployerEthnicity(id: number): any {
    return this.http.get(
      environment.url + '/GetEmployerEthnicity?id=' + id + ''
    );
  }

  //Employer ethnicity Apis
  AddEmployerReligion(Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddEmployerReligion?Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployerReligion(ReligionId, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerReligion?ReligionId=' +
        ReligionId +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  GetAllEmployerReligion() {
    return this.http.get('http://localhost:49986/Api/GetAllEmployerReligion');
  }
  DeleteEmployerReligion(id: number) {
    return this.http.get(
      environment.url + '/DeleteEmployerReligion?id=' + id + ''
    );
  }

  GetEmployerReligion(id: number): any {
    return this.http.get(
      environment.url + '/GetEmployerReligion?id=' + id + ''
    );
  }
  //Employer Document category Apis
  AddEmployerDocumentCategory(Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/AddEmployerDocumentCategory?Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }
  UpdateEmployerDocumentCategory(CategoryId, Description, Active, Delete) {
    return this.http.get(
      environment.url +
        '/UpdateEmployerDocumentCategory?CategoryId=' +
        CategoryId +
        '&&Description=' +
        Description +
        '&&Active=' +
        Active +
        '&&Delete=' +
        Delete +
        ''
    );
  }

  GetAllEmployerDocumentCategory() {
    return this.http.get(
      'http://localhost:49986/Api/GetAllEmployerDocumentCategory'
    );
  }
  DeleteEmployerDocumentCategory(id: number) {
    return this.http.get(
      environment.url + '/DeleteEmployerDocumentCategory?id=' + id + ''
    );
  }

  GetEmployerDocumentCategory(id: number): any {
    return this.http.get(
      environment.url + '/GetEmployerDocumentCategory?id=' + id + ''
    );
  }
}

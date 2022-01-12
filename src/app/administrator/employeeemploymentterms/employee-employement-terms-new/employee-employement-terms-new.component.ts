import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-employement-terms-new',
  templateUrl: './employee-employement-terms-new.component.html',
  styleUrls: ['./employee-employement-terms-new.component.css']
})
export class EmployeeEmployementTermsNewComponent implements OnInit {
  EmploymentId:any=0;
  JobType:any="";
  JobStatus:any="";
  LeaveWorkFlow:any="";
  WorkDay:any="";
  Holiday: any="";
  TermStart:any="";
  TermEnd:any="";
  Remark:any="";
  Delete :boolean=false;

  constructor(
    private currentRoute:ActivatedRoute,
    public service : SharedService,
    private router:Router ,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    

let EmploymentId=this.currentRoute.snapshot.paramMap.get('id');

console.log(EmploymentId)

    if(EmploymentId==null)
    this.ClearData();
    else{
        this.service.GetEmploymentTerms(parseInt(EmploymentId)).subscribe(Response =>{

          console.log(Response)

        this.EmploymentId=Response.EmploymentTerms.id;
        this.JobType=Response.EmploymentTerms.JobType;
        this.JobStatus=Response.EmploymentTerms.JobStatus;
        this.LeaveWorkFlow=Response.EmploymentTerms.LeaveWorkFlow;
        this.WorkDay=Response.EmploymentTerms.WorkDay;
        this.Holiday=Response.EmploymentTerms.Holiday;
        this.TermStart=Response.EmploymentTerms.TermStart;
        this.TermEnd=Response.EmploymentTerms.TermEnd;
        this.Remark=Response.EmploymentTerms.Remark;
        })
    
  }
  }
  onSubmit( JobType,JobStatus,LeaveWorkFlow,WorkDay,Holiday,TermStart,TermEnd,Remark)
    { 
      let EmploymentId=this.currentRoute.snapshot.paramMap.get('id');
        if(EmploymentId==null){
  
          //Add employment terms
             
          this.service.AddEmploymentTerms(JobType,JobStatus,LeaveWorkFlow,WorkDay,Holiday,TermStart,TermEnd,Remark,this.Delete).subscribe(Response =>{
            console.log(JobType,JobStatus,LeaveWorkFlow,WorkDay,Holiday,TermStart,TermEnd,Remark)
            this.toastr.success('Added Successfuly','PF');

            this.router.navigate(['/administrator/employee/employementterms']);
        
          })
  
        }else{
     
          this.service.UpdateEmploymentTerms(EmploymentId,JobType,JobStatus,LeaveWorkFlow,WorkDay,Holiday,TermStart,TermEnd,Remark,this.Delete
        
           ).subscribe(Response =>{
             
            this.toastr.success('Updated Successfuly','PF');
             this.router.navigate(['/administrator/employee/employementterms']);
         
           })
  
  
        }
  
  }
  ClearData(){
    
    this.EmploymentId="";
    this.JobType="";
    this.JobStatus="";
    this.LeaveWorkFlow="";
    this.WorkDay="";
    this.Holiday="";
    this.TermStart="";
    this.TermEnd="";
    this.Remark="";
   }
  
   EmploymentList(){
    this.router.navigate(['/employee/employementterms']);
   }
  }





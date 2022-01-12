
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-newleavetype',
  templateUrl: './newleavetype.component.html',
  styleUrls: ['./newleavetype.component.css']
})
export class NewleavetypeComponent implements OnInit {
  LeaveTypeId:any=0;
  Code:any="";
  Description:any="";
  Active:any=false;
  LeaveUnit:any="";
  DayCount:any="";
  PaidLeave:any=false;
  Delete:boolean=false;

  constructor(
    private currentRoute:ActivatedRoute,
    public service : SharedService,
    private router:Router ,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    let LeaveTypeId=this.currentRoute.snapshot.paramMap.get('id');

    if(LeaveTypeId==null)
    this.ClearData();
    else{
        this.service.GetLeaveType(parseInt(LeaveTypeId)).subscribe(Response =>{
        this.LeaveTypeId=Response.LeaveTypeId.LeaveTypeId;
        this.Code=Response.LeaveType.Code;
        this.Description=Response.LeaveType.Description;
        this.Active=Response.LeaveType.Active;
        this.LeaveUnit=Response.LeaveType.LeaveUnit;
        this.DayCount=Response.LeaveType.DayCount;
        this.PaidLeave=Response.LeaveType.PaidLeave;

        

        })
    
  }

}
onSubmit( Code,Description,Active,LeaveUnit,DayCount,PaidLeave)
    {
      let LeaveTypeId=this.currentRoute.snapshot.paramMap.get('id');
        if(LeaveTypeId==null){
  
          //Add Leave TYPE
             
          this.service.AddLeaveType(Code,Description,Active,LeaveUnit,DayCount,PaidLeave,this.Delete).subscribe(Response =>{
            console.log(Code,Description,Active,LeaveUnit,DayCount,PaidLeave)
            this.toastr.success('Added Successfuly','PF');

            this.router.navigate(['/administrator/leave/type']);
        
          })
  
        }else{
     
          this.service.UpdateLeaveType(LeaveTypeId,Code,Description,Active,LeaveUnit,DayCount,PaidLeave,this.Delete
        
           ).subscribe(Response =>{
             
            this.toastr.success('Updated Successfuly','PF');
             this.router.navigate(['/employee/HRrole']);
         
           })
  
  
        }
  
  }
  ClearData(){
    this.LeaveTypeId="";
    this.Code="";
    this.Description="";
    this.Active="";
    this.LeaveUnit="";
    this.DayCount="";
    this.PaidLeave="";
        
   }
  
   LeaveTypeList(){
    this.router.navigate(['/leave/type']);
   }
  }









  

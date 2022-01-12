import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-employee-placement-new',
  templateUrl: './employee-placement-new.component.html',
  styleUrls: ['./employee-placement-new.component.css']
})
export class EmployeePlacementNewComponent implements OnInit {
  PlacementId:any=0;
  EffectiveDate :any="";
  JobPosition:any="";
  LineManager:any="";
  Department:any="";
  Branch:any="";
  Leveel:any="";
  Remark:any="";
  Delete:boolean=false;

  constructor(
    private currentRoute:ActivatedRoute,
    public service : SharedService,
    private router:Router ,
    private toastr: ToastrService
  ) { }

  ngOnInit() {


    let PlacementId=this.currentRoute.snapshot.paramMap.get('id');
    console.log(PlacementId)

    if(PlacementId==null)
    this.ClearData();
    else{
        this.service.GetLeaveType(parseInt(PlacementId)).subscribe(Response =>{
          console.log(Response)
        this.PlacementId=Response.EmployeePlacement.id;
        this.EffectiveDate=Response.EmployeePlacement.EffectiveDate;
        this.JobPosition=Response.EmployeePlacement.JobPosition;
        this.LineManager=Response.EmployeePlacement.LineManager;
        this.Department=Response.EmployeePlacement.Department;
        this.Branch=Response.EmployeePlacement.Branch;
        this.Leveel=Response.EmployeePlacement.Leveel;
        this.Remark=Response.EmployeePlacement.Remark;
        
        

        })
    
  }

}
onSubmit( EffectiveDate,JobPosition,LineManager,Department,Branch,Leveel,Remark)
    {
      let PlacementId=this.currentRoute.snapshot.paramMap.get('id');
        if(PlacementId==null){
  
          //Add Employeeplacemt
             
          this.service.AddEmployeePlacement(EffectiveDate,JobPosition,LineManager,Department,Branch,Leveel,Remark,this.Delete).subscribe(Response =>{
            console.log(EffectiveDate,JobPosition,LineManager,Department,Branch,Leveel,Remark)
            this.toastr.success('Added Successfuly','PF');

            this.router.navigate(['/administrator/employee/placement']);
        
          })
  
        }else{
     
          this.service.UpdateEmployeePlacement(PlacementId,EffectiveDate,JobPosition,LineManager,Department,Branch,Leveel,Remark,this.Delete
        
           ).subscribe(Response =>{
             
            this.toastr.success('Updated Successfuly','PF');
             this.router.navigate(['/employee/HRrole']);
         
           })
  
  
        }
  
  }
  ClearData(){
    this.PlacementId="";
    this.EffectiveDate="";
    this.JobPosition="";
    this.LineManager="";
    this.Department="";
    this.Branch="";
    this.Leveel="";
    this.Remark="";
        
   }
  
   LeaveTypeList(){
    this.router.navigate(['/employee/placement']);
   }
  }




  

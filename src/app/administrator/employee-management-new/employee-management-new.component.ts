//import { NewteamdocumentsharingComponent } from './../teamdocumentsharing/newteamdocumentsharing/newteamdocumentsharing.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-employee-management-new',
  templateUrl: './employee-management-new.component.html',
  styleUrls: ['./employee-management-new.component.css']
})
export class EmployeeManagementNewComponent implements OnInit {
  NewEmployeeId:any=0;
  Id:any="";
  Name:any="";
  Gender:any="";
  Position:any="";
  Department:any="";
  DateJoined:any="";
  Status:any="";
  Modified:any="";
  Delete:boolean=false;
   
  constructor(
    private currentRoute:ActivatedRoute,
    public service : SharedService,
    private router:Router ,
    private toastr: ToastrService
    
  ) { }

  ngOnInit(): void {
    
    let NewEmployeeId=this.currentRoute.snapshot.paramMap.get('id');
  console.log(NewEmployeeId)
    if(NewEmployeeId==null)
    this.ClearData();
    else{
        this.service.GetNewEmployee(parseInt(NewEmployeeId)).subscribe(Response =>{
          console.log(Response)
        this.NewEmployeeId=Response.NewEmployee.id;
        this.Id=Response.NewEmployee.Id;
        this.Name=Response.NewEmployee.Name;
        this.Gender=Response.NewEmployee.Gender;
        this.Position=Response.NewEmployee.Position;
        this.Department=Response.NewEmployee.Department;
        this.DateJoined=Response.NewEmployee.DateJoined;
        this.Status=Response.NewEmployee.Status;
        this.Modified=Response.NewEmployee.Modified;
        })
    
  }

}
onSubmit( Id,Name,Gender,Position,Department,DateJoined,Status,Modified)
    {
      let NewEmployeeId=this.currentRoute.snapshot.paramMap.get('id');
        if(NewEmployeeId==null){
  
          //Add JobPosition
             
          this.service.AddNewEmployee(Id,Name,Gender,Position,Department,DateJoined,Status,Modified,this.Delete).subscribe(Response =>{
            console.log(Id,Name,Gender,Position,Department,DateJoined,Status,Modified)
            this.toastr.success('Added Successfuly','HR Management System');

            this.router.navigate(['/administrator/employee/management']);
        
          })
  
        }else{
     
          this.service.UpdateNewEmployee(NewEmployeeId,Id,Name,Gender,Position,Department,DateJoined,Status,Modified,this.Delete
        
           ).subscribe(Response =>{
             
            this.toastr.info('Updated Successfuly','HR Management System');
             this.router.navigate(['/administrator/employee/management']);
         
           })
  
  
        }
  
  }
  ClearData(){
    this.NewEmployeeId="";
    this.Name="";
    this.Gender="";
    this.Position="";
    this.Department="";
    this.DateJoined="";
    this.Status="";
    this.Modified="";
    
   }
  
   NewEmployeeList(){
    this.router.navigate(['/employee/management']);
   }
  }



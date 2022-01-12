import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-newhrrole',
  templateUrl: './newhrrole.component.html',
  styleUrls: ['./newhrrole.component.css']
})
export class NewhrroleComponent implements OnInit {
  HrRoleId:any=0;
  Code:any="";
  Description:any="";
  Active:any=false;
  Delete:boolean=false;

  constructor(
    private currentRoute:ActivatedRoute,
    public service : SharedService,
    private router:Router ,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    let HrRoleId=this.currentRoute.snapshot.paramMap.get('id');
    console.log(HrRoleId)
    if(HrRoleId==null)
    this.ClearData();
    else{
        this.service.GetHrRole(parseInt(HrRoleId)).subscribe(Response =>{
          console.log(Response)
        this.HrRoleId=Response.HrRole.id;
        this.Code=Response.HrRole.Code;
        this.Description=Response.HrRole.Description;
        this.Active=Response.HrRole.Active;
        
        })
    
  }

}
onSubmit( Code,Description,Active)
    {
      let HrRoleId=this.currentRoute.snapshot.paramMap.get('id');
        if(HrRoleId==null){
  
          //Add HR ROLE
             
          this.service.AddHrRole(Code,Description,Active,this.Delete).subscribe(Response =>{
            console.log(Code,Description,Active)
            this.toastr.success('Added Successfuly','PF');

            this.router.navigate(['/administrator/employee/HRrole']);
        
          })
  
        }else{
     
          this.service.UpdateHrRole(HrRoleId,Code,Description,Active,this.Delete
        
           ).subscribe(Response =>{
             
            this.toastr.success('Updated Successfuly','PF');
             this.router.navigate(['/employee/HRrole']);
         
           })
  
  
        }
  
  }
  ClearData(){
    this.HrRoleId="";
    this.Code="";
    this.Description="";
    this.Active="";
        
   }
  
   HrRoleList(){
    this.router.navigate(['/employee/HRrole']);
   }
  }




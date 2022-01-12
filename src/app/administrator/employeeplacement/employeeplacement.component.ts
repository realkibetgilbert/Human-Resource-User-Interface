import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employeeplacement',
  templateUrl: './employeeplacement.component.html',
  styleUrls: ['./employeeplacement.component.css']
})
export class EmployeeplacementComponent implements OnInit {
  employeeplacementlist:any

  constructor(
    private service:SharedService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.refreshlist();
  }
  refreshlist(){
    this.service.GetAllEmployeePlacement().subscribe(Response=>{
    console.log(Response)
      this.employeeplacementlist=Response;
  })
      }

      openForEdit( 
        Id :number){
        this.router.navigate(['/administrator/employee/placement/new/edit/'+Id]);
      }

      DeleteEmployeePlacement(id :number){
        if(confirm("Are you sure you want to delete this record?"))
          this.service.DeleteEmployeePlacement(id).subscribe((Response) =>{
            this.refreshlist();
        
            this.toastr.warning('Deleted Successfully!', 'HR Management System');
               }
            )}
    }

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeeemploymentterms',
  templateUrl: './employeeemploymentterms.component.html',
  styleUrls: ['./employeeemploymentterms.component.css']
})
export class EmployeeemploymenttermsComponent implements OnInit {
  employmentlist:any

  constructor(
    private service: SharedService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.refreshlist();
  }
  refreshlist(){
    this.service.GetAllEmploymentTerms().subscribe(Response=>{
    console.log(Response)
      this.employmentlist=Response;
  })
      }
      openForEdit( 
        Id :number){
        this.router.navigate(['/administrator/employee/employementterms/new/edit/'+Id]);
      }
      DeleteEmploymentTerms(id :number){
        if(confirm("Are you sure you want to delete this record?"))
          this.service.DeleteEmploymentTerms(id).subscribe((Response) =>{
            this.refreshlist();
        
            this.toastr.warning('Deleted Successfully!', 'HR Management System');
               }
            )}
    }




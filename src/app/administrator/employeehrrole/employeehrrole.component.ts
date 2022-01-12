import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employeehrrole',
  templateUrl: './employeehrrole.component.html',
  styleUrls: ['./employeehrrole.component.css']
})
export class EmployeehrroleComponent implements OnInit {
  hrrolelist:any

  constructor(private service:SharedService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.refreshlist();
  }

  refreshlist(){
    this.service.GetAllHrRole().subscribe(Response=>{
    console.log(Response)
      this.hrrolelist=Response;
  })
      }
      openForEdit( 
        Id :number){
        this.router.navigate(['/administrator/employee//HRrole/new/edit/'+Id]);
      }



      DeleteHrRole(id :number){
        if(confirm("Are you sure you want to delete this record?"))
          this.service.DeleteHrRole(id).subscribe((Response) =>{
            this.refreshlist();
        
            this.toastr.warning('Deleted Successfully!', 'HR Management System');
               }
            )}
    }


import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {
  leavetypelist:any

  constructor(
    private service:SharedService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.refreshlist();
  }
  refreshlist(){
    this.service.GetAllLeaveType().subscribe(Response=>{
    console.log(Response)
      this.leavetypelist=Response;
  })
      }
      DeleteLeaveType(id :number){
        if(confirm("Are you sure you want to delete this record?"))
          this.service.DeleteLeaveType(id).subscribe((Response) =>{
            this.refreshlist();
        
            this.toastr.warning('Deleted Successfully!', 'HR Management System');
               }
            )}
    }



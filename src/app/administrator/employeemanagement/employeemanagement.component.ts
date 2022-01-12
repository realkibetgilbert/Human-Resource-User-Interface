import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employeemanagement',
  templateUrl: './employeemanagement.component.html',
  styleUrls: ['./employeemanagement.component.css'],
})
export class EmployeemanagementComponent implements OnInit {
  newemployeelist: any;

  constructor(
    private service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.refreshlist();
  }
  refreshlist() {
    this.service.GetAllNewEmployee().subscribe((Response) => {
      console.log(Response);
      this.newemployeelist = Response;
    });
  }

  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employee/management/new/edit/' + Id]);
  }
  DeleteNewEmployee(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteNewEmployee(id).subscribe((Response) => {
        this.refreshlist();

        this.toastr.error('Deleted Successfully!', 'HR Management System');
      });
  }
}

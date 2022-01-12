import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employerdepartment',
  templateUrl: './employerdepartment.component.html',
  styleUrls: ['./employerdepartment.component.css'],
})
export class EmployerdepartmentComponent implements OnInit {
  departmentlist: any;
  p: number = 1;

  constructor(
    private service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList() {
    this.service.GetAllEmployerDepartment().subscribe((Response) => {
      this.departmentlist = Response;
    });
  }

  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employer/department/new/edit/' + Id]);
  }

  DeleteEmployerDepartment(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerDepartment(id).subscribe((Response) => {
        this.refreshList();
        this.toastr.error('Record Deleted Succesfully', 'HR Management System');
      });
  }
}

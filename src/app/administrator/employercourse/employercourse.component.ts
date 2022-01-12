import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employercourse',
  templateUrl: './employercourse.component.html',
  styleUrls: ['./employercourse.component.css'],
})
export class EmployercourseComponent implements OnInit {
  courselist: any;
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
    this.service.GetAllEmployerCourse().subscribe((Response) => {
      this.courselist = Response;
    });
  }
  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employer/course/new/edit/' + Id]);
  }
  DeleteEmployerCourse(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerCourse(id).subscribe((Response) => {
        this.toastr.error(
          'Record Deleted Successfully',
          'HR Management System'
        );
        this.refreshList();
      });
  }
}

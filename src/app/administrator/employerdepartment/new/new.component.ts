import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  DepartmentId: any = 0;
  Code: any = '';
  Name: any = '';
  Active: any = '';
  Delete: boolean = false;

  constructor(
    private currentRoute: ActivatedRoute,
    public service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let DepartmentId = this.currentRoute.snapshot.paramMap.get('id');

    if (DepartmentId == null) this.ClearData();
    else {
      this.service
        .GetEmployerDepartment(parseInt(DepartmentId))
        .subscribe((Response) => {
          this.DepartmentId = Response.EmployerDepartment.DepartmentId;

          this.Code = Response.EmployerDepartment.Code;
          this.Name = Response.EmployerDepartment.Name;
          this.Active = Response.EmployerDepartment.Active;
        });
    }
  }
  onSubmit(Name, Code, Active) {
    let DepartmentId = this.currentRoute.snapshot.paramMap.get('id');
    if (DepartmentId == null) {
      //Add JobPosition

      this.service
        .AddEmployerDepartment(Code, Name, Active, this.Delete)
        .subscribe((Response) => {
          console.log(Name, Code, Active);
          this.toastr.success(
            'Record Saved Successfuly',
            'Hr Management System'
          );

          this.router.navigate(['/administrator/employer/department']);
        });
    } else {
      this.service
        .UpdateEmployerDepartment(DepartmentId, Code, Name, Active, this.Delete)
        .subscribe((Response) => {
          this.toastr.info(
            'Record Updated Successfuly',
            'Hr Management System'
          );
          this.router.navigate(['/administrator/employer/department']);
        });
    }
  }

  gotoDepartments() {
    let selectedId = this.DepartmentId ? this.DepartmentId : null;
    this.router.navigate([
      '/administrator/employer/department',
      { id: selectedId },
    ]);
  }
  ClearData() {
    this.DepartmentId = '';
    this.Code = '';
    this.Name = '';
    this.Active = '';
  }

  JobpositionList() {
    this.router.navigate(['/employer/department']);
  }
}

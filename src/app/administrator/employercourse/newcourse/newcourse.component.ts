import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css'],
})
export class NewcourseComponent implements OnInit {
  CourseId: any = 0;
  Code: any = '';
  Description: any = '';
  Active: any = '';
  Delete: boolean = false;

  constructor(
    private currentRoute: ActivatedRoute,
    public service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let CourseId = this.currentRoute.snapshot.paramMap.get('id');

    if (CourseId == null) this.ClearData();
    else {
      this.service
        .GetEmployerCourse(parseInt(CourseId))
        .subscribe((Response) => {
          this.CourseId = Response.EmployerCourse.LevelId;
          this.Code = Response.EmployerCourse.Code;
          this.Description = Response.EmployerCourse.Description;
          this.Active = Response.EmployerCourse.Active;
        });
    }
  }
  onSubmit(Code, Description, Active) {
    let CourseId = this.currentRoute.snapshot.paramMap.get('id');
    if (CourseId == null) {
      //Add level.....

      this.service
        .AddEmployerCourse(Code, Description, Active, this.Delete)
        .subscribe((Response) => {
          console.log(Code, Description, Active);
          this.toastr.success('Record Saved Successfuly');

          this.router.navigate(['/administrator/employer/course']);
        });
    } else {
      this.service
        .UpdateEmployerCourse(CourseId, Code, Description, Active, this.Delete)
        .subscribe((Response) => {
          this.toastr.info('Record Updated Successfuly');
          this.router.navigate(['/administrator/employer/course']);
        });
    }
  }
  ClearData() {
    this.CourseId = '';
    this.Code = '';
    this.Description = '';
    this.Active = '';
  }

  courselist() {
    this.router.navigate(['/employer/course']);
  }
}

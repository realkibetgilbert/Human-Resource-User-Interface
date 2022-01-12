import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  //jobPosition={JobPositionId:0,Code:'',Title:'',Active:false,Responsibility:'',Delete:false}

  JobPositionId: any = 0;
  Code: any = '';
  Title: any = '';
  Active: any = false;
  Responsibility: any = '';
  Delete: boolean = false;

  constructor(
    private currentRoute: ActivatedRoute,
    public service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let JobPositionId = this.currentRoute.snapshot.paramMap.get('id');

    if (JobPositionId == null) this.ClearData();
    else {
      this.service
        .GetJobPosition(parseInt(JobPositionId))
        .subscribe((Response) => {
          this.JobPositionId = Response.JobPosition.JobPositionId;
          this.Code = Response.JobPosition.Code;
          this.Title = Response.JobPosition.Title;
          this.Active = Response.JobPosition.Active;
          this.Responsibility = Response.JobPosition.Responsibility;
        });
    }
  }
  onSubmit(Code, Title, Active, Responsibility) {
    let JobPositionId = this.currentRoute.snapshot.paramMap.get('id');
    if (JobPositionId == null) {
      //Add JobPosition

      this.service
        .AddJobPosition(Code, Title, Active, Responsibility, this.Delete)
        .subscribe((Response) => {
          console.log(Code, Title, Active, Responsibility);
          this.toastr.success('Added Successfuly', 'PF');

          this.router.navigate(['/administrator/employer/jobposition']);
        });
    } else {
      this.service
        .UpdateJobPosition(
          JobPositionId,
          Code,
          Title,
          Active,
          Responsibility,
          this.Delete
        )
        .subscribe((Response) => {
          this.router.navigate(['/administrator/employer/jobposition']);

          this.toastr.info('Record Updated Successfuly');
        });
    }
  }
  ClearData() {
    this.JobPositionId = '';
    this.Code = '';
    this.Title = '';
    this.Active = '';
    this.Responsibility = '';
  }

  JobpositionList() {
    this.router.navigate(['/employer/jobposition']);
  }
}

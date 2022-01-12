import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newtrainer',
  templateUrl: './newtrainer.component.html',
  styleUrls: ['./newtrainer.component.css'],
})
export class NewtrainerComponent implements OnInit {
  TrainerId: any = 0;
  Code: any = '';
  Description: any = '';
  Active: any = '';
  Delete: boolean = false;
  constructor(
    public service: SharedService,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let TrainerId = this.currentRoute.snapshot.paramMap.get('id');

    if (TrainerId == null) this.ClearData();
    else {
      this.service
        .GetEmployerTrainer(parseInt(TrainerId))
        .subscribe((Response) => {
          this.TrainerId = Response.EmployerTrainer.LevelId;
          this.Code = Response.EmployerTrainer.Code;
          this.Description = Response.EmployerTrainer.Description;
          this.Active = Response.EmployerTrainer.Active;
        });
    }
  }
  onSubmit(Code, Description, Active) {
    let TrainerId = this.currentRoute.snapshot.paramMap.get('id');
    if (TrainerId == null) {
      //Add level.....

      this.service
        .AddEmployerTrainer(Code, Description, Active, this.Delete)
        .subscribe((Response) => {
          console.log(Code, Description, Active);

          this.router.navigate(['/administrator/employer/trainer']);

          this.toastr.success('Record Saved Successfuly');
        });
    } else {
      this.service
        .UpdateEmployerTrainer(
          TrainerId,
          Code,
          Description,
          Active,
          this.Delete
        )
        .subscribe((Response) => {
          this.router.navigate(['/administrator/employer/trainer']);
          this.toastr.info('Record Updated Successfuly');
        });
    }
  }
  ClearData() {
    this.TrainerId = '';
    this.Code = '';
    this.Description = '';
    this.Active = '';
  }

  trainerList() {
    this.router.navigate(['/employer/trainer']);
  }
}

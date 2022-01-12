import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-newethnicity',
  templateUrl: './newethnicity.component.html',
  styleUrls: ['./newethnicity.component.css'],
})
export class NewethnicityComponent implements OnInit {
  EthnicityId: any = 0;
  Description: any = '';
  Active: any = '';
  Delete: boolean = false;
  errorMessage = document.querySelector('msg');
  constructor(
    private currentRoute: ActivatedRoute,
    public service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let EthnicityId = this.currentRoute.snapshot.paramMap.get('id');

    if (this.EthnicityId == null) this.ClearData();
    else {
      this.service
        .GetEmployerEthnicity(parseInt(EthnicityId))
        .subscribe((Response) => {
          this.EthnicityId = Response.EmployerEthnicity.EthnicityId;

          this.Description = Response.EmployerEthnicity.Description;
          this.Active = Response.EmployerEthnicity.Active;
        });
    }
  }

  onSubmit(Description, Active) {
    let EthnicityId = this.currentRoute.snapshot.paramMap.get('id');
    if (EthnicityId == null) {
      //Add level.....

      this.service
        .AddEmployerEthnicity(Description, Active, this.Delete)
        .subscribe((Response) => {
          console.log(Description, Active);

          this.router.navigate(['/administrator/employer/ethnicity']);
          this.toastr.success('Record Added Successfuly');
        });
    } else {
      this.service
        .UpdateEmployerEthnicity(EthnicityId, Description, Active, this.Delete)
        .subscribe((Response) => {
          this.router.navigate(['/administrator/employer/ethnicity']);
          this.toastr.info('Record Updated Successfuly');
        });
    }
  }

  ClearData() {
    this.EthnicityId = '';
    this.Description = '';
    this.Active = '';
  }

  ethnicityList() {
    this.router.navigate(['/employer/ethnicity']);
  }
}

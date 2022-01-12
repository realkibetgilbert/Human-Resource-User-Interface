import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-newreligion',
  templateUrl: './newreligion.component.html',
  styleUrls: ['./newreligion.component.css'],
})
export class NewreligionComponent implements OnInit {
  ReligionId: any = 0;
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
    let ReligionId = this.currentRoute.snapshot.paramMap.get('id');

    if (ReligionId == null) this.ClearData();
    else {
      this.service
        .GetEmployerReligion(parseInt(ReligionId))
        .subscribe((Response) => {
          this.ReligionId = Response.EmployerReligion.ReligionId;

          this.Description = Response.EmployerReligion.Description;
          this.Active = Response.EmployerReligion.Active;
        });
    }
  }
  onSubmit(Description, Active) {
    let ReligionId = this.currentRoute.snapshot.paramMap.get('id');
    if (ReligionId == null) {
      //Add level.....

      this.service
        .AddEmployerReligion(Description, Active, this.Delete)
        .subscribe((Response) => {
          console.log(Description, Active);

          this.router.navigate(['/administrator/employer/religion']);
          this.toastr.success('Record Added Successfuly');
        });
    } else {
      this.service
        .UpdateEmployerReligion(ReligionId, Description, Active, this.Delete)
        .subscribe((Response) => {
          this.router.navigate(['/administrator/employer/religion']);
          this.toastr.info('Record Updated Successfuly');
        });
    }
  }
  ClearData() {
    this.ReligionId = '';
    this.Description = '';
    this.Active = '';
  }

  religionList() {
    this.router.navigate(['/employer/religion']);
  }
}

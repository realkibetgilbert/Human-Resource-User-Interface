import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-newlevel',
  templateUrl: './newlevel.component.html',
  styleUrls: ['./newlevel.component.css'],
})
export class NewlevelComponent implements OnInit {
  LevelId: any = 0;
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
    let LevelId = this.currentRoute.snapshot.paramMap.get('id');

    if (LevelId == null) this.ClearData();
    else {
      this.service.GetEmployerLevel(parseInt(LevelId)).subscribe((Response) => {
        this.LevelId = Response.EmployerLevel.LevelId;
        this.Code = Response.EmployerLevel.Code;
        this.Description = Response.EmployerLevel.Description;
        this.Active = Response.EmployerLevel.Active;
      });
    }
  }
  onSubmit(Code, Description, Active) {
    let LevelId = this.currentRoute.snapshot.paramMap.get('id');
    if (LevelId == null) {
      //Add level.....

      this.service
        .AddEmployerLevel(Code, Description, Active, this.Delete)
        .subscribe((Response) => {
          console.log(Code, Description, Active);

          this.router.navigate(['/administrator/employer/level']);
          this.toastr.success('Record Saved Successfuly');
        });
    } else {
      this.service
        .UpdateEmployerLevel(LevelId, Code, Description, Active, this.Delete)
        .subscribe((Response) => {
          this.router.navigate(['/administrator/employer/level']);
          this.toastr.info('Record Updated Successfuly');
        });
    }
  }
  ClearData() {
    this.LevelId = '';
    this.Code = '';
    this.Description = '';
    this.Active = '';
  }

  levellist() {
    this.router.navigate(['/employer/level']);
  }
}

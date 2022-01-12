import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-newbranch',
  templateUrl: './newbranch.component.html',
  styleUrls: ['./newbranch.component.css'],
})
export class NewbranchComponent implements OnInit {
  BranchId: any = 0;
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
    let BranchId = this.currentRoute.snapshot.paramMap.get('id');

    if (BranchId == null) this.ClearData();
    else {
      this.service
        .GetEmployerBranch(parseInt(BranchId))
        .subscribe((Response) => {
          this.BranchId = Response.EmployerBranch.BranchId;

          this.Code = Response.EmployerBranch.Code;
          this.Name = Response.EmployerBranch.Name;
          this.Active = Response.EmployerBranch.Active;
        });
    }
  }
  onSubmit(Code, Name, Active) {
    let BranchId = this.currentRoute.snapshot.paramMap.get('id');
    if (BranchId == null) {
      //Add JobBranch.......

      this.service
        .AddEmployerBranch(Code, Name, Active, this.Delete)
        .subscribe((Response) => {
          console.log(Code, Name, Active);

          this.router.navigate(['/administrator/employer/branch']);
          this.toastr.success('Record Saved Successfuly');
        });
    } else {
      this.service
        .UpdateEmployerBranch(BranchId, Code, Name, Active, this.Delete)
        .subscribe((Response) => {
          this.router.navigate(['/administrator/employer/branch']);
          this.toastr.info('Record Updated Successfuly');
        });
    }
  }
  ClearData() {
    this.BranchId = '';
    this.Code = '';
    this.Name = '';
    this.Active = '';
  }

  branchlist() {
    this.router.navigate(['/employer/branch']);
  }
}

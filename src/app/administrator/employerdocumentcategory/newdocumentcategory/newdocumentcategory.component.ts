import { EmployerbankComponent } from './../../employerbank/employerbank.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-newdocumentcategory',
  templateUrl: './newdocumentcategory.component.html',
  styleUrls: ['./newdocumentcategory.component.css'],
})
export class NewdocumentcategoryComponent implements OnInit {
  CategoryId: any = 0;
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
    let CategoryId = this.currentRoute.snapshot.paramMap.get('id');

    if (CategoryId == null) this.ClearData();
    else {
      this.service
        .GetEmployerDocumentCategory(parseInt(CategoryId))
        .subscribe((Response) => {
          this.CategoryId = Response.EmployerDocumentCategory.CategoryId;

          this.Description = Response.EmployerDocumentCategory.Description;
          this.Active = Response.EmployerDocumentCategory.Active;
        });
    }
  }
  onSubmit(Description, Active) {
    let CategoryId = this.currentRoute.snapshot.paramMap.get('id');
    if (CategoryId == null) {
      //Add level.....

      this.service
        .AddEmployerDocumentCategory(Description, Active, this.Delete)
        .subscribe((Response) => {
          console.log(Description, Active);

          this.router.navigate(['/administrator/employer/documentCategory']);
          this.toastr.success('Record Added Successfuly');
        });
    } else {
      this.service
        .UpdateEmployerDocumentCategory(
          CategoryId,
          Description,
          Active,
          this.Delete
        )
        .subscribe((Response) => {
          this.router.navigate(['/administrator/employer/documentCategory']);
          this.toastr.info('Record Updated Successfuly');
        });
    }
  }
  ClearData() {
    this.CategoryId = '';
    this.Description = '';
    this.Active = '';
  }

  religionList() {
    this.router.navigate(['/employer/documentCategory']);
  }
}

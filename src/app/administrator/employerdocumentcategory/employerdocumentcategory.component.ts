import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employerdocumentcategory',
  templateUrl: './employerdocumentcategory.component.html',
  styleUrls: ['./employerdocumentcategory.component.css'],
})
export class EmployerdocumentcategoryComponent implements OnInit {
  categoryList: any;
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
    this.service.GetAllEmployerDocumentCategory().subscribe((Response) => {
      this.categoryList = Response;
    });
  }
  openForEdit(Id: number) {
    this.router.navigate([
      '/administrator/employer/documentCategory/new/edit/' + Id,
    ]);
  }
  DeleteEmployerDocumentCategory(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerDocumentCategory(id).subscribe((Response) => {
        this.toastr.error('Record Deleted Successfully');
        this.refreshList();
      });
  }
}

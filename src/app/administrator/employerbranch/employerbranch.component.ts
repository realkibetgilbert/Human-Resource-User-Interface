import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employerbranch',
  templateUrl: './employerbranch.component.html',
  styleUrls: ['./employerbranch.component.css'],
})
export class EmployerbranchComponent implements OnInit {
  branchlist: any;
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
    this.service.GetAllEmployerBranch().subscribe((Response) => {
      this.branchlist = Response;
    });
  }
  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employer/branch/new/edit/' + Id]);
  }
  DeleteEmployerBranch(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerBranch(id).subscribe((Response) => {
        this.refreshList();
        this.toastr.error(
          'Record Deleted Successfully',
          'HR Management System'
        );
      });
  }
}

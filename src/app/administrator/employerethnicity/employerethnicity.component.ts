import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employerethnicity',
  templateUrl: './employerethnicity.component.html',
  styleUrls: ['./employerethnicity.component.css'],
})
export class EmployerethnicityComponent implements OnInit {
  ethnicityList: any;
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
    this.service.GetAllEmployerEthnicity().subscribe((Response) => {
      this.ethnicityList = Response;
    });
  }
  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employer/ethnicity/new/edit/' + Id]);
  }
  DeleteEmployerEthnicity(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerEthnicity(id).subscribe((Response) => {
        this.toastr.error(
          'Record Deleted Successfully',
          'HR Management System'
        );
        this.refreshList();
      });
  }
}

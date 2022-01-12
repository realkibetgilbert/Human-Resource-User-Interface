import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employertrainer',
  templateUrl: './employertrainer.component.html',
  styleUrls: ['./employertrainer.component.css'],
})
export class EmployertrainerComponent implements OnInit {
  trainerList: any;
  p: number = 1;
  constructor(
    private service: SharedService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.GetAllEmployerTrainer().subscribe((Response) => {
      this.trainerList = Response;
    });
  }
  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employer/trainer/new/edit/' + Id]);
  }
  DeleteEmployerTrainer(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerTrainer(id).subscribe((Response) => {
        this.toastr.error(
          'Record Deleted Successfully!',
          'HR Management System'
        );
        this.refreshList();
      });
  }
}

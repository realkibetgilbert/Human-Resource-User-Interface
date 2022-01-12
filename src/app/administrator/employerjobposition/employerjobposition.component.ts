import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employerjobposition',
  templateUrl: './employerjobposition.component.html',
  styleUrls: ['./employerjobposition.component.css'],
})
export class EmployerjobpositionComponent implements OnInit {
  colSpan: number = 4;
  jobpositionlist: any;
  p: number = 1;
  constructor(
    private service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.refreshlist();
  }
  refreshlist() {
    this.service.GetAllJobPosition().subscribe((Response) => {
      this.jobpositionlist = Response;
    });
  }
  openForEdit(Id: number) {
    this.router.navigate([
      '/administrator/employer/jobposition/display/edit/' + Id,
    ]);
  }

  DeleteJobPosition(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteJobPosition(id).subscribe((Response) => {
        this.refreshlist();
        this.toastr.error('Process Succeeded', 'HR Management System');
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employerlevel',
  templateUrl: './employerlevel.component.html',
  styleUrls: ['./employerlevel.component.css'],
})
export class EmployerlevelComponent implements OnInit {
  levellist: any;
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
    this.service.GetAllEmployerLevel().subscribe((Response) => {
      this.levellist = Response;
    });
  }
  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employer/level/new/edit/' + Id]);
  }
  DeleteEmployerLevel(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerLevel(id).subscribe((Response) => {
        this.refreshList();
        this.toastr.error(
          'Record Deleted Successfully',
          'HR Management System'
        );
      });
  }
}

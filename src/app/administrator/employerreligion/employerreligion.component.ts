import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employerreligion',
  templateUrl: './employerreligion.component.html',
  styleUrls: ['./employerreligion.component.css'],
})
export class EmployerreligionComponent implements OnInit {
  religionList: any;
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
    this.service.GetAllEmployerReligion().subscribe((Response) => {
      this.religionList = Response;
    });
  }
  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employer/religion/new/edit/' + Id]);
  }
  DeleteEmployerReligion(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerReligion(id).subscribe((Response) => {
        this.toastr.error('Record Deleted Successfully');
        this.refreshList();
      });
  }
}

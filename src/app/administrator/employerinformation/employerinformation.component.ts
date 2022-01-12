import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employerinformation',
  templateUrl: './employerinformation.component.html',
  styleUrls: ['./employerinformation.component.css'],
})
export class EmployerinformationComponent implements OnInit {
  employerlist: any;
  //this will loop the image from storage folder in Api
  //can you save a run
  //micropoint213434071.jpeg-this is the name stored  in the database during insert
  // okay thanks buddy lemee save and run,...we seee
  // before you disconnect i still have a quiz....
  imageUrl: string = 'http://localhost:49986/image/';
  //image name ni same na
  constructor(
    private service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.refreshlist();
  }

  refreshlist() {
    this.service.GetAllEmployerInfo().subscribe((Response) => {
      console.log(Response);
      this.employerlist = Response;
    });
  }

  openForEdit(Id: number) {
    this.router.navigate([
      '/administrator/employer/information/new/edit/' + Id,
    ]);
  }
  DeleteEmployerInfo(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerInfo(id).subscribe((Response) => {
        this.refreshlist();

        this.toastr.error('Deleted Successfully!', 'HR Management System');
      });
  }
}

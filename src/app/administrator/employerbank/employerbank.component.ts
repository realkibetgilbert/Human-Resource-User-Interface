import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employerbank',
  templateUrl: './employerbank.component.html',
  styleUrls: ['./employerbank.component.css'],
})
export class EmployerbankComponent implements OnInit {
  employerbanklist: any;

  constructor(
    private service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.refreshlist();
  }
  refreshlist() {
    this.service.GetAllEmployerBank().subscribe((Response) => {
      console.log(Response);
      this.employerbanklist = Response;
    });
  }
  //edit employer bank
  openForEdit(Id: number) {
    this.router.navigate(['/administrator/employer/bank/new/edit/' + Id]);
  }

  DeleteEmployerBank(id: number) {
    if (confirm('Are you sure you want to delete this record?'))
      this.service.DeleteEmployerBank(id).subscribe((Response) => {
        this.refreshlist();

        this.toastr.error(
          'Record Deleted Successfully!',
          'HR Management System'
        );
      });
  }
}

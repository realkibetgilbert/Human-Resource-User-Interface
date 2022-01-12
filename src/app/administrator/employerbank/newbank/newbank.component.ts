import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-newbank',
  templateUrl: './newbank.component.html',
  styleUrls: ['./newbank.component.css'],
})
export class NewbankComponent implements OnInit {
  BankId: any = 0;
  Code: any = '';
  Name: any = '';
  Active: any = '';
  BankAccount: any = '';
  Address1: any = '';
  Address2: any = '';
  City: any = '';
  PostalCode: any = '';
  State: any = '';
  Country: any = '';
  Telephone: any = '';
  Fax: any = '';
  Delete: boolean = false;

  countries = [
    'Algeria',
    'Angola',
    'Cameroon',
    'Chad',
    'Comoros',
    'Djibouti',
    'Kenya',
    'Uganda',
    'Tanzania',
    'Kuwait',
    'Ghana',
    'Nigeria',
    'Rwanda',
    'Burundi',
    'SouthAfrica',
    'Canada',
  ];

  constructor(
    private currentRoute: ActivatedRoute,
    public service: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let BankId = this.currentRoute.snapshot.paramMap.get('id');
    console.log(BankId);

    if (BankId == null) this.ClearData();
    else {
      this.service.GetEmployerBank(parseInt(BankId)).subscribe((Response) => {
        console.log(Response);
        this.BankId = Response.EmployerBank.id;
        this.Code = Response.EmployerBank.Code;
        this.Name = Response.EmployerBank.Name;
        this.Active = Response.EmployerBank.Active;
        this.BankAccount = Response.EmployerBank.BankAccount;
        this.Address1 = Response.EmployerBank.Address1;
        this.Address2 = Response.EmployerBank.Address2;
        this.City = Response.EmployerBank.City;
        this.PostalCode = Response.EmployerBank.PostalCode;

        this.State = Response.EmployerBank.State;
        this.Country = Response.EmployerBank.Country;
        this.Telephone = Response.EmployerBank.Telephone;
        this.Fax = Response.EmployerBank.Fax;
      });
    }
  }
  onSubmit(
    Code,
    Name,
    Active,
    BankAccount,
    Address1,
    Address2,
    City,
    PostalCode,
    State,
    Country,
    Telephone,
    Fax
  ) {
    let BankId = this.currentRoute.snapshot.paramMap.get('id');
    if (BankId == null) {
      //Add JobPosition

      this.service
        .AddEmployerBank(
          Code,
          Name,
          Active,
          BankAccount,
          Address1,
          Address2,
          City,
          PostalCode,
          State,
          Country,
          Telephone,
          Fax,
          this.Delete
        )
        .subscribe((Response) => {
          console.log(
            Code,
            Name,
            Active,
            BankAccount,
            Address1,
            Address2,
            City,
            PostalCode,
            State,
            Country,
            Telephone,
            Fax
          );
          this.toastr.success(
            'Record Saved successfuly',
            'HR Management System'
          );

          this.router.navigate(['/administrator/employer/bank']);
        });
    } else {
      this.service
        .UpdateEmployerBank(
          BankId,
          Code,
          Name,
          Active,
          BankAccount,
          Address1,
          Address2,
          City,
          PostalCode,
          State,
          Country,
          Telephone,
          Fax,
          this.Delete
        )
        .subscribe((Response) => {
          this.router.navigate(['/administrator/employer/bank']);
          this.toastr.info(
            'Record Updated Successfuly',
            'HR Management System'
          );
        });
    }
  }
  goToBank() {
    this.router.navigate(['/administrator/employer/bank']);
  }
  ClearData() {
    this.BankId = '';
    this.Code = '';
    this.Name = '';
    this.Active = '';
    this.BankAccount = '';
    this.Address1 = '';
    this.Address2 = '';
    this.City = '';
    this.PostalCode = '';
    this.State = '';
    this.Country = '';
    this.Telephone = '';
    this.Fax = '';
  }

  employerbanklist() {
    this.router.navigate(['/administrator/employer/bank']);
  }
}

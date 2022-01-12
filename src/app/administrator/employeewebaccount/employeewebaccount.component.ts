import { Component, OnInit } from '@angular/core';
interface Account {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employeewebaccount',
  templateUrl: './employeewebaccount.component.html',
  styleUrls: ['./employeewebaccount.component.css']
})
export class EmployeewebaccountComponent implements OnInit {
  selectedValue: string;
  selectedAccount: string;

  accounts: Account[] = [
    {value: 'no web accounts-0', viewValue: 'No Web Acounts'},
    {value: 'active web accounts-1', viewValue: 'Active Web Accounts'},
    {value: 'disabled web accounts-2', viewValue: 'Disabled Web Accounts'}
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-leave-transaction-summary',
  templateUrl: './leave-transaction-summary.component.html',
  styleUrls: ['./leave-transaction-summary.component.css']
})
export class LeaveTransactionSummaryComponent implements OnInit {


  selectedValue: string;
  selectedMonth: string;

  months: Month[] = [
    {value: 'one', viewValue: '1'},
    {value: 'two', viewValue: '2'},
    {value: 'three', viewValue: '3'},
    {value: 'three', viewValue: '4'},
    {value: 'three', viewValue: '5'},
    {value: 'three', viewValue: '6'},
    {value: 'three', viewValue: '7'},
    {value: 'three', viewValue: '8'},
    {value: 'three', viewValue: '9'},
    {value: 'three', viewValue: '10'},
    {value: 'three', viewValue: '11'},
    {value: 'three', viewValue: '12'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

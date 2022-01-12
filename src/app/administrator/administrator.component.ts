import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
})
export class AdministratorComponent implements OnInit {
  ngOnInit() {
    $('.employee-btn').click(function () {
      $('ul.employee-show').toggleClass('show1');
    });
    $('.Leave-btn').click(function () {
      $('ul.Leave-show').toggleClass('show2');
    });
    $('.employer-btn').click(function () {
      $('ul.employer-show').toggleClass('show3');
    });
    $('.Attendance-btn').click(function () {
      $('ul.Attendance-show').toggleClass('show4');
    });
    $('.Team-btn').click(function () {
      $('ul.Team-show').toggleClass('show5');
    });

    $('.Expense-btn').click(function () {
      $('ul.Expense-show').toggleClass('show6');
    });

    $('.Document-btn').click(function () {
      $('ul.Document-show').toggleClass('show7');
    });

    $('.Payroll-btn').click(function () {
      $('ul.Payroll-show').toggleClass('show8');
    });

    $('.Account-btn').click(function () {
      $('ul.Account-show').toggleClass('show9');
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private ToastrService: ToastrService,
    private Router: Router
  ) {}
  logOut() {
    if (confirm('Are you sure you want to log out?')) {
      this.ToastrService.warning(' Logout  Successfull');
      this.Router.navigate(['/login']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { features } from 'process';
import { ToastrService } from 'ngx-toastr';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  logIn() {
    this.toastr.success('Login Successfull');
    this.router.navigate(['/administrator/home']);
  }
}

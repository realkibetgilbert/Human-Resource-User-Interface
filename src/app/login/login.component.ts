import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, Routes } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email: string;
  password: string;
  formData: FormGroup;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl('kibetgilly354@gmail.com'),
      password: new FormControl('123four'),
    });
  }

  onClickSubmitData(data: any) {
    this.email = data.email;
    this.password = data.password;

    this.authService.login(this.email, this.password).subscribe((data) => {
      console.log('Is log in success : ' + data);
    });
    if (data) this.router.navigate(['./administrator/home']);
  }

  // logIn() {
  //   this.toastr.success('Login Successfull');
  //   this.router.navigate(['/administrator/home']);
  // }
}

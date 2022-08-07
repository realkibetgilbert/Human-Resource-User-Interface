import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  login(email: string, password: string): Observable<boolean> {
    console.log(email);
    console.log(password);
    this.isUserLoggedIn =
      email == 'kibetgilly354@gmail.com' && password == '123four';

    localStorage.setItem(
      'isUserLoggedIn',
      this.isUserLoggedIn ? 'true' : 'false'
    );
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap((val) => {
        console.log('Is user Aunthetication Succesfull :' + val);
      })
    );
  }

  logOut(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
  constructor() {}
}

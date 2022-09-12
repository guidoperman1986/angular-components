import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value: username } = control;

    return this.authService.usernameAvailable(username).pipe(
      map(() => null),
      catchError((err) => {
        console.log(err);
        return of({ nonUniqueOperator: true });
      })
    );
  };
}

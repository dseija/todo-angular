import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUserState } from '../users.types';
import { registerSubmit } from '../_store/users.actions';
import {
  selectErrorMessage,
  selectProcessing,
  selectUserName,
} from '../_store/users.selectors';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent {
  form!: FormGroup;

  errorMessage$ = this.store.select(selectErrorMessage);
  processing$ = this.store.select(selectProcessing);
  userName$ = this.store.select(selectUserName);

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<IUserState>,
    private readonly router: Router,
    private readonly _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.errorMessage$.subscribe((error) => {
      if (error) this.showMessage(error);
    });

    this.userName$.subscribe((username) => {
      if (username)
        this.router.navigateByUrl('/signin/register/success', {
          replaceUrl: true,
        });
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(registerSubmit(this.form.value));
    }
  }

  showMessage(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}

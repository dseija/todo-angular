import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUserState } from '../users.types';
import { loginSubmit } from '../_store/users.actions';
import {
  selectErrorMessage,
  selectIsLoggedIn,
  selectProcessing,
} from '../_store/users.selectors';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss'],
})
export class UserSigninComponent implements OnInit {
  form!: FormGroup;

  errorMessage$ = this.store.select(selectErrorMessage);
  isLoggedIn$ = this.store.select(selectIsLoggedIn);
  processing$ = this.store.select(selectProcessing);

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<IUserState>,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.errorMessage$.subscribe((error) => {
      if (error) this.showMessage(error);
    });

    this.isLoggedIn$.subscribe((status) => {
      if (status) this.router.navigateByUrl('/', { replaceUrl: true });
    });

    this.route.params.subscribe((params) => {
      if (params['action'] === 'register' && params['status'] === 'success') {
        this.showMessage('Your account has been created! Now you can sign in.');
      }
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(loginSubmit(this.form.value));
    }
  }

  showMessage(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private readonly store: Store<IUserState>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.errorMessage$.subscribe((error) => {
      if (error) {
        console.log({ error });
      }
    });
    this.isLoggedIn$.subscribe((status) => {
      if (status) {
        console.log('Login Success!');
      }
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(loginSubmit(this.form.value));
    }
  }
}

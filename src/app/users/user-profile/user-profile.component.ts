import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUserState } from '../users.types';
import { loadUser } from '../_store/users.actions';
import {
  selectErrorMessage,
  selectProcessing,
  selectUserData,
} from '../_store/users.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userData$ = this.store.select(selectUserData);
  errorMessage$ = this.store.select(selectErrorMessage);
  processing$ = this.store.select(selectProcessing);

  constructor(
    private readonly store: Store<IUserState>,
    private readonly _snackBar: MatSnackBar,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(loadUser());
    this.errorMessage$.subscribe((error) => {
      if (error) {
        const callback = error.toLowerCase().includes('sign')
          ? () => {
              this.router.navigateByUrl('/signin', { replaceUrl: true });
            }
          : undefined;
        this.showMessage(error, callback);
      }
    });
  }

  showMessage(message: string, callback?: () => void) {
    this._snackBar
      .open(message, 'Close', {
        duration: 5000,
        verticalPosition: 'top',
      })
      .afterDismissed()
      .subscribe(() => {
        if (callback) callback();
      });
  }
}

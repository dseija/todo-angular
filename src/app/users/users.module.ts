import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UsersRoutingModule } from './users-routing.module';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UsersService } from './users.service';
import { usersReducer } from './_store/users.reducer';
import { UsersEffects } from './_store/users.effects';

@NgModule({
  declarations: [UserSigninComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    StoreModule.forFeature('usersState', usersReducer),
    EffectsModule.forFeature(UsersEffects),

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [UsersService],
})
export class UsersModule {}

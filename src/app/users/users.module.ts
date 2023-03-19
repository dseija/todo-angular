import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UsersRoutingModule } from './users-routing.module';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UsersService } from './users.service';
import { usersReducer } from './_store/users.reducer';
import { UsersEffects } from './_store/users.effects';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LayoutModule } from '../layout/layout.module';
import { MatListModule } from '@angular/material/list';
import { UserSignupComponent } from './user-signup/user-signup.component';

@NgModule({
  declarations: [
    UserSigninComponent,
    UsersComponent,
    UserProfileComponent,
    UserSignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    LayoutModule,
    StoreModule.forFeature('usersState', usersReducer),
    EffectsModule.forFeature(UsersEffects),

    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [UsersService],
})
export class UsersModule {}

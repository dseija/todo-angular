import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sessionGuard } from '../session/session.guard';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'signin', component: UserSigninComponent },
  { path: 'profile', component: UsersComponent, canActivate: [sessionGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userAuthGuard } from '../users/userAuth.guard';
import { SettingsComponent } from './settings/settings.component';

const settingsRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [userAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(settingsRoutes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}

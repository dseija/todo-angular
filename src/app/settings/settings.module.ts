import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StoreModule } from '@ngrx/store';
import { settingsReducer } from './_store/settings.reducer';

@NgModule({
  declarations: [SettingsComponent, SettingListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('settingsState', settingsReducer),
    SettingsRoutingModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
  ],
})
export class SettingsModule {}

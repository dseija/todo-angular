import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { saveSettings } from '../settings.helpers';
import { ISettingsState, SettingsThemeMode } from '../settings.types';
import { toggleThemeMode } from '../_store/settings.actions';
import {
  selectSettings,
  selectThemeModeSetting,
} from '../_store/settings.selectors';

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss'],
})
export class SettingListComponent implements OnInit {
  settings!: ISettingsState;
  themeMode$!: Observable<SettingsThemeMode>;
  isDarkMode = false;

  constructor(private readonly store: Store<ISettingsState>) {}

  ngOnInit() {
    this.themeMode$ = this.store.select(selectThemeModeSetting);
    this.themeMode$.subscribe((themeMode) => {
      this.isDarkMode = themeMode === 'dark';
    });
    this.store.select(selectSettings).subscribe((settings) => {
      saveSettings(settings);
    });
  }

  toggleThemeMode() {
    this.store.dispatch(toggleThemeMode());
  }
}

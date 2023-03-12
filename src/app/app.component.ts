import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectThemeModeSetting } from './settings/_store/settings.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.select(selectThemeModeSetting).subscribe((themeMode) => {
      this.className = themeMode === 'dark' ? 'darkMode' : '';
    });
  }
}

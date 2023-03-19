import { Component, Input } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() mode: MatDrawerMode = 'side';
  @Input() sidebarOpen = false;

  isOverMode() {
    return this.mode === 'over';
  }

  isSideMode() {
    return this.mode === 'side';
  }

  logout() {
    this.sessionService.clearCookies();
    this.router.navigateByUrl('/signin', { replaceUrl: true });
  }

  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}
}

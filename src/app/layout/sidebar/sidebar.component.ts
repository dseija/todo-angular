import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() sidebarOpen = false;

  logout() {
    this.userService.clearCookies();
    this.router.navigateByUrl('/signin', { replaceUrl: true });
  }

  constructor(
    private readonly userService: UsersService,
    private readonly router: Router
  ) {}
}

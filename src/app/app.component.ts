import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { NgbNavOutlet, NgbNavItem, NgbNav, NgbNavLinkButton, NgbNavContent, NgbNavLink } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';
import { LINKS_ROUTE } from './shared/constants/links-route.constants';
import { ILinks } from './shared/interfaces/links.interface';
import { AuthService } from './services/auth.service';
import { take, catchError, of } from 'rxjs';
import { UserInfoComponent } from './modules/user-info/user-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgbNavOutlet, NgbNavItem, NgbNav, NgbNavLinkButton, NgbNavContent, AsyncPipe, NgbNavLink, UserInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  auth = inject(AuthService);
  isUserLoggedIn$ = this.auth.getCurrentUser().pipe(catchError(() => of(null)));

  links: ILinks[] = LINKS_ROUTE;


  public logout() {
    this.auth.doLogout().pipe(take(1)).subscribe(() => {
      console.log('You have been successfully logged out!');
      this.router.navigate(['/login']);
    });
  }
}

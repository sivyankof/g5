import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { NgbNavOutlet, NgbNavItem, NgbNav, NgbNavLinkButton, NgbNavContent, NgbNavLink } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';
import { LINKS_ROUTE } from './shared/constants/links-route.constants';
import { ILinks } from './interfaces/links.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GithubAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgbNavOutlet, NgbNavItem, NgbNav, NgbNavLinkButton, NgbNavContent, AsyncPipe, NgbNavLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  route = inject(ActivatedRoute);
  title = 'g5';

  links: ILinks[] = LINKS_ROUTE;

  constructor(
    public afAuth: AngularFireAuth,
  ) {
  }

  ngOnInit() {
    this.doGitHubLogin();

  }

  doGitHubLogin() {
    return this.authLogin(new GithubAuthProvider());
  }

  private async authLogin(provider: any) {
    try {
      const result = await this.afAuth
        .signInWithRedirect(provider);
      console.log('You have been successfully logged in!');
    } catch (error) {
      console.log(error);
    }
  }
}

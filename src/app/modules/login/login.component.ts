import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    AngularFireAuthModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(() => {
        this.router.navigate(['blocks']);
      });
  }

  tryGitHubLogin() {
    this.authService.doGitHubLogin()
      .then(() => {
        this.router.navigate(['blocks']);
      });
  }
}

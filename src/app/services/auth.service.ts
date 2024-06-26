import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GithubAuthProvider, GoogleAuthProvider, User } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fireAuth = inject(AngularFireAuth);

  doGoogleLogin() {
    return this.authLogin(new GoogleAuthProvider());
  }

  doGitHubLogin() {
    return this.authLogin(new GithubAuthProvider());
  }

  doLogout() {
    return from(this.fireAuth.signOut());
  }

  authLogin(provider: any) {
    return this.fireAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCurrentUser(): Observable<User> {
    return this.fireAuth.user as Observable<User>
  }
}

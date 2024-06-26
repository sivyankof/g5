import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { map, catchError, of } from 'rxjs';

export const activateGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router: Router = inject(Router);
  return auth.getCurrentUser().pipe(
    map(user => {
      if (user) {
        console.log(user);
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    }),
  );
};

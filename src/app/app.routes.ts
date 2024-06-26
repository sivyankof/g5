import { Routes } from '@angular/router';
import { activateGuard } from './shared/guards/activate.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () => import('./modules/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'blocks',
    loadComponent: () => import('./modules/blocks/blocks.component').then(m => m.BlocksComponent),
    canActivate: [activateGuard],
  },
  {
    path: 'table',
    loadComponent: () => import('./modules/table/table.component').then(m => m.TableComponent),
    canActivate: [activateGuard],
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./modules/details/details.component').then(m => m.DetailsComponent),
    canActivate: [activateGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

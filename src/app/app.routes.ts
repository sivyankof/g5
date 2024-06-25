import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blocks',
    loadComponent: () => import('./modules/blocks/blocks.component').then(m => m.BlocksComponent),
  },
  {
    path: 'table',
    loadComponent: () => import('./modules/table/table.component').then(m => m.TableComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./modules/details/details.component').then(m => m.DetailsComponent),
  }
];

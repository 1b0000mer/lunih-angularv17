import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./content/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./content/management/management.module').then(m => m.ManagementModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./content/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./content/page404/page404.component').then(m => m.Page404Component)
      }
    ]
  }
];

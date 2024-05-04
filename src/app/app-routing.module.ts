import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './content/page404/page404.component';
import { MainLayoutComponent } from './layout/main/main-layout/main-layout.component';

const routes: Routes = [
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
        component: Page404Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

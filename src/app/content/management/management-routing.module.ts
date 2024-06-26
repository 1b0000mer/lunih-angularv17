import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementLayoutComponent } from '../../layout/management/management-layout/management-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: ManagementLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },

    ]
  },
  {
    path: 'categories',
    component: ManagementLayoutComponent,
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }

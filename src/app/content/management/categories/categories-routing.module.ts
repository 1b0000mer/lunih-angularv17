import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'faculty',
        pathMatch: 'full'
      },
      {
        path: 'faculty',
        loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule)
      },
      {
        path: 'industry',
        loadChildren: () => import('./industry/industry.module').then(m => m.IndustryModule)
      },
      {
        path: 'program',
        loadChildren: () => import('./program/program.module').then(m => m.ProgramModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

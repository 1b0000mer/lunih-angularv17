import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyListComponent } from './faculty-list/faculty-list.component';

const routes: Routes = [
  {
    path: '',
    component: FacultyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }

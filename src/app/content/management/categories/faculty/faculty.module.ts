import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyFormComponent } from './faculty-form/faculty-form.component';


@NgModule({
  declarations: [
    FacultyListComponent,
    FacultyFormComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule
  ]
})
export class FacultyModule { }

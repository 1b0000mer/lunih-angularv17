import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramFormComponent } from './program-form/program-form.component';


@NgModule({
  declarations: [
    ProgramListComponent,
    ProgramFormComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule
  ]
})
export class ProgramModule { }

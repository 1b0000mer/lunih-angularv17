import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryRoutingModule } from './industry-routing.module';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { IndustryFormComponent } from './industry-form/industry-form.component';


@NgModule({
  declarations: [
    IndustryListComponent,
    IndustryFormComponent
  ],
  imports: [
    CommonModule,
    IndustryRoutingModule
  ]
})
export class IndustryModule { }

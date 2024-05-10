import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementLayoutModule } from '../../layout/management/management-layout.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ManagementLayoutModule    
  ],
})
export class ManagementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementLayoutModule } from '../../layout/management/management-layout.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane } from '@coreui/icons';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ManagementLayoutModule,
    SharedModule
    // IconModule,
    
  ],
})
export class ManagementModule { }

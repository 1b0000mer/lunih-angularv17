import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementSidebarComponent } from './management-sidebar/management-sidebar.component';
import { ManagementHeaderComponent } from './management-header/management-header.component';
import { ManagementFooterComponent } from './management-footer/management-footer.component';
import { ManagementLayoutComponent } from './management-layout/management-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ManagementSidebarComponent,
    ManagementHeaderComponent,
    ManagementFooterComponent,
    ManagementLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ManagementLayoutModule { }

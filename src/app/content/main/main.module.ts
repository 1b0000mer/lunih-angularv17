import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MainLayoutModule } from '../../layout/main/main-layout.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainLayoutModule,
    IconModule
  ],
  providers: [
    IconSetService
  ]
})
export class MainModule { }

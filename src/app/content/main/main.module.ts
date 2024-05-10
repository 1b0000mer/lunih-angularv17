import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainLayoutModule } from '../../layout/main/main-layout.module';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainLayoutModule,
    IconModule
  ]
})
export class MainModule { }

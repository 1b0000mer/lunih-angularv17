import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainLayoutModule } from '../../layout/main/main-layout.module';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane } from '@coreui/icons';

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
  ],
  providers: [
    IconSetService
  ]
})
export class MainModule { 
  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = { 
      cilListNumbered, 
      cilPaperPlane 
    }
  }
}

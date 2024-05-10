import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { RouterModule } from '@angular/router';
import { ButtonDirective, CollapseDirective, FooterModule, GridModule, NavbarModule, NavModule } from '@coreui/angular';



@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    NavModule,
    GridModule,
    CollapseDirective,
    ButtonDirective,
    FooterModule
  ]
})
export class MainLayoutModule { }

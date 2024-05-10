import { NgModule } from '@angular/core';
import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ManagementHeaderComponent } from './management-header/management-header.component';
import { ManagementFooterComponent } from './management-footer/management-footer.component';
import { ManagementLayoutComponent } from './management-layout/management-layout.component';
import {
  AvatarComponent,
  BadgeComponent,
  BreadcrumbRouterComponent,
  ButtonDirective,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ProgressBarDirective,
  ProgressComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  TextColorDirective,
  ThemeDirective,
} from '@coreui/angular';

import { NgScrollbar } from 'ngx-scrollbar';
import {
  IconDirective,
  IconModule,
} from '@coreui/icons-angular';

@NgModule({
  declarations: [
    ManagementHeaderComponent,
    ManagementFooterComponent,
    ManagementLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarTogglerDirective,
    ShadowOnScrollDirective,
    ButtonDirective,
    NgScrollbar,
    IconModule,
    HeaderTogglerDirective,
    SidebarToggleDirective,
    IconDirective,
    HeaderNavComponent,
    NavItemComponent,
    NavLinkDirective,
    RouterLink,
    RouterLinkActive,
    NgTemplateOutlet,
    BreadcrumbRouterComponent,
    ThemeDirective,
    DropdownComponent,
    DropdownToggleDirective,
    TextColorDirective,
    AvatarComponent,
    DropdownMenuDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    BadgeComponent,
    DropdownDividerDirective,
    ProgressBarDirective,
    ProgressComponent,
    NgStyle,
  ]
})
export class ManagementLayoutModule { }

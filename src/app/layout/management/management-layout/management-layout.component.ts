import { Component } from '@angular/core';
import { navItems } from '../nav';

@Component({
  selector: 'app-management-layout',
  templateUrl: './management-layout.component.html',
  styleUrl: './management-layout.component.scss'
})
export class ManagementLayoutComponent {
  public navItems = navItems;
}

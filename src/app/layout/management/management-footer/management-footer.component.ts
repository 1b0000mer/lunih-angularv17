import { Component } from '@angular/core';

@Component({
  selector: 'app-management-footer',
  templateUrl: './management-footer.component.html',
  styleUrl: './management-footer.component.scss'
})
export class ManagementFooterComponent {
  year = new Date().getFullYear();
}

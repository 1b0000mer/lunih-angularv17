import { Component, inject } from '@angular/core';
import { AuthenticateService } from '../../../core/services/auth/authenticate.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

  private authSvc = inject(AuthenticateService);
  
  checkAuth() {
    if (this.authSvc.checkRoleAdmin()) return true;
    return false;
  }

}

import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from '../services/auth/authenticate.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService: AuthenticateService = inject(AuthenticateService);
  const router: Router = inject(Router);
  const toast: ToastrService = inject(ToastrService);

  if (authService.checkRoleAdmin()) {
    return true;
  } else {
    toast.error('Unauthorized!');
    return router.navigateByUrl('/login');
  }

};

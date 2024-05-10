import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from '../services/auth/authenticate.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private authSvc = inject(AuthenticateService);

  constructor(
    private toast: ToastrService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here
        switch (error.status) {
          case 401:
          case 403:
            this.authSvc.doLogout();
            this.toast.error('Unauthorized!');
            break;
          case 500:
            this.toast.error('Server Error!');
            break;
          case 0:
            this.toast.error(error.statusText)
            break;
        }
        
        //throw error as per requirement
        return throwError(() => error.error);
      })
    );
  }
}
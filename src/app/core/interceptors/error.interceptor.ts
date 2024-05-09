import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

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
          case 500:
            this.toast.error(error.error.message);
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
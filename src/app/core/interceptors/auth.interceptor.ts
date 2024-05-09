import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthenticateService } from '../services/auth/authenticate.service';
import { UrlConstant } from '../constants/url.constant';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthenticateService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    let requestClone: HttpRequest<any>;
    if (UrlConstant.PUBLIC_URL.some(x => x.method === request.method && new RegExp(x.regex).test(request.url))) {
      requestClone = this.addLanguageOnly(request);
    } else if (this.authService.getAuthData() !== null) {
      requestClone = this.addLanguageAndToken(request);
    } else {
      requestClone = this.addLanguageOnly(request);
    }
    return next.handle(requestClone);
  }

  private addLanguageOnly(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        'Accept-Language': localStorage.getItem('language') === 'en' ? 'en' : 'lv'
      }
    })
  }

  private addLanguageAndToken(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getAuthData().token}`,
        'Accept-Language': localStorage.getItem('language') === 'en' ? 'en' : 'lv'
      }
    })
  }
}
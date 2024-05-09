import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '../../constants/url.constant';
import { AuthModel, LoginFormModel } from '../../models/common/auth.model';
import { catchError, Observable, throwError } from 'rxjs';
import { SystemConstant } from '../../constants/system.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private apiUrl: string;
  
  constructor(
    private http: HttpClient
    ) { 
    this.apiUrl = UrlConstant.API.LOGIN;
  }

  // login username/pass
  doLoginForm(model: LoginFormModel): Observable<AuthModel> {
    return this.http.post<AuthModel>(this.apiUrl, model);
  }

  // set/ get localStorage model Auth
  getAuthData(): AuthModel {
    return JSON.parse(localStorage.getItem(SystemConstant.CURRENT_INFO) || '{ "roles": []}');
  }

  setAuthData(model: AuthModel): void {
    localStorage.setItem(
      SystemConstant.CURRENT_INFO,
      JSON.stringify(model)
    );
  }

  // logout
  doLogout(): void {
    localStorage.removeItem(SystemConstant.CURRENT_INFO);
    localStorage.removeItem(SystemConstant.CURRENT_INFO_GOOGLE);
    window.location.assign('../');
  }

  // check roles
  checkRoleAdmin(): boolean {
    const auth = this.getAuthData();
    let role = [];
    role = auth.roles.filter(item => item === SystemConstant.ROLE.ADMIN);
    if (role && role.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

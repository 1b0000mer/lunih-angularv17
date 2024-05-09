import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../../core/services/auth/authenticate.service';
import { Router } from '@angular/router';
import { UrlConstant } from '../../../core/constants/url.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoading: boolean = false;

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }

  doLogin() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.authService.doLoginForm(this.loginForm.value)
      .subscribe(res => {
        this.authService.setAuthData(res);
        if (this.authService.checkRoleAdmin()) {
          this.router.navigateByUrl(UrlConstant.ROUTE.MANAGEMENT.MANAGEMENT);
        } else {
          this.router.navigateByUrl(UrlConstant.ROUTE.MAIN.HOME);
        }
        this.isLoading = false;
      }, () => this.isLoading = false)
    }
    else {
      this.isLoading = false;
    }
  }

}

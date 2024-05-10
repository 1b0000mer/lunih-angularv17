import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../../../core/services/auth/authenticate.service';
import { Router } from '@angular/router';
import { UrlConstant } from '../../../core/constants/url.constant';
import { ToastrService } from 'ngx-toastr';
import { LanguageConstant } from '../../../core/constants/language.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  langData: Record<string, Record<string, string>> = LanguageConstant;
  langCode = localStorage.getItem('language') ?? 'en';

  isLoading: boolean = false;

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private router: Router,
    private toast: ToastrService
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
    this.setLoading(true);
    if (this.loginForm.valid) {
      this.authService.doLoginForm(this.loginForm.value)
      .subscribe({
        next: (res) => {
          this.authService.setAuthData(res);
          if (this.authService.checkRoleAdmin()) {
            this.router.navigateByUrl(UrlConstant.ROUTE.MANAGEMENT.MANAGEMENT);
          } else {
            this.router.navigateByUrl(UrlConstant.ROUTE.MAIN.HOME);
          }
          this.setLoading(false);
          this.toast.success(this.langData[this.langCode]['WELCOME_MSG']);
        },
        error: (err) => {
          this.setLoading(false); 
          this.toast.error(err.message);
        }
      })
    }
    else {
      this.setLoading(false);
    }
  }
  
  setLoading(value: boolean) {
    this.isLoading = value
  }

}

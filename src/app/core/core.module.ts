import { NgModule } from "@angular/core";
import { AuthenticateService } from "./services/auth/authenticate.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HttpInterceptorProviders } from "./interceptors";

@NgModule({
  providers: [
    AuthenticateService,
    HttpInterceptorProviders
  ],

  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
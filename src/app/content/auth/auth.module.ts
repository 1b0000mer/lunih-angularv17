import { NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { ButtonDirective, CardBodyComponent, CardComponent, CardGroupComponent, ColComponent, ContainerComponent, FormControlDirective, FormDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, RowComponent, SpinnerComponent, TextColorDirective } from '@coreui/angular';
import { IconDirective, IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,

    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    IconModule,
    SpinnerComponent,
    FormFeedbackComponent
  ],
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { IndustryRoutingModule } from './industry-routing.module';
import { IndustryListComponent } from './industry-list/industry-list.component';
import { IndustryFormComponent } from './industry-form/industry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ModalBodyComponent, ModalFooterComponent, TextColorDirective, FormDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, ButtonDirective, ButtonCloseDirective, SpinnerComponent, BadgeComponent, TableModule, TableDirective } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    IndustryListComponent,
    IndustryFormComponent
  ],
  imports: [
    CommonModule,
    IndustryRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    ContainerComponent,
    RowComponent,
    ColComponent,

    CardGroupComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    NzModalModule,
    
    TextColorDirective,
    FormDirective,
    FormControlDirective,
    FormFeedbackComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    
    ButtonDirective,
    ButtonCloseDirective,
    SpinnerComponent,
    BadgeComponent,
    
    TableModule,
    TableDirective,
    IconModule,
  ]
})
export class IndustryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyFormComponent } from './faculty-form/faculty-form.component';
import {
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
  FormControlDirective,
  ButtonDirective,
  SpinnerComponent,
  FormFeedbackComponent,
  CardHeaderComponent,
  CardFooterComponent,
  TableModule,
  TableDirective,
  BadgeComponent,
  ButtonCloseDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
} from '@coreui/angular';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { SharedModule } from '../../../shared/shared.module';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FacultyListComponent, FacultyFormComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,
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

  ],
})
export class FacultyModule {}

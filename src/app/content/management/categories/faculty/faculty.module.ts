import { NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyFormComponent } from './faculty-form/faculty-form.component';
import { ManagementModule } from '../../management.module';
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
  ThemeDirective,
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
    ManagementModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    SpinnerComponent,
    FormFeedbackComponent,
    TableModule,
    TableDirective,
    BadgeComponent,
    IconModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ThemeDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,

    NzModalModule
  ],
})
export class FacultyModule {}

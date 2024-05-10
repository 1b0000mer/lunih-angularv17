import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ProgramRoutingModule } from './program-routing.module';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramFormComponent } from './program-form/program-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ModalBodyComponent, ModalFooterComponent, TextColorDirective, FormDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, ButtonDirective, ButtonCloseDirective, SpinnerComponent, BadgeComponent, TableModule, TableDirective, FormModule, CollapseDirective } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    ProgramListComponent,
    ProgramFormComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule,

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
    FormModule,
    CollapseDirective,
    
    ButtonDirective,
    ButtonCloseDirective,
    SpinnerComponent,
    BadgeComponent,
    
    TableModule,
    TableDirective,
    IconModule,
  ]
})
export class ProgramModule { }

import { NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { TablePaginateComponent } from './table-paginate/table-paginate.component';
import { IconModule } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, SpinnerComponent, FormFeedbackComponent, TableModule, TableDirective, BadgeComponent, PaginationModule, PaginationComponent, PageItemDirective, PageLinkDirective } from '@coreui/angular';



@NgModule({
  declarations: [
    TablePaginateComponent
  ],
  imports: [
    CommonModule,

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
    PaginationComponent,
    PageItemDirective, 
    PageLinkDirective,
  ],
  exports: [
    TablePaginateComponent
  ]
})
export class SharedModule { }

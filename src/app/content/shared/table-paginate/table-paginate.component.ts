import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paginate } from '../../../core/models/paginate.model';

@Component({
  selector: 'app-table-paginate',
  templateUrl: './table-paginate.component.html',
  styleUrl: './table-paginate.component.scss'
})
export class TablePaginateComponent {
  @Input() pageConfig!: Paginate<any>;
  @Output() pageChange: EventEmitter<Paginate<any>> = new EventEmitter();

  setPage(pageNum: number) {
    this.pageConfig.currentPage = pageNum;
    this.refreshPage();
  }

  changedNumOfItem(numOfItem: string) {
    this.pageConfig.limit = Number.parseInt(numOfItem, 10);
    this.pageConfig.currentPage = 1;
    this.refreshPage();
  }

  refreshPage() {
    this.pageChange.emit(this.pageConfig);
  }

  getPageIndices(): number[] {
    return Array.from({ length: this.pageConfig.totalPage! }, (_, index) => index + 1);
  }

}

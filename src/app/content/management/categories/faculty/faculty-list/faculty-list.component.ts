import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalData } from '../../../../../core/models/common/modal-data.model';
import { Faculty } from '../../../../../core/models/categories/faculty.model';
import { Paginate } from '../../../../../core/models/paginate.model';
import { FacultyService } from '../../../../../core/services/management/categories/faculty/faculty.service';
import { ToastrService } from 'ngx-toastr';
import { SystemConstant } from '../../../../../core/constants/system.constant';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrl: './faculty-list.component.scss'
})
export class FacultyListComponent implements OnInit {

  modalData: ModalData<Faculty> = new ModalData<Faculty>();
  listFaculty: Paginate<Faculty> = new Paginate<Faculty>();
  searchValue = '';

  constructor(
    private facultySvc: FacultyService,
    private toast: ToastrService,
    private nzModalSvc: NzModalService
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean) {
    if (isSearch) this.listFaculty.currentPage = 1;
    this.facultySvc.getAllPaging(
      this.listFaculty.currentPage - 1,
      this.listFaculty.limit,
      this.searchValue
    ).subscribe({
      next: (res) => {
        this.listFaculty.currentPage = res.pageable.pageNumber + 1;
        this.listFaculty.limit = res.pageable.pageSize;
        this.listFaculty.totalPage = res.totalPages;
        this.listFaculty.totalItem = res.totalElements;
        this.listFaculty.data = res.content;
      },
      error: (err) => this.toast.error(err.message)
    })
  }

  pageChange(page: Paginate<Faculty>) {
    this.listFaculty = page;
    this.getDataPaging();
  }

  onChangeStatus(id: number) {
    if (confirm('CONFIRM_CHANGE_STATUS')) {
      this.facultySvc.changeStatus(id)
      .subscribe({
        error: (err) => err.message,
        complete: () => {
          this.toast.success('MSG_CHANGE_DONE');
          this.getDataPaging();
        }
      })
    }
  }

  onDelete(id: number) {
    if (confirm('CONFIRM_DELETE')) {
      this.facultySvc.delete(id)
      .subscribe({
        error: (err) => err.message,
        complete: () => {
          this.toast.success('MSG_UPDATE_DONE'); 
          this.getDataPaging();
        }
      })
    }
  }

  openModal(template: TemplateRef<any>, data?: Faculty) {
    if (data) {
      this.modalData.action = SystemConstant.ACTION.EDIT;
      this.modalData.data = data;
    } else {
      this.modalData.action = SystemConstant.ACTION.ADD;
    }

    this.nzModalSvc.create({
      nzStyle: {top: '8rem'},
      nzTitle: (data?.id ? 'EDIT_TITLE' : 'ADD_TITLE'),
      nzContent: template,
      nzFooter: null,
      nzMaskClosable: false
    });
    
  }

  closeModal(isRefresh?: boolean) {
    if (isRefresh) {
      this.getDataPaging();
    }
    this.nzModalSvc.closeAll();
  }

}

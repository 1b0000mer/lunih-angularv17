import { Component, OnInit, TemplateRef } from '@angular/core';
import { Program } from '../../../../../core/models/categories/program.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ToastrService } from 'ngx-toastr';
import { LanguageConstant } from '../../../../../core/constants/language.constant';
import { SystemConstant } from '../../../../../core/constants/system.constant';
import { ModalData } from '../../../../../core/models/common/modal-data.model';
import { Paginate } from '../../../../../core/models/paginate.model';
import { ProgramService } from '../../../../../core/services/management/categories/program/program.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.scss'
})
export class ProgramListComponent implements OnInit {

  langData: Record<string, Record<string, string>> = LanguageConstant;
  langCode = localStorage.getItem('language') ?? 'en';

  modalData: ModalData<Program> = new ModalData<Program>();
  listProgram: Paginate<Program> = new Paginate<Program>();
  searchValue = '';

  constructor(
    private programSvc: ProgramService,
    private toast: ToastrService,
    private nzModalSvc: NzModalService
  ) {}
  
  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean) {
    if (isSearch) this.listProgram.currentPage = 1;
    this.programSvc.getAllPaging(
      this.listProgram.currentPage - 1,
      this.listProgram.limit,
      this.searchValue
    ).subscribe({
      next: (res) => {
        this.listProgram.currentPage = res.pageable.pageNumber + 1;
        this.listProgram.limit = res.pageable.pageSize;
        this.listProgram.totalPage = res.totalPages;
        this.listProgram.totalItem = res.totalElements;
        this.listProgram.data = res.content;
      },
      error: (err) => this.toast.error(err.message)
    })
  }

  pageChange(page: Paginate<Program>) {
    this.listProgram = page;
    this.getDataPaging();
  }

  onChangeStatus(id: number) {
    if (confirm(this.langData[this.langCode]['CONFIRM_CHANGE_STATUS'])) {
      this.programSvc.changeStatus(id)
      .subscribe({
        error: (err) => this.toast.error(err.message),
        complete: () => {
          this.toast.success(this.langData[this.langCode]['MSG_CHANGE_DONE']);
          this.getDataPaging();
        }
      })
    }
  }

  onDelete(id: number) {
    if (confirm(this.langData[this.langCode]['CONFIRM_DELETE'])) {
      this.programSvc.delete(id)
      .subscribe({
        error: (err) => this.toast.error(err.message),
        complete: () => {
          this.toast.success(this.langData[this.langCode]['MSG_UPDATE_DONE']); 
          this.getDataPaging();
        }
      })
    }
  }

  openModal(template: TemplateRef<any>, data?: Program) {
    if (data) {
      this.modalData.action = SystemConstant.ACTION.EDIT;
      this.modalData.data = data;
    } else {
      this.modalData.action = SystemConstant.ACTION.ADD;
    }

    this.nzModalSvc.create({
      nzStyle: {top: '8rem'},
      nzTitle: (data?.id ? this.langData[this.langCode]['EDIT_TITLE'] : this.langData[this.langCode]['ADD_TITLE']),
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

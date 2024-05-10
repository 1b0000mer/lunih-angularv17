import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ToastrService } from 'ngx-toastr';
import { LanguageConstant } from '../../../../../core/constants/language.constant';
import { SystemConstant } from '../../../../../core/constants/system.constant';
import { Industry } from '../../../../../core/models/categories/industry.model';
import { ModalData } from '../../../../../core/models/common/modal-data.model';
import { Paginate } from '../../../../../core/models/paginate.model';
import { IndustryService } from '../../../../../core/services/management/categories/industry/industry.service';

@Component({
  selector: 'app-industry-list',
  templateUrl: './industry-list.component.html',
  styleUrl: './industry-list.component.scss'
})
export class IndustryListComponent implements OnInit {
  
  langData: Record<string, Record<string, string>> = LanguageConstant;
  langCode = localStorage.getItem('language') ?? 'en';

  modalData: ModalData<Industry> = new ModalData<Industry>();
  listIndustry: Paginate<Industry> = new Paginate<Industry>();
  searchValue = '';

  constructor(
    private industrySvc: IndustryService,
    private toast: ToastrService,
    private nzModalSvc: NzModalService
  ) {}
  
  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean) {
    if (isSearch) this.listIndustry.currentPage = 1;
    this.industrySvc.getAllPaging(
      this.listIndustry.currentPage - 1,
      this.listIndustry.limit,
      this.searchValue
    ).subscribe({
      next: (res) => {
        this.listIndustry.currentPage = res.pageable.pageNumber + 1;
        this.listIndustry.limit = res.pageable.pageSize;
        this.listIndustry.totalPage = res.totalPages;
        this.listIndustry.totalItem = res.totalElements;
        this.listIndustry.data = res.content;
      },
      error: (err) => this.toast.error(err.message)
    })
  }

  pageChange(page: Paginate<Industry>) {
    this.listIndustry = page;
    this.getDataPaging();
  }

  onChangeStatus(id: number) {
    if (confirm(this.langData[this.langCode]['CONFIRM_CHANGE_STATUS'])) {
      this.industrySvc.changeStatus(id)
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
      this.industrySvc.delete(id)
      .subscribe({
        error: (err) => this.toast.error(err.message),
        complete: () => {
          this.toast.success(this.langData[this.langCode]['MSG_UPDATE_DONE']); 
          this.getDataPaging();
        }
      })
    }
  }

  openModal(template: TemplateRef<any>, data?: Industry) {
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

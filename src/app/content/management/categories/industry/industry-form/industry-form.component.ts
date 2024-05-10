import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Industry } from '../../../../../core/models/categories/industry.model';
import { ModalData } from '../../../../../core/models/common/modal-data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LanguageConstant } from '../../../../../core/constants/language.constant';
import { SystemConstant } from '../../../../../core/constants/system.constant';
import { IndustryService } from '../../../../../core/services/management/categories/industry/industry.service';

@Component({
  selector: 'app-industry-form',
  templateUrl: './industry-form.component.html',
  styleUrl: './industry-form.component.scss'
})
export class IndustryFormComponent implements OnInit {

  @Input() modalData!: ModalData<Industry>;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  
  langData: Record<string, Record<string, string>> = LanguageConstant;
  langCode = localStorage.getItem('language') ?? 'en';

  form!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private industrySvc: IndustryService,
    private toast: ToastrService
  ) { 
    this.createForm();
  }
  
  ngOnInit(): void {    
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        nameEn: this.modalData.data?.nameEn,
        nameLv: this.modalData.data?.nameLv
      });
    }
    else {
      this.form.reset();
    }
  }

  createForm() {
    this.form = this.fb.group({
      nameEn: ['', Validators.required],
      nameLv: ['', Validators.required],
    });
  }

  onSubmit() {
    this.setLoading(true);
    if (this.form.valid) {
      if (this.modalData.action === SystemConstant.ACTION.EDIT) {
        this.industrySvc.update(this.form.value, this.modalData.data?.id!)
        .subscribe({
          error: (err) => {
            this.setLoading(false);
            this.toast.error(err.message);
          },
          complete: () => {
            this.setLoading(false);
            this.toast.success(this.langData[this.langCode]['MSG_UPDATE_DONE']);
            this.closeModal.emit(true);
          }
        });
      } else {
        this.industrySvc.create(this.form.value)
        .subscribe({
          error: (err) => {
            this.setLoading(false);
            this.toast.error(err.message)
          },
          complete: () => {
            this.setLoading(false);
            this.toast.success(this.langData[this.langCode]['MSG_CREATE_DONE']);
            this.closeModal.emit(true);
          }
        });
      }
    } else {
      this.setLoading(false);
    }
  }

  onCancel() {
    this.closeModal.emit(false);
  }

  setLoading(value: boolean) {
    this.isLoading = value
  }
}

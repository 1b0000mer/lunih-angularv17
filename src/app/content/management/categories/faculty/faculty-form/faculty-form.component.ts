import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalData } from '../../../../../core/models/common/modal-data.model';
import { Faculty } from '../../../../../core/models/categories/faculty.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from '../../../../../core/services/management/categories/faculty/faculty.service';
import { ToastrService } from 'ngx-toastr';
import { SystemConstant } from '../../../../../core/constants/system.constant';
import { LanguageConstant } from '../../../../../core/constants/language.constant';

@Component({
  selector: 'app-faculty-form',
  templateUrl: './faculty-form.component.html',
  styleUrl: './faculty-form.component.scss'
})
export class FacultyFormComponent implements OnInit {

  @Input() modalData!: ModalData<Faculty>;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  langData: Record<string, Record<string, string>> = LanguageConstant;
  langCode = localStorage.getItem('language') ?? 'en';

  form!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private facultySvc: FacultyService,
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
        this.facultySvc.update(this.form.value, this.modalData.data?.id!)
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
        this.facultySvc.create(this.form.value)
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

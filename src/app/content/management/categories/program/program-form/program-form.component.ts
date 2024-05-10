import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Program } from '../../../../../core/models/categories/program.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LanguageConstant } from '../../../../../core/constants/language.constant';
import { SystemConstant } from '../../../../../core/constants/system.constant';
import { ModalData } from '../../../../../core/models/common/modal-data.model';
import { ProgramService } from '../../../../../core/services/management/categories/program/program.service';
import { Faculty } from '../../../../../core/models/categories/faculty.model';
import { FacultyService } from '../../../../../core/services/management/categories/faculty/faculty.service';
import { Industry } from '../../../../../core/models/categories/industry.model';
import { IndustryService } from '../../../../../core/services/management/categories/industry/industry.service';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrl: './program-form.component.scss'
})
export class ProgramFormComponent implements OnInit {

  @Input() modalData!: ModalData<Program>;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  listFaculty: Faculty[] = [];
  listIndustry: Industry[] = [];
  
  langData: Record<string, Record<string, string>> = LanguageConstant;
  langCode = localStorage.getItem('language') ?? 'en';

  form!: FormGroup;
  isLoading: boolean = false;
  visible: boolean = false;

  searchValue = '';
  constructor(
    private fb: FormBuilder,
    private programSvc: ProgramService,
    private facultySvc: FacultyService,
    private industrySvc: IndustryService,
    private toast: ToastrService
  ) { 
    this.createForm();
  }
  
  ngOnInit(): void {

    this.fetchFaculty();
    this.fetchIndustry();

    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        nameEn: this.modalData.data?.nameEn,
        nameLv: this.modalData.data?.nameLv,
        studyLevel: this.modalData.data?.studyLevel,
        facultyID: this.modalData.data?.faculty.id,
        industryList: this.modalData.data?.industryList.map(item => item.id),
      });
    }
  }

  fetchFaculty() {
    this.facultySvc.getAll()
    .subscribe({
      next: (res) => this.listFaculty = res,
      error: (err) => this.toast.error(err.message)
    })
  }

  fetchIndustry() {
    this.industrySvc.getAllPaging(0, 5, this.searchValue)
    .subscribe({
      next: (res) => this.listIndustry = res.content,
      error: (err) => this.toast.error(err.message)
    })
  }

  createForm() {
    this.form = this.fb.group({
      nameEn: ['', Validators.required],
      nameLv: ['', Validators.required],
      studyLevel: ['', Validators.required],
      facultyID: [0, Validators.required],
      industryList: [[]]
    });
  }

  onSubmit() {
    this.setLoading(true);
    if (this.form.valid) {
      if (this.modalData.action === SystemConstant.ACTION.EDIT) {
        this.programSvc.update(this.form.value, this.modalData.data?.id!)
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
        this.programSvc.create(this.form.value)
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

  toggleChecked(id: number): void {
    const listIndustryControl = this.form.get('industryList');
    const index = listIndustryControl?.value.indexOf(id);
    if (index !== -1) {
      // Remove the name if already checked
      listIndustryControl?.value.splice(index, 1);
    } else {
      // Add the name if not already checked
      listIndustryControl?.value.push(id);
    }
  }

  isChecked(id: number): boolean {
    return this.form.get('industryList')?.value.includes(id);
  }

}

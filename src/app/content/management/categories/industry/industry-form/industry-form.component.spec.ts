import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryFormComponent } from './industry-form.component';

describe('IndustryFormComponent', () => {
  let component: IndustryFormComponent;
  let fixture: ComponentFixture<IndustryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

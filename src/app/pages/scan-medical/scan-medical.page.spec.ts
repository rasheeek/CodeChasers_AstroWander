import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanMedicalPage } from './scan-medical.page';

describe('ScanMedicalPage', () => {
  let component: ScanMedicalPage;
  let fixture: ComponentFixture<ScanMedicalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScanMedicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

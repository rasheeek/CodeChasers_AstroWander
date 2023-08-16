import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayfingerPage } from './payfinger.page';

describe('PayfingerPage', () => {
  let component: PayfingerPage;
  let fixture: ComponentFixture<PayfingerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PayfingerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

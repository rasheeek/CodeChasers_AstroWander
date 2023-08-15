import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPassengersPage } from './add-passengers.page';

describe('AddPassengersPage', () => {
  let component: AddPassengersPage;
  let fixture: ComponentFixture<AddPassengersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPassengersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

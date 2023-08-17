import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedFlightPage } from './selected-flight.page';

describe('SelectedFlightPage', () => {
  let component: SelectedFlightPage;
  let fixture: ComponentFixture<SelectedFlightPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectedFlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

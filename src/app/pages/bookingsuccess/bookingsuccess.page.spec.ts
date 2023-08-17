import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingsuccessPage } from './bookingsuccess.page';

describe('BookingsuccessPage', () => {
  let component: BookingsuccessPage;
  let fixture: ComponentFixture<BookingsuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookingsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

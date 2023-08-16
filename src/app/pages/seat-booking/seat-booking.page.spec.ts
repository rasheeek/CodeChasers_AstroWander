import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SeatBookingPage } from './seat-booking.page';

describe('SeatBookingPage', () => {
  let component: SeatBookingPage;
  let fixture: ComponentFixture<SeatBookingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeatBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

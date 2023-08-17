import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MytripsPage } from './mytrips.page';

describe('MytripsPage', () => {
  let component: MytripsPage;
  let fixture: ComponentFixture<MytripsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MytripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

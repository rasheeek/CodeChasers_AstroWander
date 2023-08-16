import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackListPage } from './snack-list.page';

describe('SnackListPage', () => {
  let component: SnackListPage;
  let fixture: ComponentFixture<SnackListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SnackListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

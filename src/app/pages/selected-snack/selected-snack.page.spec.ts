import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedSnackPage } from './selected-snack.page';

describe('SelectedSnackPage', () => {
  let component: SelectedSnackPage;
  let fixture: ComponentFixture<SelectedSnackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectedSnackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

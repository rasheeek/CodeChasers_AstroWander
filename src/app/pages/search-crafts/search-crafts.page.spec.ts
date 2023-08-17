import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCraftsPage } from './search-crafts.page';

describe('SearchCraftsPage', () => {
  let component: SearchCraftsPage;
  let fixture: ComponentFixture<SearchCraftsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchCraftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

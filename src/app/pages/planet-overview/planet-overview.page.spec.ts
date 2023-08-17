import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetOverviewPage } from './planet-overview.page';

describe('PlanetOverviewPage', () => {
  let component: PlanetOverviewPage;
  let fixture: ComponentFixture<PlanetOverviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanetOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogoSectionComponent } from './home-logo-section.component';

describe('HomeLogoSectionComponent', () => {
  let component: HomeLogoSectionComponent;
  let fixture: ComponentFixture<HomeLogoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLogoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLogoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

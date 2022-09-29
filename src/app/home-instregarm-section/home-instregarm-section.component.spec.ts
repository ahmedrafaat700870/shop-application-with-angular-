import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstregarmSectionComponent } from './home-instregarm-section.component';

describe('HomeInstregarmSectionComponent', () => {
  let component: HomeInstregarmSectionComponent;
  let fixture: ComponentFixture<HomeInstregarmSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInstregarmSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInstregarmSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

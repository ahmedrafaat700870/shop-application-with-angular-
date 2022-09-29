import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceLayoutComponent } from './home-service-layout.component';

describe('HomeServiceLayoutComponent', () => {
  let component: HomeServiceLayoutComponent;
  let fixture: ComponentFixture<HomeServiceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeServiceLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeServiceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

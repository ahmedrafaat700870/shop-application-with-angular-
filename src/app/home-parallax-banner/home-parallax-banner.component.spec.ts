import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParallaxBannerComponent } from './home-parallax-banner.component';

describe('HomeParallaxBannerComponent', () => {
  let component: HomeParallaxBannerComponent;
  let fixture: ComponentFixture<HomeParallaxBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeParallaxBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeParallaxBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

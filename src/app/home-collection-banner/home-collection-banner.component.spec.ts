import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCollectionBannerComponent } from './home-collection-banner.component';

describe('HomeCollectionBannerComponent', () => {
  let component: HomeCollectionBannerComponent;
  let fixture: ComponentFixture<HomeCollectionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCollectionBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCollectionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

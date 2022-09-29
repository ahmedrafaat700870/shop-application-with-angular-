import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTapTopComponent } from './home-tap-top.component';

describe('HomeTapTopComponent', () => {
  let component: HomeTapTopComponent;
  let fixture: ComponentFixture<HomeTapTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTapTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTapTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

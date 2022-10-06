import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapToTapStartComponent } from './tap-to-tap-start.component';

describe('TapToTapStartComponent', () => {
  let component: TapToTapStartComponent;
  let fixture: ComponentFixture<TapToTapStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapToTapStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapToTapStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

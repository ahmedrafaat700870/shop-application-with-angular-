import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewModalPopupStartComponent } from './quick-view-modal-popup-start.component';

describe('QuickViewModalPopupStartComponent', () => {
  let component: QuickViewModalPopupStartComponent;
  let fixture: ComponentFixture<QuickViewModalPopupStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickViewModalPopupStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickViewModalPopupStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

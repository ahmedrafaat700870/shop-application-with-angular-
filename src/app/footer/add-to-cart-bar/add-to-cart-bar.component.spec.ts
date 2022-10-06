import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartBarComponent } from './add-to-cart-bar.component';

describe('AddToCartBarComponent', () => {
  let component: AddToCartBarComponent;
  let fixture: ComponentFixture<AddToCartBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutSectionComponent } from './prodcut-section.component';

describe('ProdcutSectionComponent', () => {
  let component: ProdcutSectionComponent;
  let fixture: ComponentFixture<ProdcutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

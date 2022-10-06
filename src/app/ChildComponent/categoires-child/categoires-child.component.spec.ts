import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoiresChildComponent } from './categoires-child.component';

describe('CategoiresChildComponent', () => {
  let component: CategoiresChildComponent;
  let fixture: ComponentFixture<CategoiresChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoiresChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoiresChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SErviceLayoutComponent } from './service-layout.component';

describe('SErviceLayoutComponent', () => {
  let component: SErviceLayoutComponent;
  let fixture: ComponentFixture<SErviceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SErviceLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SErviceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

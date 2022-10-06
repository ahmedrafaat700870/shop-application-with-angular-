import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPoputStartComponent } from './modal-poput-start.component';

describe('ModalPoputStartComponent', () => {
  let component: ModalPoputStartComponent;
  let fixture: ComponentFixture<ModalPoputStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPoputStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPoputStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

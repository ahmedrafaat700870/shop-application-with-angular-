import { ComponentFixture, TestBed ,Input } from '@angular/core/testing';
import { IItem } from 'src/interfaces/Item.interface';

import { MainHomeComponent } from './main-home.component';

describe('MainHomeComponent', () => {
  let component: MainHomeComponent;
  let fixture: ComponentFixture<MainHomeComponent>;
  @Input() categoires: Array<IItem> | null ;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

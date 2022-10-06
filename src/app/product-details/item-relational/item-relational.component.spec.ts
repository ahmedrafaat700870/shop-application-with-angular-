import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRelationalComponent } from './item-relational.component';

describe('ItemRelationalComponent', () => {
  let component: ItemRelationalComponent;
  let fixture: ComponentFixture<ItemRelationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRelationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRelationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

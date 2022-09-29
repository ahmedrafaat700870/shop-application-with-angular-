import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParagraphComponent } from './home-paragraph.component';

describe('HomeParagraphComponent', () => {
  let component: HomeParagraphComponent;
  let fixture: ComponentFixture<HomeParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

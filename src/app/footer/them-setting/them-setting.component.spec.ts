import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSettingComponent } from './them-setting.component';

describe('ThemSettingComponent', () => {
  let component: ThemSettingComponent;
  let fixture: ComponentFixture<ThemSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

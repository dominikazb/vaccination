import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen11Component } from './screen11.component';

describe('Screen11Component', () => {
  let component: Screen11Component;
  let fixture: ComponentFixture<Screen11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

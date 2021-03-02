import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen9Component } from './screen9.component';

describe('Screen9Component', () => {
  let component: Screen9Component;
  let fixture: ComponentFixture<Screen9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

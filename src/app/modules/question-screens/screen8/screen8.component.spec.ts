import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen8Component } from './screen8.component';

describe('Screen8Component', () => {
  let component: Screen8Component;
  let fixture: ComponentFixture<Screen8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

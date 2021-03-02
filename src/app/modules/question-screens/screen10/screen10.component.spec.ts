import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen10Component } from './screen10.component';

describe('Screen10Component', () => {
  let component: Screen10Component;
  let fixture: ComponentFixture<Screen10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen12Component } from './screen12.component';

describe('Screen12Component', () => {
  let component: Screen12Component;
  let fixture: ComponentFixture<Screen12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

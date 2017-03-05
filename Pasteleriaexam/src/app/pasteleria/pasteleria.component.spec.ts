/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PasteleriaComponent } from './pasteleria.component';

describe('PasteleriaComponent', () => {
  let component: PasteleriaComponent;
  let fixture: ComponentFixture<PasteleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

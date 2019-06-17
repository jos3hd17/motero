import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotowearPage } from './motowear.page';

describe('MotowearPage', () => {
  let component: MotowearPage;
  let fixture: ComponentFixture<MotowearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotowearPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotowearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

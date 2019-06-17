import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymotoPage } from './mymoto.page';

describe('MymotoPage', () => {
  let component: MymotoPage;
  let fixture: ComponentFixture<MymotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

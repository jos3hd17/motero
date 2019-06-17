import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContainerPage } from './app-container.page';

describe('AppContainerPage', () => {
  let component: AppContainerPage;
  let fixture: ComponentFixture<AppContainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContainerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

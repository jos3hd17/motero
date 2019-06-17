import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemPage } from './detail-item.page';

describe('DetailItemPage', () => {
  let component: DetailItemPage;
  let fixture: ComponentFixture<DetailItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

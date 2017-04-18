import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsDropdownComponent } from './months-dropdown.component';

describe('MonthsDropdownComponent', () => {
  let component: MonthsDropdownComponent;
  let fixture: ComponentFixture<MonthsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

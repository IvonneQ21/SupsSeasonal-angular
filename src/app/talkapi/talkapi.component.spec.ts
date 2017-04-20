import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkapiComponent } from './talkapi.component';

describe('TalkapiComponent', () => {
  let component: TalkapiComponent;
  let fixture: ComponentFixture<TalkapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

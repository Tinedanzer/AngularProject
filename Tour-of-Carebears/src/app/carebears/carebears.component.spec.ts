import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarebearsComponent } from './carebears.component';

describe('CarebearsComponent', () => {
  let component: CarebearsComponent;
  let fixture: ComponentFixture<CarebearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarebearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarebearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

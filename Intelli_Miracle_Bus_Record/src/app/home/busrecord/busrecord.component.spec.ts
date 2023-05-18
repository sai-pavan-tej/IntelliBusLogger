import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusrecordComponent } from './busrecord.component';

describe('BusrecordComponent', () => {
  let component: BusrecordComponent;
  let fixture: ComponentFixture<BusrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

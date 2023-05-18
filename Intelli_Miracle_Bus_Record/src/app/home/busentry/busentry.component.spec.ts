import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusentryComponent } from './busentry.component';

describe('BusentryComponent', () => {
  let component: BusentryComponent;
  let fixture: ComponentFixture<BusentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykCustomerSingleComponent } from './single.component';

describe('NykCustomerSingleComponent', () => {
  let component: NykCustomerSingleComponent;
  let fixture: ComponentFixture<NykCustomerSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykCustomerSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykCustomerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

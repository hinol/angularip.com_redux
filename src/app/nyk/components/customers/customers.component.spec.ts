import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykCustomersComponent } from './customers.component';

describe('NykCustomersComponent', () => {
  let component: NykCustomersComponent;
  let fixture: ComponentFixture<NykCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykTransactionsComponent } from './transactions.component';

describe('NykTransactionsComponent', () => {
  let component: NykTransactionsComponent;
  let fixture: ComponentFixture<NykTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

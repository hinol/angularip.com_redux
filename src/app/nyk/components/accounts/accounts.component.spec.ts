import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykAccountsComponent } from './accounts.component';

describe('NykAccountsComponent', () => {
  let component: NykAccountsComponent;
  let fixture: ComponentFixture<NykAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

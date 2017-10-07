import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykAccountSingleComponent } from './single.component';

describe('NykAccountSingleComponent', () => {
  let component: NykAccountSingleComponent;
  let fixture: ComponentFixture<NykAccountSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykAccountSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykAccountSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykAccountSingleFullComponent } from './single-full.component';

describe('NykAccountSingleFullComponent', () => {
  let component: NykAccountSingleFullComponent;
  let fixture: ComponentFixture<NykAccountSingleFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykAccountSingleFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykAccountSingleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

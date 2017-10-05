import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykUserLoginRequiredComponent } from './login-required.component';

describe('NykUserLoginRequiredComponent', () => {
  let component: NykUserLoginRequiredComponent;
  let fixture: ComponentFixture<NykUserLoginRequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykUserLoginRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykUserLoginRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

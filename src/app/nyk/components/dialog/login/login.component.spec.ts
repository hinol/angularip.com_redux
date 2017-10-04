import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykDialogLoginComponent } from './login.component';

describe('NykDialogLoginComponent', () => {
  let component: NykDialogLoginComponent;
  let fixture: ComponentFixture<NykDialogLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykDialogLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykDialogLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

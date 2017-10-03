import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NykIndexComponent } from './index.component';

describe('NykIndexComponent', () => {
  let component: NykIndexComponent;
  let fixture: ComponentFixture<NykIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NykIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NykIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

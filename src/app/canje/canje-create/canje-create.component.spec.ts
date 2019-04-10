import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjeCreateComponent } from './canje-create.component';

describe('CanjeCreateComponent', () => {
  let component: CanjeCreateComponent;
  let fixture: ComponentFixture<CanjeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanjeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

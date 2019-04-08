import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjeDeleteComponent } from './canje-delete.component';

describe('CanjeDeleteComponent', () => {
  let component: CanjeDeleteComponent;
  let fixture: ComponentFixture<CanjeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanjeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjeGetComponent } from './canje-get.component';

describe('CanjeGetComponent', () => {
  let component: CanjeGetComponent;
  let fixture: ComponentFixture<CanjeGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanjeGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

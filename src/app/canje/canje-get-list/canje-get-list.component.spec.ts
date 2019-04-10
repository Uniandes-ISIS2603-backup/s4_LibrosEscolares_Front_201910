import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjeGetListComponent } from './canje-get-list.component';

describe('CanjeGetListComponent', () => {
  let component: CanjeGetListComponent;
  let fixture: ComponentFixture<CanjeGetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanjeGetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjeGetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

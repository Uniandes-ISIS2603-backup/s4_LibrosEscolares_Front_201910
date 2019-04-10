import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjeUpdateComponent } from './canje-update.component';

describe('CanjeUpdateComponent', () => {
  let component: CanjeUpdateComponent;
  let fixture: ComponentFixture<CanjeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanjeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

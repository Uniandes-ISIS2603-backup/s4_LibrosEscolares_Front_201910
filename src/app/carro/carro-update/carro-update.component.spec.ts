import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroUpdateComponent } from './carro-update.component';

describe('CarroUpdateComponent', () => {
  let component: CarroUpdateComponent;
  let fixture: ComponentFixture<CarroUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

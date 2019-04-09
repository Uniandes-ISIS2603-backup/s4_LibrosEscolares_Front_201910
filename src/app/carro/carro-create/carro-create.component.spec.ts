import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCreateComponent } from './carro-create.component';

describe('CarroCreateComponent', () => {
  let component: CarroCreateComponent;
  let fixture: ComponentFixture<CarroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

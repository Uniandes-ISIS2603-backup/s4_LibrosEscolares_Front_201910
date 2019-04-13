import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaUpdateComponent } from './respuesta-update.component';

describe('RespuestaUpdateComponent', () => {
  let component: RespuestaUpdateComponent;
  let fixture: ComponentFixture<RespuestaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaDetailComponent } from './respuesta-detail.component';

describe('RespuestaDetailComponent', () => {
  let component: RespuestaDetailComponent;
  let fixture: ComponentFixture<RespuestaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

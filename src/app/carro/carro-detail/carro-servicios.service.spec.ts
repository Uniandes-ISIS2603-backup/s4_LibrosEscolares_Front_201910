import { TestBed } from '@angular/core/testing';

import { CarroServiciosService } from './carro-servicios.service';

describe('CarroServiciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarroServiciosService = TestBed.get(CarroServiciosService);
    expect(service).toBeTruthy();
  });
});

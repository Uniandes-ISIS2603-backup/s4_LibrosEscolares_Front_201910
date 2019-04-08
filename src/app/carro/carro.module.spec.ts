import { CarroModule } from './carro.module';

describe('CarroModule', () => {
  let carroModule: CarroModule;

  beforeEach(() => {
    carroModule = new CarroModule();
  });

  it('should create an instance', () => {
    expect(carroModule).toBeTruthy();
  });
});

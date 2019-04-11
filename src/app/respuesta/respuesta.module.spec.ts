import { RespuestaModule } from './respuesta.module';

describe('RespuestaModule', () => {
  let respuestaModule: RespuestaModule;

  beforeEach(() => {
    respuestaModule = new RespuestaModule();
  });

  it('should create an instance', () => {
    expect(respuestaModule).toBeTruthy();
  });
});

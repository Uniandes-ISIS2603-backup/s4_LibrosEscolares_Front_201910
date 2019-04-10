import { CanjeModule } from './canje.module';

describe('CanjeModule', () => {
  let canjeModule: CanjeModule;

  beforeEach(() => {
    canjeModule = new CanjeModule();
  });

  it('should create an instance', () => {
    expect(canjeModule).toBeTruthy();
  });
});

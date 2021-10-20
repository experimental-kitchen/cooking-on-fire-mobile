import { DietToSymbolImageFileNamePipe } from './diet-to-symbol-image-file-name.pipe';

describe('DietToFileNamePipe', () => {
  it('create an instance', () => {
    const pipe = new DietToSymbolImageFileNamePipe();
    expect(pipe).toBeTruthy();
  });
});

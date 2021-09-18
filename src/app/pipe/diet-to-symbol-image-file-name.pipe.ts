import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dietToSymbolImageFileName'
})
export class DietToSymbolImageFileNamePipe implements PipeTransform {

  private static mapDietsToImageFilenames(diet: string): string {
    switch (diet) {
      case 'vegetarian':
        return 'vegetarier.svg';
      case 'vegan':
        return 'vegan.svg';
      case 'gluten-free':
        return 'gluten-frei.svg';
      case 'lactose-free':
        return 'laktosefrei.svg';
      case 'pesce':
        return 'fisch.svg';
      default:
      //todo: add logging.
    }
  }

  transform(diet: string, ...args: unknown[]): unknown {
    return DietToSymbolImageFileNamePipe.mapDietsToImageFilenames(diet);
  }
}

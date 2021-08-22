import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietImageSortService {

  private static readonly dietSymbolsOrder = new Map([['vegetarian', 0], ['vegan', 1],
    ['lactose-free', 2], ['gluten-free', 3], ['pesce', 4]]);

  constructor() {
  }

  sort(a: string, b: string): number {
    if (DietImageSortService.dietSymbolsOrder.get(a) === undefined || DietImageSortService.dietSymbolsOrder.get(b) === undefined) {
      //todo: log warning
      return 0;
    }
    return DietImageSortService.dietSymbolsOrder.get(a) - DietImageSortService.dietSymbolsOrder.get(b);
  }
}

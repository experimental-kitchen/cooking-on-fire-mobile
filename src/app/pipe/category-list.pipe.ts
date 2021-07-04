import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(categories: string[], ...args: unknown[]): string {
    return categories.reduce((accumulator, currentValue) => accumulator + ' / ' + currentValue);
  }

}

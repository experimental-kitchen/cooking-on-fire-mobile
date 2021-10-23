import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'slashSeparatedListPipe'
})
export class SlashSeparatedListPipePipe implements PipeTransform {

  transform(strings: string[], ...args: unknown[]): string {
    return strings ? strings.reduce((accumulator, currentValue) => accumulator + ' / ' + currentValue) : '';
  }

}

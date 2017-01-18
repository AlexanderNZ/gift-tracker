import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardOutlineColour'
})
export class CardOutlineColourPipe implements PipeTransform {

  transform(value: string): string {
    return "card-outline-" + value.toLocaleLowerCase().replace(/ /g, '')
  }

}

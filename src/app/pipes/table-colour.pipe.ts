import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'tableColourPipe'
})
export class TableColourPipePipe implements PipeTransform {

  transform(value: string): string {
    return "gift-table-colour-" + value.toLocaleLowerCase().replace(/ /g, '')
  }

}

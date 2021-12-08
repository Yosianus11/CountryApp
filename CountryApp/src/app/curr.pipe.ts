import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curr'
})
export class CurrPipe implements PipeTransform {

  transform(val: number, extension: string="Billion", sym:string="$"): string {
    
    if (val !== undefined && val !== null) {
       return `${sym}${val.toLocaleString()} ${extension}`;
    } else {
       return '';
    }
 }
}

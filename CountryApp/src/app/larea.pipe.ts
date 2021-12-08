import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'larea'
})
export class LareaPipe implements PipeTransform {

  transform(val: number, extension: string="KM2"): string {
    
    if (val !== undefined && val !== null) {
       return `${val.toLocaleString()} ${extension}`;
    } else {
       return '';
    }
 }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortstring'
})
export class SortstringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    var sortedvalues = value.sort()
    return sortedvalues;
  }

}

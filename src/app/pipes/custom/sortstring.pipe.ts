import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortstring'
})
export class SortstringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    console.log(args);
    if(args[0] === "asc"){
      var sortedvalues = value.sort()
      return sortedvalues;
    }
    if(args[0] === "dsc"){
      var sortedvalues = value.sort().reverse()
      return sortedvalues;
    }

    var sortedvalues = value.sort()
    return sortedvalues;
  }

}

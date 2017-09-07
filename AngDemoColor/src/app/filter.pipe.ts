import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from "util";

@Pipe({
  name: 'filter1'
})
export class FilterPipe implements PipeTransform {

  transform(ninj: any, element: any): any {
    // search if search term in indefined
    if (element === undefined) {
      return ninj;
    }
    return ninj.filter(function (ninja) {
      return ninja.name.toLowerCase().includes(element.toLowerCase());
    });
  }

}

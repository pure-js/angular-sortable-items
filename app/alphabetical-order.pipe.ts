import { Pipe, PipeTransform } from '@angular/core';

import { item } from './item';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   {{ [{name: 'a'},{name: 'b'}] | alphabeticalOrder:exponent
 * Example:
 *   {{ [{name: 'a'},{name: 'b'}] |  alphabeticalOrder:10}}
 *   formats to: 1024
*/
@Pipe({
  name: 'alphabeticalOrder'
})
export class AlphabeticalOrderPipe implements PipeTransform {
  transform(arr: item[]) {
    return arr.sort((a, b) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}

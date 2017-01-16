import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './item';

/*
 * Raise the value exponentially
 * Takes an boolean argument that defaults to false.
 * Usage:
 *   {{ [{name: 'a'},{name: 'b'}] | alphabeticalOrder:false }}
 * Example:
 *   {{ [{name: 'a'},{name: 'b'}] | alphabeticalOrder:true }}
 *   formats to: 1024
*/
@Pipe({
  name: 'alphabeticalOrder'
})
export class AlphabeticalOrderPipe implements PipeTransform {
  transform(arr: Item[], reverse: boolean) {
    return arr.sort((a, b) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase

      if (reverse) {
        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        return 0;
      } else {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
    });
  }
}

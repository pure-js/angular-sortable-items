import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item';

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
  transform(arr: Item[], alphabetical: boolean) {

    function srt(a: any, b: any) {
      let nameA = a.name.toLowerCase(); // ignore upper and lowercase
      let nameB = b.name.toLowerCase(); // ignore upper and lowercase

      if (alphabetical) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else {
        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        return 0;
      }
    }

    function wait() {
      if(arr) {
        return arr.sort(srt);
      } else {
        setTimeout(wait, 300);
      }
    }

    return wait();
  }
}

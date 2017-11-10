import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './item';

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

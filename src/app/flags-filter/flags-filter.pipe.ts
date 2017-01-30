import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item';
import {setTimeout} from "timers";

@Pipe({
  name: 'flags',
  pure: false
})

export class FlagPipe implements PipeTransform {
  transform(arr: Item[], flags: string[]) {

    function findEachFlag(value: any) {
      function hasProperty(val: string) {
        return value.flags.includes(val);
      }

      return flags.every(hasProperty);
    }

    function wait() {
      if(arr) {
        return arr.filter(findEachFlag);
      } else {
        setTimeout(wait, 300);
      }
    }

    return wait();
  }
}

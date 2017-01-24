import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item';

@Pipe({
  name: 'flags',
  pure: false
})

export class FlagPipe implements PipeTransform {
  transform(arr: Item[], flags: string[]) {

    // let findOne = function (haystack: any, arr: any) {
    //   return arr.every(function (element: any) {
    //     // console.log('el', element);
    //     return haystack.indexOf(element) >= 0;
    //   });
    // };
    //
    // return arr.filter((value) => {
    //   return findOne(flags, value.flags)
    // });

    function findEachFlag(value: Item) {
      console.log('f', flags);
      // value.flags;

      function hasAllProps(value: string) {
        for (let i = 0; i < flags.length; i++) {
          console.log(flags[i]);
          console.log('separator');
          let result = value.indexOf(flags[i]) >= 0;
          if(!result) {
            return false
          }
        }
        return true;
      }

      return value.flags.every(hasAllProps);
    }

    return arr.filter(findEachFlag);
  }
}

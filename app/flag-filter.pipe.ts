import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'flag'
})

export class FlagPipe implements PipeTransform {
  transform(arr: Item[], flag: string) {
    return arr.filter((value) =>
      value.flags.includes(flag)
    );
  }
}

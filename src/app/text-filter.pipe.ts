import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './item';

@Pipe({
  name: 'textFilter',
  pure: false
})
export class TextFilterPipe implements PipeTransform {
  transform(items: Item[], word: string) {
    function nameContains(value: Item) {
      const name = value.name.toLowerCase();
      const symbols = word.toLowerCase();
      return name.startsWith(symbols);
    }

    function wait() {
      if (items) {
        return items.filter(nameContains);
      } else {
        setTimeout(wait, 300);
      }
    }

    return wait();
  }
}

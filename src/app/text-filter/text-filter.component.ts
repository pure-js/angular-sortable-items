import { Component, Input } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'text-filter',
  templateUrl: 'text-filter.component.html'
})

export class TextFilterComponent {
  @Input() item: Item;
  constructor() {}
}

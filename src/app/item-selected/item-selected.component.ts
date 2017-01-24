import { Component, Input } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'item-selected',
  templateUrl: 'item-selected.component.html'
})

export class ItemSelectedComponent {
  @Input() item: Item;
  constructor() {}
}

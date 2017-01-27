import { Component, Input } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'item-selected',
  templateUrl: 'item-detail.component.html'
})

export class ItemSelectedComponent {
  @Input() item: Item;
  constructor() {}

  save(): void {
    this.cityService.update(this.city)
      .then(() => this.goBack());
  }
}

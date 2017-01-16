import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'item-list',
  templateUrl: 'app/item-list.component.html'
})

export class ItemListComponent {
  @Input() items: string[];
  constructor() {}

  selectedItem: Item;

  onSelect(city: Item): void {
    this.selectedItem = city;
  }
}

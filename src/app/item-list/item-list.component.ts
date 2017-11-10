import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ItemListComponent implements OnInit {
  @Input() items: string[];

  constructor() { }

  ngOnInit() {
  }

  selectedItem: Item;

  onSelect(city: Item): void {
    this.selectedItem = city;
  }
}

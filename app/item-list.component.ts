import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: 'app/item-list.component.html'
})

export class ItemListComponent {
  @Input() items: string[];
  constructor() {}
}

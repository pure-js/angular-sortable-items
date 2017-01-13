import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: 'app/item.component.html'
})

export class ItemComponent {
  @Input() item: string[];
  constructor() {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-selected',
  templateUrl: 'app/item-selected.component.html'
})

export class ItemSelectedComponent {
  @Input() item: string[];
  constructor() {}
}

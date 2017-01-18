import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-selected',
  templateUrl: './item-selected.component.html'
})

export class ItemSelectedComponent {
  @Input() item: string[];
  constructor() {}
}

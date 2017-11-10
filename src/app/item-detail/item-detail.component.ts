import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}

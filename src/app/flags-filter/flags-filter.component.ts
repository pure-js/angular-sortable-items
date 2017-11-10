import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-flags-filter',
  templateUrl: './flags-filter.component.html',
  styleUrls: ['./flags-filter.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FlagsFilterComponent implements OnInit {
  @Input() flags: string[];
  @Input() selected: string[];
  constructor() { }

  ngOnInit() {
  }

  toggleFlag = function (flag: string) {
    let arr = this.flags;
    let include = arr.includes(flag);

    if (include) {
      let index = arr.indexOf(flag);
      this.flags.splice(index, 1);
    } else {
      this.flags.push(flag);
    }
  }
}

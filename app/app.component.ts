import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/my-app.html',
})
export class AppComponent {
  list1 = [
    {
      name: "Cookie",
      flags: [
        "flower",
        "heart",
        "sun",
        "flash"
      ]
    },{
      name: "Chocolate",
      flags: [
        "flower",
        "heart",
        "sun",
        "flash"
      ]
    },{
      name: "Candy",
      flags: [
        "flower",
        "heart",
        "sun",
        "flash"
      ]
    }
  ];
  list2 = [
    {
      name: "Kings",
      flags: [
        "flower",
        "heart",
        "sun",
        "flash"
      ]
    }
  ];
}

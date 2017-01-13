import { Component } from '@angular/core';
import { cities } from './mock-cities';
import { companies } from './mock-companies';

@Component({
  selector: 'my-app',
  templateUrl: 'app/my-app.html'
})

export class AppComponent {
  cities = cities;
  companies = companies;
}

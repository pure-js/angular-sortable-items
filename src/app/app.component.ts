import { Component } from '@angular/core';
import { cities } from './mock-cities';
import { companies } from './mock-companies';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/octicons/build/octicons.css';
import '../styles/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  cities = cities;
  companies = companies;
  sortOrder = true;
  selectedProps = ['rocket','heart'];
}

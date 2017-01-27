import {Component, OnInit} from '@angular/core';
// import { cities } from './mock-cities';
import { companies } from './mock-companies';
import { CitiesService } from './city.service';

import { Item } from './item';


import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/octicons/build/octicons.css';
import '../styles/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [CitiesService]
})

export class AppComponent implements OnInit{
  cities: Item[];
  companies = companies;
  sortOrder = true;
  selectedItemG: Item;
  // selectedItemG: Item = {
  //   flags: [
  //     "flame",
  //     "rocket"
  //   ],
  //   name: "Harborton"
  // };
  selectedProps: any[] = [];
  text = '';

  constructor(private citiesService: CitiesService) { }

  getCities(): void {
    this.citiesService.getCities().then(cities => this.cities = cities);
  }

  ngOnInit(): void{
    this.getCities();
  }
}

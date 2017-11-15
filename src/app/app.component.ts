import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';

import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ CityService ]
})
export class AppComponent implements OnInit {
  title = 'Angular sortable items';
  cities: Item[];
  companies: Item[];
  sortOrder = true;
  selectedItemG: Item;
  selectedProps: any[] = [];
  text = '';

  constructor(private cityService: CityService) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }

  getCompanies(): void {
    this.cityService.getCompanies().then(companies => this.companies = companies);
  }

  ngOnInit(): void {
    this.getCities();
    this.getCompanies();
  }
}

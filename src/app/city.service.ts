import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

import { Item } from './item';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) { }

  private citiesUrl = 'api/cities';  // URL to web api
  private companiesUrl = 'api/companies';  // URL to web api


  getCities(): Promise<Item[]> {
    return this.http.get<Item[]>(this.citiesUrl)
      .toPromise()
      .catch(e => this.handleError(e));
  }

  getCompanies(): Promise<Item[]> {
    return this.http.get<Item[]>(this.companiesUrl)
      .toPromise()
      .catch(e => this.handleError(e));
  }

  getCity(id: number): Promise<Item> {
    const url = `${this.citiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      // .then(response => response.json().data as Item)
      .catch(e => this.handleError(e));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(city: Item): Promise<Item> {
    const url = `${this.citiesUrl}/${city.name}`;
    return this.http
      .put(url, JSON.stringify(city), {})
      .toPromise()
      .catch(e => this.handleError(e));
  }

  create(name: string): Promise<Item> {
    return this.http
      .post(this.citiesUrl, JSON.stringify({name: name}), {})
      .toPromise()
      .catch(e => this.handleError(e));
  }
}

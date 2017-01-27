import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class CitiesService {
  private citiesUrl = 'api/cities';  // URL to web api
  private companiesUrl = 'api/companies';  // URL to web api

  constructor(private http: Http) { }

  getCities(): Promise<Item[]> {
    return this.http.get(this.citiesUrl)
      .toPromise()
      .then(response => response.json().data as Item[])
      .catch(this.handleError);
  }

  getCompanies(): Promise<Item[]> {
    return this.http.get(this.companiesUrl)
      .toPromise()
      .then(response => response.json().data as Item[])
      .catch(this.handleError);
  }

  getCity(id: number): Promise<Item> {
    const url = `${this.citiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Item)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Item): Promise<Item> {
    const url = `${this.citiesUrl}/${city.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Item> {
    return this.http
      .post(this.citiesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
}

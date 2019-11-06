import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Place} from './place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private placeUrl: string;

  constructor(private http: HttpClient) {
    this.placeUrl = 'http://localhost:8080/cities/places';
  }

  public getPlaces(name: string): Observable<Place[]> {
    const url = `${this.placeUrl}/?cityName=${name}`;
    console.log(url);
    return this.http.get<Place[]>(url);
  }

}

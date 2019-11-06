import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { City} from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cityUrl: string;

  constructor(private http: HttpClient) {
    this.cityUrl = 'http://localhost:8080/cities';
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.cityUrl);
  }
}

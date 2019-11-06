import { Component, OnInit } from '@angular/core';
import { CityService} from '../city.service';
import {City} from '../city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService) { }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  ngOnInit() {
    this.getCities();
  }

}

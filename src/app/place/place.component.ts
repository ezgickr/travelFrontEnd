import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PlaceService} from '../place.service';
import {Place} from '../place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  places: Place[];


  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
  ) { }

  getPlaces(): void {
    const city = this.route.snapshot.paramMap.get('cityName');
    this.placeService.getPlaces(city).subscribe(places => this.places = places);
  }

  ngOnInit() {
    this.getPlaces();
    // this.city.name = this.route.snapshot.paramMap.get('city.name');
  }

}

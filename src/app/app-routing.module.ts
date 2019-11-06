import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceComponent} from './place/place.component';
import {CityComponent} from './city/city.component';


const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CityComponent },
  { path: 'attractions/:cityName', component: PlaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

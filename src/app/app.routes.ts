import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { LogComponent } from './trip-log/trip-log.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'map', component: MapComponent},
    {path: 'log', component: LogComponent}
];

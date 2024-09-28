import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import * as L from 'leaflet';
import { LogComponent } from './trip-log/trip-log.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { MenuButtonComponent } from './menubutton/menubutton.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, LogComponent, TitleBarComponent, MenuButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Colins Website';

  ngOnInit(): void {
    // const map = L.map('map').setView([39.718981, -105.138829], 16);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
  }
}

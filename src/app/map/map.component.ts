import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-gpx';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true
})
export class MapComponent implements OnInit, AfterViewInit {
  private map!: L.Map
  markers: L.Marker[] = [
    L.marker([31.9539, 35.9106]), // Amman
    L.marker([32.5568, 35.8469]) // Irbid
  ];
  gpx: string = "";
  file:any;

  constructor() { }

  ngOnInit() {

    

  // const gpx = fs.readFileSync(
  //   '/Users/colinadams/leafletproject/mapproject/src/assets/mountroyal.gpx',
  //   'utf8'
  // );
  }

  fileChanged(e: any) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file)
}

uploadDocument(file: any) {
  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    this.gpx = fileReader.result as string;
  }
  fileReader.readAsText(this.file);
}

drawGpx() {
  new L.GPX(this.gpx, {async: true}).on('loaded', (e) => {
    this.map.fitBounds(e.target.getBounds());
  }).addTo(this.map);
}

  ngAfterViewInit() {
    this.initializeMap();
    this.addMarkers();
    // this.centerMap();
  }


  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
    this.map = L.map('map');
    L.tileLayer(baseMapURl).addTo(this.map);
    this.map.setView([39.718981, -105.138829], 16);
      }


  private addMarkers() {
    // Add your markers to the map
    this.markers.forEach(marker => marker.addTo(this.map));
  }

  private centerMap() {
    // Create a LatLngBounds object to encompass all the marker locations
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    
    // Fit the map view to the bounds
    this.map.fitBounds(bounds);
  }
}
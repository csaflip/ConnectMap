import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-gpx';
import GpxParser from 'gpxparser';
import FitParser from 'fit-file-parser';

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
  fit: string = "";
  fitJson: Object = {};
  file:any;
  maxElevation: number = 0;
  totalDistance: number = 0; 

  constructor() { }

  ngOnInit() {

    

  // const gpx = fs.readFileSync(
  //   '/Users/colinadams/leafletproject/mapproject/src/assets/mountroyal.gpx',
  //   'utf8'
  // );
  }

  round(num: number, fractionDigits: number): number {
    return Number(num.toFixed(fractionDigits));
}

  metersToFeet(meters: number): number {
    return this.round(meters * 3.281, 2);
  }

  metersToMiles(meters: number): number {
    return this.round(0.000621371*meters, 2);
  }

  parseFIT(): any {
    let fitParser = new FitParser({
      force: true,
      speedUnit: 'km/h',
      lengthUnit: 'km',
      temperatureUnit: 'kelvin',
      elapsedRecordField: true,
      mode: 'cascade',
    });

      // Parse your file
  fitParser.parse(this.fit,  (error: any, data: any) => {
  
    // Handle result of parse method
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(data));
      this.fitJson = data;
    }
    
  });
    
  }

parseGPX(): any {
  let parser = new GpxParser();
  parser.parse(this.gpx);
  this.totalDistance = this.metersToMiles(parser.tracks[0].distance.total);
  this.maxElevation = this.metersToFeet(parser.tracks[0].elevation.max);
  // console.log(totalDistance)

}

fileChanged(e: any) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file)
}

uploadDocument(file: any) {
  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    this.gpx = fileReader.result as string;
    //TODO
    this.fit = fileReader.result as string;
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
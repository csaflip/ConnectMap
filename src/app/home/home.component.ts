import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-gpx';
import GpxParser from 'gpxparser';
import FitParser from 'fit-file-parser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    console.log('test')
  }

}
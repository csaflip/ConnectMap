import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-gpx';
import GpxParser from 'gpxparser';
import FitParser from 'fit-file-parser';

@Component({
  selector: 'log',
  templateUrl: './trip-log.component.html',
  styleUrls: ['./trip-log.component.scss'],
  standalone: true
})
export class LogComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    console.log('test')
  }

}
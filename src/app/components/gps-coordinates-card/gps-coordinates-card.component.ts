import { GpsCoordinates } from './../../model/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gps-coordinates-card',
  templateUrl: './gps-coordinates-card.component.html'
})
export class GpsCoordinatesCardComponent implements OnInit {

  @Input() gpsCoordinates: GpsCoordinates;
  
  constructor() { }

  ngOnInit() {
  }

}

import { Weather } from './../../model/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent implements OnInit {

  @Input() weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}

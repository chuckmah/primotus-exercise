import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Weather } from '../model';

import moment from "moment";

@Injectable()
export class WeatherService {
  private API_PATH = "https://api.openweathermap.org/data/2.5/weather?APPID=ea370808071fd4691b18f6325ee72086&units=imperial";

  constructor(private http: HttpClient) { }

  getWeather(lon: number, lat: number): Observable<Weather> {
    return this.http.get<Weather>(`${this.API_PATH}&lon=${lon}&lat=${lat}`).map((weather) => {
      weather.lastUpdated = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
      return weather;
    });
  }
}
import { State, getGpsCoordinates } from "./reducers/index";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { GpsCoordinates, Weather } from "./model/index";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/do";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/switchMap";

import {
  UpdateGpsCoordinates,
  AppActionTypes,
  GetWeather,
  GetWeatherSuccess,
  GetWeatherFail
} from "./actions/actions";
import { WeatherService } from "./providers/weather.service";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { digest } from "@angular/compiler/src/i18n/serializers/xmb";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private store: Store<State>
  ) {}

  //Update weather each time GPS position change
  @Effect()
  updateWeatherFromGps$ = this.actions$
    .ofType(AppActionTypes.UpdateGpsCoordinates)
    .map((action: UpdateGpsCoordinates) => action.payload)
    .map(
      (gpsCoordinates: GpsCoordinates) =>
        new GetWeather({
          longitude: gpsCoordinates.longitude,
          latitude: gpsCoordinates.latitude
        })
    );

  //Update weather every seconds with last gps position
  @Effect()
  updateWeatherEachSeconds = Observable.interval(1000)
    .withLatestFrom(this.store.select(getGpsCoordinates))
    .map(([any, gpsCoordinates]) => gpsCoordinates)
    .filter(gpsCoordinates => gpsCoordinates !== null)
    .map(
      (gpsCoordinates: GpsCoordinates) =>
        new GetWeather({
          longitude: gpsCoordinates.longitude,
          latitude: gpsCoordinates.latitude
        })
    );

  @Effect()
  getWeatherFromService$ = this.actions$
    .ofType(AppActionTypes.GetWeather)
    .map((action: GetWeather) => action.payload)
    .switchMap((gpsCoordinates: GpsCoordinates) => {
      return this.weatherService
        .getWeather(gpsCoordinates.longitude, gpsCoordinates.latitude)
        .map((weather: Weather) => new GetWeatherSuccess(weather))
        .catch(error => Observable.of(new GetWeatherFail()));
    });
}

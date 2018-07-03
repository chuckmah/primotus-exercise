import { getGpsCoordinates, GetWeather } from './../../app/reducers/index';
import { GpsCoordinates, Weather } from './../../app/model/index';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { State } from '../../app/reducers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    // will be triggered when a new Observable emits a new value (e.g. with ngrx)
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  gpsCoordinates$: Observable<GpsCoordinates>;
  weather$: Observable<Weather>;

  constructor(public navCtrl: NavController , private _store: Store<State>) {
    this.gpsCoordinates$ = this._store.select(getGpsCoordinates);
    this.weather$ = this._store.select(GetWeather);
  }

}

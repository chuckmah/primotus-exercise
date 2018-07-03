import { getGpsCoordinates } from './../../app/reducers/index';
import { GpsCoordinates } from './../../app/model/index';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { State } from '../../app/reducers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gpsCoordinates$: Observable<GpsCoordinates>;

  constructor(public navCtrl: NavController , private _store: Store<State>) {
    this.gpsCoordinates$ = this._store.select(getGpsCoordinates);
  }

}

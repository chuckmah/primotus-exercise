import "rxjs/add/operator/filter";

import { UpdateGpsCoordinates } from './actions/actions';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { TabsPage } from '../pages/tabs/tabs';
import { Store } from '@ngrx/store';
import { State } from './reducers';

import moment from "moment";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private geolocation: Geolocation, private _store: Store<State>) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      let watch = this.geolocation.watchPosition().filter((p) => p.coords !== undefined);
      watch.subscribe((resp) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        this._store.dispatch(new UpdateGpsCoordinates({
          longitude: resp.coords.longitude,
          latitude: resp.coords.latitude,
          accuracy: resp.coords.accuracy,
          lastUpdated:  moment(resp.timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a")
        }))

      });

    });
  }
}

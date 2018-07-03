import { GetWeatherSuccess } from './../actions/actions';

import { GpsCoordinates, Weather } from './../model/index';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AppActions, AppActionTypes } from '../actions/actions';


export interface AppState {
  gpsCoordinates: GpsCoordinates,
  weather: Weather
}


export interface State {
  app: AppState;

}

export const initialAppState: AppState = {
  gpsCoordinates: null,
  weather: null
};


export const reducers: ActionReducerMap<State> = {
  app: appReducer
};

export function appReducer(
  state: AppState = initialAppState,
  action: AppActions
): AppState {
  switch (action.type) {
    case AppActionTypes.UpdateGpsCoordinates:
      return Object.assign({}, state, {
        gpsCoordinates: action.payload,
      });
    case AppActionTypes.GetWeatherSuccess:
      return Object.assign({}, state, {
        weather: action.payload,
      });


    default:
      return state;
  }
}

export const selectAppState = (state: State) => state.app;

export const getGpsCoordinates = createSelector(
  selectAppState,
  (state: AppState) => state.gpsCoordinates
);

export const GetWeather = createSelector(
  selectAppState,
  (state: AppState) => state.weather
);



export const metaReducers: MetaReducer<State>[] = [];




import { GpsCoordinates } from './../model/index';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AppActions, AppActionTypes } from '../actions/actions';


export interface AppState {
  gpsCoordinates: GpsCoordinates
}


export interface State {
  app: AppState;

}

export const initialAppState: AppState = {
  gpsCoordinates: null
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

    default:
      return state;
  }
}

export const selectAppState = (state: State) => state.app;

export const getGpsCoordinates = createSelector(
  selectAppState,
  (state: AppState) => state.gpsCoordinates
);



export const metaReducers: MetaReducer<State>[] = [];



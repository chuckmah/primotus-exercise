import { GpsCoordinates } from './../model/index';
import { Action } from "@ngrx/store";

export enum AppActionTypes {
    UpdateGpsCoordinates = "[APP] UPDATE_GPS_COORDINATES",
}

export class UpdateGpsCoordinates implements Action {
    readonly type = AppActionTypes.UpdateGpsCoordinates;

    constructor(public payload: GpsCoordinates) { }
}

export type AppActions = UpdateGpsCoordinates;

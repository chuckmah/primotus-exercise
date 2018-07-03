import { GpsCoordinates, Weather } from './../model/index';
import { Action } from "@ngrx/store";

export enum AppActionTypes {
    UpdateGpsCoordinates = "[APP] UPDATE_GPS_COORDINATES",
    GetWeather = "[APP] GET_WEATHER",
    GetWeatherSuccess = "[APP] GET_WEATHER_SUCCESS",
    GetWeatherFail = "[APP] GET_WEATHER_FAIL",
}

export class UpdateGpsCoordinates implements Action {
    readonly type = AppActionTypes.UpdateGpsCoordinates;

    constructor(public payload: GpsCoordinates) { }
}

export class GetWeather implements Action {
    readonly type = AppActionTypes.GetWeather;

    constructor(public payload: {
        longitude: number,
        latitude: number
    }) { }
}


export class GetWeatherSuccess implements Action {
    readonly type = AppActionTypes.GetWeatherSuccess;

    constructor(public payload: Weather) { }
}


export class GetWeatherFail implements Action {
    readonly type = AppActionTypes.GetWeatherFail;

    constructor() { }
}



export type AppActions = UpdateGpsCoordinates
    | GetWeather
    | GetWeatherSuccess
    | GetWeatherFail;

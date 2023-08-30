import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams,} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {weatherData} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
  }

  getWeatherData(cityName: string): Observable<weatherData> {
    const params = new HttpParams()
      .set('key', '607a9609020f4cc89ef110819231805')
      .set('aqi', 'no')
      .set( 'q', cityName)
    return this.http.get<weatherData>(environment.weatherApiBaseUrl, {
      params
    })
  }
}

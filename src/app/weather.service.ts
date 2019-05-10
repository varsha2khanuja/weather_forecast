import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

	apiKey = '79d7d6c7f1f1025adedc178bf910981d';
	CurrentUrl;
  ForecastUrl;

  constructor(private http:HttpClient) 
  {
  	this.CurrentUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
    this.ForecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='
  }


  getWeather(city,code)
  {
  	return this.http.get( this.CurrentUrl +city+ ',' +code+ '&APPID=' +this.apiKey);
  }

  getForecast(city,code)
  {
    return this.http.get( this.ForecastUrl +city+ ',' +code+ '&APPID=' +this.apiKey);
  }
}


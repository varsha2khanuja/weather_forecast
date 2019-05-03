import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

	apiKey = '79d7d6c7f1f1025adedc178bf910981d';
	url;

  constructor(private http:HttpClient) 
  {
  	this.url = 'http://api.openweathermap.org/data/2.5/forecast?q='
  }


  getWeather(city,code)
  {
  	return this.http.get( this.url +city+ ',' +code+ '&APPID=' +this.apiKey);
  }
}


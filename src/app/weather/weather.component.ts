import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	 
	location = 
	[
		{
			city : 'london',
			code : 'uk'
		},
		{
			city : 'berlin',
			code : 'germany'
		},
		{
			city : 'paris',
			code : 'france'
		},
		{
			city : 'barcelona',
			code : 'spain'
		},
		{
			city : 'amsterdam',
			code : 'netherlands'
		},
	];

	weather: any = [];
	forecast: any = [];
	isShown: boolean = true ;

  constructor( private weatherService: WeatherService ) 
  { 
  	this.getForecast();
  	this.isshown();
  }
  
  	getForecast()
  	{
  	Array.prototype.forEach.call(this.location, child => {
  	child.city;

  	return this.weatherService.getForecast( child.city, child.code).subscribe((response)=>{
  	console.log(response);
  	this.forecast.push(response);
  	});
  	});
}
	isshown()
  	{
  	 return this.isShown = !this.isShown;
  	}


  ngOnInit() 
  {
  	Array.prototype.forEach.call(this.location, child => {
  	child.city;

  	this.weatherService.getWeather( child.city, child.code).subscribe((response)=>{
  	response;
  	this.weather.push(response);
  	});
  
 
});
}}



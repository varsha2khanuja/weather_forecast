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

	weather: any;
	
  constructor( private weatherService: WeatherService ) 
  { }

  ngOnInit() 
  {
  	Array.prototype.forEach.call(this.location, child => {
  	console.log(child.city);
});
  	this.weatherService.getWeather( this.location[0].city, this.location[0].code).subscribe((response)=>{
  	console.log(response);
  	this.weather=response;
  	});
  
	
}}

import {Component, OnInit} from '@angular/core';
import {ServicesService} from "./servive/services.service";
import {weatherData} from "./model/model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData?: weatherData;
  title = 'weatherApp';
  nameCity: string = 'Wroclaw';

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit(): void {
    this.getWeatherData(this.nameCity);
  }

  test() {
    this.servicesService.getWeatherData('name').subscribe(console.log)
  }


  onSubmit() {
    this.getWeatherData(this.nameCity);
    this.nameCity = '';
  }

  private getWeatherData(cityName: string) {
    this.servicesService.getWeatherData(cityName)
      .subscribe({
          next: (respon) => {
            this.weatherData = respon
            console.log(respon);
          }
        }
      )
  }
}

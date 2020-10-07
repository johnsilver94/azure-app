import { Component } from '@angular/core';
import { Employee } from './services/employee';
import { DataService } from './services/data.service';
import { Weather } from './services/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'azure-front';

  employees: Employee[];
  weathers: Weather[];
  errorMessage: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getEmployees().subscribe(
      values => {
        this.employees = values;
      },
      error => this.errorMessage = <any>error
    );

    this.dataService.getWeather().subscribe(
      values => {
        this.weathers = values;
      },
      error => this.errorMessage = <any>error
    )
  }

  getUser(){
    this.dataService.getCurrentUserInfo();
  }

  logout(){
    this.dataService.logout();
  }
}

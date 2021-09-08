import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEmployeeManagement';
  HomeScreen =false;  // put the default values 
  EmpScreen = true;

  
onHomeScreenSelect(){
  this.HomeScreen = true ;// at any point in time only one screen is visible
  this.EmpScreen = false;
};
onEmpScreenSelect(){
  this.HomeScreen = false ;// at any point in time only one screen is visible
  this.EmpScreen = true;
}
}

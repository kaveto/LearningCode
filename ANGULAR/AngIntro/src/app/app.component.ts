import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myValue = 2;
  employees = ['kt', 'papa', 'jose'];
  employeesList = [
    { name: 'kt', age: 30 },
    { name: 'papa', age: 40 },
    { name: 'jose', age: 50 }
  ];
}

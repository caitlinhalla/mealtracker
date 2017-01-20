import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>
    <ul>
      <li *ngFor="let currentMeal of meals">{{currentMeal.name}} - {{currentMeal.details}} - {{currentMeal.calories}} calories</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  meals: Meal[] = [
    new Meal("Fries", "I ate many fries", 365),
    new Meal("Pies", "I ate many pies", 365),
    new Meal("Ice Creams", "I ate many ice creams", 365)
  ];
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number){}
}

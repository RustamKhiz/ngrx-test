import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  updatedAt?: number;

  increase() {
    this.updatedAt = Date.now()
    this.counter++;
  }

  decrease() {
    this.updatedAt = Date.now()
    this.counter--;
  }

  clear(){
    this.updatedAt = Date.now()
    this.counter = 0;
  }

  get cannotDecrease(): boolean{
    return this.counter <= 0;
  }
}

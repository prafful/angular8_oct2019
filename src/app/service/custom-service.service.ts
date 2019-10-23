import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

   PI = 22/7

   scores = [25, 35, 5]

  welcome = function(){
    console.log("Welcome to Angular Service!");
  }

  displayScore = function(){
    console.log(this.scores);
  }

  constructor() { }
}

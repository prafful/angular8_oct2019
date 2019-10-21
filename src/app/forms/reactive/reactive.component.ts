import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cts-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  reactiveFriend: any

  submitForm = function(smthn){
    console.log(smthn);
  }


  constructor() {  }

  ngOnInit() {
    this.reactiveFriend = new FormGroup(
      {
        full_name: new FormControl("", Validators.compose(
                    [
                      Validators.required, 
                      Validators.minLength(4),
                      Validators.pattern('^[A-Za-z]+$')
                    ])),
        my_score: new FormControl(8, this.customSomeValidator)
      }
    )
  }

  customSomeValidator = function(controlInstance){
    console.log(controlInstance);
    if(controlInstance.value < 10){
      return {my_score: true}
    }
    }
    

}

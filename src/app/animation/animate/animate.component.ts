import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
@Component({
  selector: 'cts-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations:[
    trigger('animateMe', 
    [
        state('small',style({
                          color:'red',
                          letterSpacing:"1px",
                          transform:'scale(1)',
                          fontSize:'22px'
                        })),
        state('big', style({
                        color:'blue',
                        letterSpacing:"0.1px",
                        transform:'scale(-1)',
                        fontSize:'22px'
                      })),
                      
        transition('small <-> big', 
                    animate('4000ms ease-out')
                  ) 
    ])
  ]
})
export class AnimateComponent implements OnInit {

  currentState = 'small'

  triggerAnimation(){
    if(this.currentState === 'small'){
      this.currentState = 'big'
    }else{
      this.currentState = 'small'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

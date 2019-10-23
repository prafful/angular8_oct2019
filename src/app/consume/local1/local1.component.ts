import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from 'src/app/service/custom-service.service';

@Component({
  selector: 'cts-local1',
  templateUrl: './local1.component.html',
  styleUrls: ['./local1.component.css']
})
export class Local1Component implements OnInit {

  localPi: any
  localScores: any
  constructor(private customService:CustomServiceService) { }

  ngOnInit() {
    console.log(this.customService.welcome());
    
    this.testService();
  }

  testService = function(){
    this.localPi = this.customService.PI
    this.localScores = this.customService.scores
    this.customService.displayScore()
    this.customService.scores.push(8)
    this.customService.displayScore()
  }

}

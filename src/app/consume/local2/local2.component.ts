import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from 'src/app/service/custom-service.service';

@Component({
  selector: 'cts-local2',
  templateUrl: './local2.component.html',
  styleUrls: ['./local2.component.css']
})
export class Local2Component implements OnInit {

  constructor(private cs:CustomServiceService) { }

  myscore: any

  ngOnInit() {
    this.cs.displayScore()
    this.myscore = this.cs.scores
  }

}

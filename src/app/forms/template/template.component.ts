import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  myform

  name = "prafful Daga"

  fname = "name...."
  myscore = 0

  submitForm = function(received){
    //console.log("{" + "name: " + this.fname + ", " +"score:" + this.myscore + "}");
    console.log(received);
  }


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  friends = ["ola", "uber", "swiftz", "ridez", "zoom", "heli"]

  training  = [ 
    {
      "name":"prafful",
      "topic":"angular 8",
      "duration":24
    },
    {
      "name":"OBB",
      "topic":"Spring Boot",
      "duration":32
    },
    {
      "name":"PK",
      "topic":"Machine Learning",
      "duration":40
    }

  ]

  display = true

  counter = 0 

  somefunction = function(){
    console.log("Function called !!! " + this.counter++);
    if(this.display){
      this.display = false
    }else{
      this.display = true
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

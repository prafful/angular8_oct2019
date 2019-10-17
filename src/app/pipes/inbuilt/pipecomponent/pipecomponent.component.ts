import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-pipecomponent',
  templateUrl: './pipecomponent.component.html',
  styleUrls: ['./pipecomponent.component.css']
})
export class PipecomponentComponent implements OnInit {

  name1 = "prafful daga"

  name2 = "PRAFFUL DAGA"

  uppercase = "check"

  salary = 80

  mydate = new Date()

  friends = ["ola", "uber", "rider" , "humbee", "roadie"]

  constructor() { }

  ngOnInit() {
  }

}

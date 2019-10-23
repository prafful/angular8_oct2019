import { Component, OnInit } from '@angular/core';
import { RemoteService } from "../../service/remote.service";

@Component({
  selector: 'cts-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  friends:any
  message:any = "Some Status"

  constructor(private remote: RemoteService) { }

  ngOnInit() {
    this.getAllRemoteFriends()
  }

  getAllRemoteFriends(){
    //subscribe will take the call back function to work
    //with success or failure scenarios!
    this.remote.getFriends().subscribe( (res)=>{
      this.message = "Success!"
      this.friends = res
    }, (err)=>{
      this.message = "Error! " + err.statusText  + " for " + err.url
      //console.log(err);
      
    } )
  }

  deleteFriendById(id){
    console.log("Id: " + id);
    this.remote.deleteFriends(id).subscribe((res)=>{
      this.message = "Deleting...!"
      console.log(res);
      this.getAllRemoteFriends()

    }, (err)=>{
      console.log(err);
    })
  }

  /* successFunction(response){
    console.log("Response: ")
    console.log(response)
    this.friends = response
    console.log("Friends: ");
    this.message = "Success!"
    console.log(this.friends);
  }

  successFunction = function(parameter){
    //code goes here
    clg()
  }
  //writing function using lambda expression!
  successFunction = (parameter)=> console.log("asd")
  


  failureFunction(error){
    console.log("Error: ")
    console.log(error)
  } */


}

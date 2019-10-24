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
  friendName:any
  updateFriendName:any = "some name..."
  updateFriendId: any

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

  addFriend(friend){
    console.log(friend);
    this.remote.addFriend(friend).subscribe((res)=>{
      this.message = "Friend Add Success!"
      this.getAllRemoteFriends()
      console.log(res);
    }, (err)=>{
      this.message = "Friend Add Error!"
      console.log(err);
    })
  }

  captureFriend(id){
    console.log("Update friend with id: " + id);
    this.remote.getFriendById(id).subscribe(res => {
      console.log(res);
      this.updateFriendName = res.name
      this.updateFriendId = res.id
      this.message = "Updating: " + this.updateFriendName
      console.log("Updating: " + this.updateFriendName);
    }, err =>{
      this.message = "Error in updating friend. Did not get friend with given ID! "
      console.log(err);
    })
    
  }

  updateFriend(uf){
    this.remote.updateFriend(this.updateFriendId, uf)
                .subscribe((res) => {
                  console.log("Friend Update Success");
                  this.message = "Update: " + res.name + " Success!"
                  console.log(res);
                  this.getAllRemoteFriends()
                }, (err) =>{
                  this.message = "Update Failure!"
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

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class RemoteService {

  constructor(private http:HttpClient) { }

  getFriends(){
    return this.http.get("http://localhost:3000/fellows")
  }

  deleteFriends(id){
    return this.http.delete("http://localhost:3000/fellows/" + id)
  }

  addFriend(friend){
    return this.http.post("http://localhost:3000/fellows", friend )
  }

  updateFriend(id, friend){
    return this.http.put("http://localhost:3000/fellows/"+id, friend)
  }

  getFriendById(id){
    return this.http.get("http://localhost:3000/fellows/" + id)
  }

}

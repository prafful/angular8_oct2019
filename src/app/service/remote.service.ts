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

}

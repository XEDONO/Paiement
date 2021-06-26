import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  constructor( private http:HttpClient) { }


  public getClients(){
   return  this.http.get("http://localhost:8080/api/clients");

  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {ClientsReports} from "../ClientsReports";


@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  constructor( private http:HttpClient) { }



  public getClients(){
    return  this.http.get("http://localhost:8080/api/clients");

  }

  addClient(client:any): Observable<ClientsReports> {
    const clientUrl='http://localhost:8080/api/clients';
    return this.http.post<ClientsReports>(clientUrl, client);
  }

  updateClient(id: number, value: any): Observable<ClientsReports> {
    const clientUrl='http://localhost:8080/api/clients/'+id;
    return this.http.put<ClientsReports>(clientUrl, value);
  }

  deleteClient(id: number): Observable<ClientsReports> {
    const clientUrl='http://localhost:8080/api/clients/'+id;
    return this.http.delete<ClientsReports>(clientUrl);
  }


}



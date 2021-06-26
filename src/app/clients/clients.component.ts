import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {HttpClient} from "@angular/common/http";
import * as url from "url";
export class Client {
  constructor(
    public id: number,
    public prenom: string,
    public nom: string,
    public ville: string,
    public tel: string,
    public bank: string,
    public montant: number,
  ) {
  }
}


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  clients: Client[]=[];


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(

    map(({ matches }) => {
      if (matches) {
        return [

          { title: '', cols: 8, rows: 2 },

        ];
      }

      return [
        { title: '', cols: 8, rows: 2 },

      ];
    })
  );
  displayedColumns: string[] = ['number', 'name', 'prenom','ville', 'weight','bank','plafond','action'];


  ngOnInit() {
    this.getClients();
  }

  getClients(){
this.httpClient.get<any>(url:'http://localhost:8080/api/clients').subscribe(
response=>{
console.log(response);
  this.clients=response;
}

    )
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private httpClient:HttpClient,

  ) {
this.clients=[];
  }
}

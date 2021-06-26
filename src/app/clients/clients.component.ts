import { Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ClientListService} from "../client-list.service";
import {ClientsReports} from "../../ClientsReports";
import {MatTableDataSource} from "@angular/material/table";




@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

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
  ELEMENT_DATA:ClientsReports[]=[];
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'ville','tel','bank','montant','action'];
  dataSource = new MatTableDataSource<ClientsReports>(this.ELEMENT_DATA);
ngOnInit() {
  this.getAllClients();
}
public getAllClients(){
  let resp=this.service.getClients();
  resp.subscribe(report=>this.dataSource.data=report as ClientsReports[])
}

  constructor(
    private breakpointObserver: BreakpointObserver,
              private service:ClientListService) {

  }
}


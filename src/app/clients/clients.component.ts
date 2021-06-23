import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
export interface PeriodicElement {
  name: string;
  prenom: string;
  position: number;
  tel: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hassani',prenom:'Nom1', tel:612458798, symbol: 'A'},
  {position: 2, name: 'Nassiri', prenom:'Nom2',tel: 612458798, symbol: 'B'},
  {position: 3, name: 'Prenom 1', prenom:'Nom3',tel: 612458798, symbol: 'C'},
  {position: 4, name: 'Prenom 2', prenom:'Nom4',tel: 612458798, symbol: 'D'},
  {position: 5, name: 'Prenom 3', prenom:'Nom5',tel: 612458798, symbol: 'E'},
  {position: 6, name: 'Prenom 4', prenom:'Nom6',tel: 612458798, symbol: 'F'},
  {position: 7, name: 'Prenom 5', prenom:'Nom7',tel: 124587198 ,symbol: 'G'},
  {position: 8, name: 'Prenom 6', prenom:'Nom8',tel: 124518798, symbol: 'H'},
  {position: 9, name: 'Prenom 7', prenom:'Nom9',tel: 612458798, symbol: 'I'},
  {position: 10, name:'Prenom 8', prenom:'Nom10',tel: 612458798, symbol: 'J'},






];
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

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
  displayedColumns: string[] = ['number', 'name', 'prenom', 'weight','symbol',];
  dataSource = ELEMENT_DATA;

  constructor(private breakpointObserver: BreakpointObserver) {

  }
}

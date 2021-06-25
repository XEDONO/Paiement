import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
export interface PeriodicElement {
  name: string;
  prenom: string;
  position: number;
  tel: number;
  bank: string;
  plafond:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hassani',prenom:'Nom1', tel:612458798, bank: 'BMCE',plafond:1540},
  {position: 2, name: 'Nassiri', prenom:'Nom2',tel: 612458798, bank: 'WAFA BANK',plafond:20000},
  {position: 3, name: 'Prenom 1', prenom:'Nom3',tel: 612458798, bank: 'SOCIETE GENERALE',plafond:48120},
  {position: 4, name: 'Prenom 2', prenom:'Nom4',tel: 612458798, bank: 'BMCE',plafond:146970},
  {position: 5, name: 'Prenom 3', prenom:'Nom5',tel: 612458798, bank: 'BANK POPULAIRE',plafond:13650},
  {position: 6, name: 'Prenom 4', prenom:'Nom6',tel: 612458798, bank: 'WAFABANK',plafond:85040},
  {position: 7, name: 'Prenom 5', prenom:'Nom7',tel: 124587198 ,bank: 'BMCE',plafond:64970},
  {position: 8, name: 'Prenom 6', prenom:'Nom8',tel: 124518798, bank: 'BANK POPULAIRE',plafond:5000},
  {position: 9, name: 'Prenom 7', prenom:'Nom9',tel: 612458798, bank: 'SOCIETE GENERALE',plafond:1000},
  {position: 10, name:'Prenom 8', prenom:'Nom10',tel: 612458798, bank: 'WAFA BANK',plafond:15000},








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
  displayedColumns: string[] = ['number', 'name', 'prenom', 'weight','bank','plafond','action'];
  dataSource = ELEMENT_DATA;

  constructor(private breakpointObserver: BreakpointObserver) {

  }
}

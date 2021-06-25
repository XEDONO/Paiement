import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent {
  emailFormControl = new FormControl('', [
    Validators.required,

  ]);
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '', cols: 2, rows: 2},

        ];
      }

      return [
        { title: '', cols: 2, rows: 2 },

      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

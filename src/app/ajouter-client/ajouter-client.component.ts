import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Client} from "../Clientss";
import { Router } from '@angular/router';
import { ClientListService } from "../client-list.service";

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent {




/**---------------------------------------------------------------------------------*/
  nomFormControl = new FormControl('', [
    Validators.required,
  ]);

  prenomFormControl = new FormControl('', [
    Validators.required,
  ]);

  telFormControl = new FormControl('', [
    Validators.required,
  ]);


  /**---------------------------------------------------------------------------------*/





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


  /**---------------------------------------------------------------------------------*/

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private clientService: ClientListService) {



  }

  /**---------------------------------------------------------------------------------*/

addNewClient(form: any){
  let newClient={
    nom:form.value.client_nom,
    prenom:form.value.client_prenom,
    tel:form.value.client_tel,
    ville:form.value.client_ville,
    bank:form.value.client_bank,
    montant:form.value.client_montant,
  };
  console.log(newClient);

  this.clientService.addClient(newClient).subscribe(data=>{
    console.log(data);
  })

}



  /**---------------------------------------------------------------------------------*/
onSubmit()
  {
    console.log(this.addNewClient.value);
    this.clientService.register(this.addNewClient.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }
  /**---------------------------------------------------------------------------------*/

  /**---------------------------------------------------------------------------------*/


}

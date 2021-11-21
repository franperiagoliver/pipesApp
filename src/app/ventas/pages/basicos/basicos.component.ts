import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'fran';
  nombreUpper: string = 'FRAN';
  nombreCompleto: string = 'fRAn pERIagO'

  fecha: Date = new Date();

}

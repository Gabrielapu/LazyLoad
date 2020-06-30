import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  numeros: number[] = [];
  error:string;
  total:number = 0;
  constructor() { }

  ngOnInit() {
  }

  agregar (nro: number) {
    if(this.numeros.length <= 9) {
      this.numeros.push(nro);
      this.total += Number(nro);
    } else {
      this.error = 'Maximo 10 numeros o se quema el programa';
    }
  }

}

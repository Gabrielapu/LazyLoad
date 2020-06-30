import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {

  nombres:string[] = [];
  nombresCopy: string[] = [];
  error:string;
  constructor() { 

    this.nombres = ['Juan','Pepa','Oscar','Gabriel','Marco','Andre'];
    this.nombresCopy = [... this.nombres];
  }

  ngOnInit(): void {

  }

  agregar(nombre: string) {
    if (this.nombres.length <= 9) {
      this.nombres.push(nombre);
      this.nombresCopy = [... this.nombres];
    } else {
      this.error = 'Ha alcanzado el maximo de nombres carajo';
    }
  }

  borrar (id: number) {
    this.nombres.splice(id,1);
    this.nombresCopy = [... this.nombres];
  }

  editar (nombre: string, index: number) {
      this.nombres[index] = nombre;
      this.nombresCopy = [... this.nombres];
  }

  filtrar (name: string) {
    this.nombresCopy = this.nombres.filter(x => x.indexOf(name) >= 0 );
  }

}

import { Component, OnInit } from '@angular/core';
import { PersonasModel } from '../../models/personas.model';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {
  
  personas: PersonasModel[] = [];
  //Si no se inicializa no pushea
  gay: string;
  error: string;
  aviso:string;
  constructor() {}

  ngOnInit() {
  }

  agregar (people: PersonasModel) {
    if(people.genero == 'masculino' || people.genero == 'femenino'){
    
      if(this.personas.length <= 9) {
        
        this.personas.push(people);
      } else {
        this.error = '10 no ma'
      }

    } else {
      this.gay = 'Ese genero no se conoce en este programa'
    }
    let a = this.personas.every(x => x.genero === 'masculino')
    if( a = true && this.personas.length == 9) {
      this.aviso = 'Puros machotes'
    }
  }

  borrar (id: number) {
    this.personas.splice(id,1);
  }

  editar(llegando: PersonasModel, index: number) {
    this.personas[index].nombre = llegando.nombre;
    this.personas[index].genero = llegando.genero;
  }

  borrarMachos () {    
    
    //REcorre el arreglo entregando el elemento y su indice
    this.personas.forEach((persona, index) => {
      if(persona.genero === 'masculino') this.personas.splice(index, 1);
    });

   /*  let i:number;
    for (i = 0; i <= 9; i++) {
      if( gente[i].genero == 'masculino'){
        this.personas.splice(i,1);
      }
    } */
       
  }

}

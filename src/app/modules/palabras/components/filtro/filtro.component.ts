import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  
  formFiltro: FormGroup;
  @Output() filtroEmit = new EventEmitter;
  constructor() { }

  ngOnInit() {
    this.formFiltro = new FormGroup ({
      nombreBuscado: new FormControl('',Validators.required)
    })
  }

  onSubmit() {
    this.filtroEmit.emit(this.formFiltro.get('nombreBuscado').value)
    this.formFiltro.reset();
  }

}

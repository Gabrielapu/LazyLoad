import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonasModel } from '../../models/personas.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  formAdd: FormGroup;
  personas: PersonasModel


  @Output() addEmit = new EventEmitter

  constructor() { }

  ngOnInit() {
    this.formAdd = new FormGroup ({
      nombre: new FormControl('',Validators.required),
      genero: new FormControl('',Validators.required),
    })
  }

  onSubmit() {
    if(this.formAdd.valid)
    {
      this.addEmit.emit(this.formAdd.value)
      this.formAdd.reset();

    } else {
      console.log('nulo');
    }
  }

}

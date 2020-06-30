import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  @Output() addEmitter = new EventEmitter

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('Pepe', Validators.required)
    })

  }

  onSubmit() {
    if(this.form.valid){
      // Eso es un string, ya que restacas el valor del input
      this.addEmitter.emit(this.form.get('nombre').value)
      this.form.reset(); // Para que era esto?
    } else {
      console.log('nulo');
    }

  }

}

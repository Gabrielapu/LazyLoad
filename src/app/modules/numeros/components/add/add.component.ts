import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  formAdd: FormGroup;

  @Output() addEmit = new EventEmitter
  @Input() total: number;
  constructor() { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      numero: new FormControl('',Validators.required),
    })
  }

  onSubmit() {
    if(this.formAdd.valid){
      // Eso es un string, ya que restacas el valor del input
      this.addEmit.emit(this.formAdd.get('numero').value)
      this.formAdd.reset(); // Para que era esto?
    } else {
      console.log('nulo');
    }

  }

}

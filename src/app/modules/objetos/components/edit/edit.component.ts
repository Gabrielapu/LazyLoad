import { Component, OnInit, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PersonasModel } from '../../models/personas.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  modalRef: BsModalRef ;
  formEdit: FormGroup;

  @Output() editEmitter = new EventEmitter;
  @Input() persona: PersonasModel;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.formEdit = new FormGroup({
      nombre: new FormControl(this.persona.nombre, Validators.required),
      genero: new FormControl(this.persona.genero, Validators.required),
    });
  }
  

  onSubmit() {
    if(this.formEdit.valid){
      this.editEmitter.emit(this.formEdit.value)      
      this.modalRef.hide();
      this.formEdit.reset();
    } else {
      console.log('Mala tu custion');
    }
  }

}

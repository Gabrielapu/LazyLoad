import { Component, OnInit, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  modalRef: BsModalRef;
  form: FormGroup;  

  @Output() editEmitter = new EventEmitter;
  @Input() name: string;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.form = new FormGroup({
      nombre: new FormControl(this.name, Validators.required)
    });
  }

  onSubmit() {
    if(this.form.valid){
      this.editEmitter.emit(this.form.get('nombre').value);
      this.modalRef.hide();
      this.form.reset();
    }
  }

}

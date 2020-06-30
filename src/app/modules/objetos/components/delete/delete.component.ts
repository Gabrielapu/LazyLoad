import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Output() deleteEmitter = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onSubmit () {
    this.deleteEmitter.emit();
  }

}

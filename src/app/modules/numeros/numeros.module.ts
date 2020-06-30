import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumerosRoutingModule } from './numeros-routing.module';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { AddComponent } from './components/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NumerosComponent, AddComponent],
  imports: [
    CommonModule,
    NumerosRoutingModule,
    ReactiveFormsModule
  ]
})
export class NumerosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjetosRoutingModule } from './objetos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ObjetoComponent } from './pages/objeto/objeto.component';


@NgModule({
  declarations: [AddComponent, EditComponent, DeleteComponent, ObjetoComponent],
  imports: [
    CommonModule,
    ObjetosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ObjetosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PalabrasRoutingModule } from './palabras-routing.module';
import { PalabraComponent } from './pages/palabra/palabra.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FiltroComponent } from './components/filtro/filtro.component';



@NgModule({
  declarations: [PalabraComponent, AddComponent, EditComponent, DeleteComponent, FiltroComponent],
  imports: [
    CommonModule,
    PalabrasRoutingModule,
    AccordionModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class PalabrasModule { }

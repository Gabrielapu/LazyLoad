import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumerosComponent } from './pages/numeros/numeros.component';


const routes: Routes = [
  { path: '', component: NumerosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumerosRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetoComponent } from './pages/objeto/objeto.component';


const routes: Routes = [
  { path: '', component: ObjetoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjetosRoutingModule { }

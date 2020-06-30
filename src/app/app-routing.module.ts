import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'palabras', loadChildren:() => import('./modules/palabras/palabras.module').then(x => x.PalabrasModule) },
  { path: 'numeros', loadChildren:() => import('./modules/numeros/numeros.module').then(x => x.NumerosModule) },
  { path: 'objetos', loadChildren:() => import('./modules/objetos/objetos.module').then(x => x.ObjetosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { MostrarnoticiasComponent } from './mostrarnoticias/mostrarnoticias.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NoticiasComponent, pathMatch:'full' },
  { path: 'mostrarnoticias', component: MostrarnoticiasComponent,pathMatch:'full'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

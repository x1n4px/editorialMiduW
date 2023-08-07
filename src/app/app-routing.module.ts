import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetallesLibrosComponent } from './component/detalles-libros/detalles-libros.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: ':title', component: DetallesLibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

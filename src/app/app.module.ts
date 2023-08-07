import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { HomeComponent } from './component/home/home.component';
import { DetallesLibrosComponent } from './component/detalles-libros/detalles-libros.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    DetallesLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

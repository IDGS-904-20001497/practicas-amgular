import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanciaComponent } from './ejercicios/distancia/distancia.component';
import { CalculosEComponent } from './ejercicios/calculos-e/calculos-e.component';

@NgModule({
  declarations: [
    AppComponent,
    DistanciaComponent,
    CalculosEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

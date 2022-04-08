import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaSoporteBPMComponent } from './components/consulta-soporte-bpm/consulta-soporte-bpm.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaSoporteBPMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

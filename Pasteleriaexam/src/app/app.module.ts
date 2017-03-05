import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PasteleriaComponent } from './pasteleria/pasteleria.component';
import { PastelComponent } from './pastel/pastel.component';




@NgModule({
  declarations: [
    AppComponent,
    PasteleriaComponent,
    PastelComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

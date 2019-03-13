import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuliettePageComponent } from './juliette-page/juliette-page.component';
import { AdelePageComponent } from './adele-page/adele-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JuliettePageComponent,
    AdelePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

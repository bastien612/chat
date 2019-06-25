import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuliettePageComponent } from './pages/juliette-page/juliette-page.component';
import { AdelePageComponent } from './pages/adele-page/adele-page.component';
import { BastienPageComponent } from './pages/bastien-page/bastien-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JuliettePageComponent,
    AdelePageComponent,
    BastienPageComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

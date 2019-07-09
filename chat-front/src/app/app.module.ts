import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatDividerModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JuliettePageComponent } from "./pages/juliette-page/juliette-page.component";
import { AdelePageComponent } from "./pages/adele-page/adele-page.component";
import { BastienPageComponent } from "./pages/bastien-page/bastien-page.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ChecklistComponent } from "./pages/checklist/checklist.component";

@NgModule({
  declarations: [
    AppComponent,
    JuliettePageComponent,
    AdelePageComponent,
    BastienPageComponent,
    ProductFormComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

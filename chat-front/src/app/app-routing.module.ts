import { ChecklistComponent } from "./pages/checklist/checklist.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JuliettePageComponent } from "./pages/juliette-page/juliette-page.component";
import { AdelePageComponent } from "./pages/adele-page/adele-page.component";
import { BastienPageComponent } from "./pages/bastien-page/bastien-page.component";

const routes: Routes = [
  { path: "", component: ChecklistComponent },
  { path: "juliette", component: JuliettePageComponent },
  { path: "adele", component: AdelePageComponent },
  { path: "bastien", component: BastienPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

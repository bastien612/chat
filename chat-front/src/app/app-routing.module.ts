import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ChecklistDetailComponent } from "./pages/checklist-detail/checklist-detail.component";
import { ChecklistComponent } from "./pages/checklist/checklist.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JuliettePageComponent } from "./pages/juliette-page/juliette-page.component";
import { AdelePageComponent } from "./pages/adele-page/adele-page.component";
import { BastienPageComponent } from "./pages/bastien-page/bastien-page.component";

const routes: Routes = [
  { path: "checklist/:id", component: ChecklistDetailComponent },
  { path: "checklist", component: ChecklistComponent },
  { path: "juliette", component: JuliettePageComponent },
  { path: "adele", component: AdelePageComponent },
  { path: "bastien", component: BastienPageComponent },
  { path: "", redirectTo: "checklist", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

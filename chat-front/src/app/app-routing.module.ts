import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuliettePageComponent } from './pages/juliette-page/juliette-page.component';
import { AdelePageComponent } from './pages/adele-page/adele-page.component';

const routes: Routes = [
  { path: 'juliette', component: JuliettePageComponent },
  { path: 'adele', component: AdelePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

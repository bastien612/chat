import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuliettePageComponent } from './juliette-page/juliette-page.component';

const routes: Routes = [
  { path: 'juliette', component: JuliettePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

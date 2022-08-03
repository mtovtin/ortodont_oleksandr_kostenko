import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { BracesComponent } from './braces/braces.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'advantages', component: AdvantagesComponent},
  {path: 'braces', component: BracesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

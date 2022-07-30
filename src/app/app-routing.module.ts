import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvantagesComponent } from './advantages/advantages.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'advantages', component: AdvantagesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

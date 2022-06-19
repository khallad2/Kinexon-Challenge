import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DriversComponent} from "./components/drivers/drivers.component";
import {HomeComponent} from "./components/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'drivers', component: DriversComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

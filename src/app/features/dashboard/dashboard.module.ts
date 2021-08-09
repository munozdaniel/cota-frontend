import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { HomeSeccionComponent } from './ui/home-seccion/home-seccion.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeSeccionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

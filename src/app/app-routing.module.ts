import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DirectiveComponent } from "./directives/directive/directive.component";


const routes: Routes = [
  {
    path:"one",
    component:FirstComponent
  },
  {
    path:"two",
    component:SecondComponent
  },
  {
    path:"three",
    component:DirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

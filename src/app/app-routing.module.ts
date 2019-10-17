import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DirectiveComponent } from "./directives/directive/directive.component";
import { PipecomponentComponent } from './pipes/inbuilt/pipecomponent/pipecomponent.component';




const routes: Routes = [
  {
    path:"",
    redirectTo:"second",
    pathMatch:"full"
  },
  {
    path:"first",
    component:FirstComponent
  },
  {
    path:"second",
    component:SecondComponent
  },
  {
    path:"directive",
    component:DirectiveComponent
  },
  {
    path:"pipe",
    component:PipecomponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

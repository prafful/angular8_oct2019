import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DirectiveComponent } from "./directives/directive/directive.component";
import { PipecomponentComponent } from './pipes/inbuilt/pipecomponent/pipecomponent.component';
import { TemplateComponent } from './forms/template/template.component';
import { Family1Component } from './family/family1/family1/family1.component';
import { Family2Component } from './family/family2/family2/family2.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { Local1Component } from './consume/local1/local1.component';
import { Local2Component } from './consume/local2/local2.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { AnimateComponent } from './animation/animate/animate.component';




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
  },
  {
    path:"templateform",
    component:TemplateComponent
  },
  {
    path:"family1",
    component:Family1Component
  },
  {
    path:"family2",
    component:Family2Component
  },
  {
    path:"reactiveform",
    component:ReactiveComponent
  },
  {
    path:"local1",
    component:Local1Component
  },
  {
    path:"local2",
    component:Local2Component
  },
  {
    path:"remote",
    component:RemoteComponent
  },
  {
    path:"animate",
    component:AnimateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

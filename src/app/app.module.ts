import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './custom/fourth/fourth.component';
import { FifthComponent } from './custom/sub/fifth/fifth.component';
import { SixthComponent } from './custom/sub/sixth/sixth.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { PipecomponentComponent } from './pipes/inbuilt/pipecomponent/pipecomponent.component';
import { SortstringPipe } from './pipes/custom/sortstring.pipe';
import { TemplateComponent } from './forms/template/template.component';
import { Family1Component } from './family/family1/family1/family1.component';
//import { Parent1Component } from './family/family1/parent1/parent1.component';
import { Father1Component } from './family/family1/father1/father1.component';
import { Mother1Component } from './family/family1/mother1/mother1.component';
import { Child1Component } from './family/family1/child1/child1.component';
import { Family2Component } from './family/family2/family2/family2.component';
import { Father2Component } from './family/family2/father2/father2.component';
import { Mother2Component } from './family/family2/mother2/mother2.component';
import { Child2Component } from './family/family2/child2/child2.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
//import { SortstringPipe } from './pipes/custom/sortstring.pipe';

@NgModule(
  {
  declarations: [ 
                  RootComponent, 
                  FirstComponent, 
                  SecondComponent, 
                  ThirdComponent, 
                  FourthComponent, 
                  FifthComponent, 
                  SixthComponent, 
                  DirectiveComponent, 
                  PipecomponentComponent, 
                  SortstringPipe, 
                  TemplateComponent, 
                  Family1Component, 
                  Father1Component, 
                  Mother1Component, 
                  Child1Component,
                  Family2Component, 
                  Father2Component, 
                  Mother2Component, 
                  Child2Component, 
                  ReactiveComponent
                ],
  imports: [ 
            BrowserModule, 
            AppRoutingModule,
            FormsModule ,
            ReactiveFormsModule
          ],
  providers: [],
  bootstrap: [RootComponent]
}
)
export class RootModule { }

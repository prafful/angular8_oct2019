import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
                  SortstringPipe 
                ],
  imports: [ 
            BrowserModule, 
            AppRoutingModule  
          ],
  providers: [],
  bootstrap: [RootComponent]
}
)
export class RootModule { }

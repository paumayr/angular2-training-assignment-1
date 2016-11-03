import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffeelist.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      AppComponent,
      CoffeeListComponent 
  ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }

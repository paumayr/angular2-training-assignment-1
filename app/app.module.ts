import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CoffeeListComponent } from "./coffeelist.component";
import { JunkieComponent } from "./junkie.component";
import { CoffeeListService} from "./coffeelist.service";
import { appRoutes } from "./routes";

@NgModule({
  imports:      [ 
      BrowserModule,
      RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [ 
      AppComponent,
      CoffeeListComponent,
      JunkieComponent
  ],
  providers: [
      CoffeeListService
  ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }

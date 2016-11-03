import { Route } from "@angular/router";

import { CoffeeListComponent } from "./coffeelist.component";
import { JunkieComponent } from "./junkie.component";

export let appRoutes : Route[] = [
    { path: "coffeelist", component: CoffeeListComponent },
    { path: "coffeelist/:id", component: JunkieComponent },
    { path: "**", redirectTo: "coffeelist" }
];


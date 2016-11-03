import { Component } from "@angular/core";

import { Junkie } from "./junkie";

@Component({
    moduleId: module.id,
    selector: "coffee-list",
    templateUrl: "coffeelist.component.html"
})
export class CoffeeListComponent {

    junkies : Array<Junkie> = [];

    add(name: string) {
        this.junkies.push(new Junkie(name));
    }
}
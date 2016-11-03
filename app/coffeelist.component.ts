import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import { Junkie } from "./junkie";
import { CoffeeListService } from "./coffeelist.service";

@Component({
    moduleId: module.id,
    selector: "coffee-list",
    templateUrl: "coffeelist.component.html"
})
export class CoffeeListComponent {
    private junkiesChangedSubscription : Subscription = null;

    constructor(private coffeeListService: CoffeeListService) {
        this.junkiesChangedSubscription = coffeeListService
            .junkiesChanged
            .subscribe((newJunkies) => this.junkies = newJunkies);
    }

    junkies : Array<Junkie> = [];

    add(name: string) {
        this.coffeeListService.add(new Junkie(name));
    }
}
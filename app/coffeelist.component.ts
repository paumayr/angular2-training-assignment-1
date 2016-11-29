import { Component } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

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

    consume(junkie : Junkie, units : number, unitPrice : number) {
        this.coffeeListService.consume(junkie, units, unitPrice);
    }

    add(name: string) {
        this.coffeeListService.add({
            id: null,
            name: name,
            balance: 0.0,
            consumptions: 0
        });
    }
}
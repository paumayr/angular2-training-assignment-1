import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "coffee-list",
    templateUrl: "coffeelist.component.html"
})
export class CoffeeListComponent {

    junkies = [{
        name: "Philipp",
        consumptions: 50,
        balance: 4.50
    }, {
        name: "Mathias",
        consumptions: 70,
        balance: 7.85
    }];

    add(name: string) {
        this.junkies.push({
            name: name,
            consumptions: 0,
            balance: 0.00
        });
    }
}
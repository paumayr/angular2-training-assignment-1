import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Junkie } from "./junkie";
import { CoffeeListService } from "./coffeelist.service";

@Component({
    moduleId: module.id,
    templateUrl: "junkie.component.html"
})
export class JunkieComponent {

    junkie : Junkie = null;

    constructor(activatedRoute: ActivatedRoute,
                coffeeListService: CoffeeListService) {
        activatedRoute.params.subscribe(params => {
            var id = +params["id"];
            if (id >= 0 && id < coffeeListService.junkies.length) {
                this.junkie = coffeeListService.junkies[id];
            }
        });
    }
}
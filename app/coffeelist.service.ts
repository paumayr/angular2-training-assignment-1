import { Injectable } from "@angular/core";
import { Junkie } from "./junkie";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CoffeeListService {

    public junkies: Array<Junkie> = [];

    private junkiesChangedSubject = new BehaviorSubject<Array<Junkie>>([]);
    public get junkiesChanged() : Observable<Array<Junkie>> {
        return this.junkiesChangedSubject;
    }

    constructor() {
    }

    add(junkie: Junkie) {
        this.junkies = this.junkies.slice(0);
        this.junkies.push(junkie);
        this.junkiesChangedSubject.next(this.junkies);
    } 
}
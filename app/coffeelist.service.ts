import { Injectable } from "@angular/core";
import { Junkie } from "./junkie";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Http } from "@angular/http";

@Injectable()
export class CoffeeListService {

    public junkies: Array<Junkie> = [];

    private junkiesChangedSubject = new BehaviorSubject<Array<Junkie>>([]);
    public get junkiesChanged() : Observable<Array<Junkie>> {
        return this.junkiesChangedSubject;
    }

    constructor(private http: Http) {
        this.fetch();
    }

    add(junkie: Junkie) {
        this.http.post(`api/coffeelist`, junkie)
            .subscribe(r => this.fetch());
    }

    fetch() {
        this.http.get('api/coffeelist')
            .map(r => <Junkie[]>r.json())
            .subscribe((data) => {
                this.junkies = data;
                this.junkiesChangedSubject.next(this.junkies);
            });
    }

    consume(junkie: Junkie, units : number, unitPrice : number) {
        junkie.balance -= (units * unitPrice);
        junkie.consumptions += units;
        this.update(junkie);
    }

    update(junkie: Junkie) {
        this.http.put(`api/coffeelist/${junkie.id}`, junkie)
            .subscribe(r => this.fetch());
    }

    remove(junkie: Junkie) {
        this.http.delete(`api/coffeelist/${junkie.id}`)
            .subscribe(r => this.fetch());
    }
}
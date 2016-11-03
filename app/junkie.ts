

export class Junkie {
    
    public consumptions = 0;
    public balance = 0.0;

    constructor(readonly name: string) {
    }

    consume(amount : number, unitPrice: number) {
        this.consumptions += amount;
        this.balance -= amount * unitPrice;
    }
}
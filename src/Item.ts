export default class Item {
    public name: string;
    public price: number;
    public onSale: boolean;

    constructor(name: string, price: number, onSale: boolean) {
        this.name = name;
        this.price = price;
        this.onSale = onSale;
    }
}

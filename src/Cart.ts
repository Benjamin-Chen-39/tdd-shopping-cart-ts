import Item from './Item';
export default class Cart {

    public items: Item[] = [];
    public totalPrice: number = 0;
    public output: any[] = [];

    push (i: Item) :any[] {
        this.items.push(i);
        this.totalPrice += i.price;
        this.output.push({name: i.name, price: i.price, quantity: 1})
        return this.output;
    }
    

    

}
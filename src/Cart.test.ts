import Cart from './Cart';
import Item from './Item';

describe('Cart', () => {
    test('should initialize as empty', () => {
        const cart = new Cart();
        expect(cart.items).toEqual([]);
        expect(cart.totalPrice).toEqual(0);
    })

    test('empty cart should update price to reflect all items in cart', () => {
        const cart = new Cart();
        const item = new Item('itemOne', 19.99, false);
        cart.push(item);
        expect(cart.totalPrice).toEqual(19.99);
    })

    test('empty cart should update list with price and quantity', () => {
        const cart = new Cart();
        const itemOne = new Item('itemOne', 19.99, false);
        const itemTwo = new Item('itemTwo', 69.42, false);
        cart.push(itemOne);
        cart.push(itemTwo);
        expect(cart.output).toEqual( expect.arrayContaining([
            expect.objectContaining({name: 'itemOne', price: 19.99, quantity: 1}),
            expect.objectContaining({name: 'itemTwo', price: 69.42, quantity: 1})
          ]));

    })

});

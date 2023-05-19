'use strict';

const resto = {
    table: 'Standard',
    mainmenu: 'Chinese',
    starter: 'Soup',
    orders: [],
    order: function (name, time) {
        console.log(`${name} booked ${this.table} table at ${time} and ordered ${this.starter} and ${this.mainmenu} dishes.`);
        this.orders.push(name, time);
    },
};
resto.order("Harshi", 2, 1, 1, 2);
const order = resto.order;
const bar = {
    table: 'Luxury',
    mainmenu: 'RedWine',
    starter: 'Chicken Wings',
    orders: [],
};
const resto2 = {
    table: 'Family',
    mainmenu: 'Indian',
    starter: 'Fries',
    orders: [],
};
//using call
order.call(bar, "Prem", 4);
order.call(resto2, "Avi", 6);
const item = ["Him", 3];
order.call(bar, ...item);
//using apply
order.apply(resto2, item);
//using bind
const order_item = order.bind(bar);
order_item("Yoha", 5);
order_item("Avita", 9.30);
//bind with default parameter
const orderP = order.bind(resto2, 'Prabhu');
orderP(4);
orderP(3.55);
//function with default parameter
const bill = function (tax, value) {
    console.log(`Your Bill amount is ${value + (0.1 * tax)}`);
}
const addamt = bill.bind(null, 564);
addamt(24);
addamt(35);

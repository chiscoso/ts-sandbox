const menu = [
    { name: "Margarita", price: 8 },
    { name: "Pepperoni", price: 9 },
    { name: "BBQ Chicken", price: 10 },
    { name: "Veggie", price: 8 },
    { name: "Hawaiian", price: 10 },
];
let cashInRegister = 100;
const orderQueue = [];
let orderID = 1;
// function addNewPizzaFromScratch(name, price) {
//     menu.push({name, price})
//     console.log("Added ${name} to the menu for ${price}.")
// }
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
    console.log("Added ${pizzaObj.name} to the menu for ${pizzaObj.price}.");
}
/* function placeOrder (pizzaName) {
    // My own function
    if (pizzaName in menu) {
        cashInRegister += menu[pizzaName].price
        newOrder = {id: orderID++, pizza: "${pizzaName}", status: "ordered"}
        orderQueue.push(newOrder)
        return newOder
    }
    else{
        console.log("Sorry, we don't have ${pizzaName} on the menu.")
        return

    }
} */
function placeOrderJS(pizzaName) {
    // function from the tutorial
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.log("Sorry, we don't have ${pizzaName} on the menu.");
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { pizza: selectedPizza, status: "ordered", id: orderID++ };
    orderQueue.push(newOrder);
    console.log("Order Number: ${newOrder.id} New ${newOrder.pizza} added as ${newOrder.status} in the queue");
    return newOrder;
}
function completeOrder(orderId) {
    const orderToComplete = orderQueue.find(order => order.id === orderId);
    if (!orderToComplete) {
        console.log("Order not found");
        return;
    }
    orderToComplete.status = "completed";
    return orderToComplete;
}
addNewPizza({ name: "Chicken Ranch", price: 8 });
addNewPizza({ name: "Buffalo Chicken", price: 10 });
addNewPizza({ name: "Meat & Cheese Lovers", price: 12 });
placeOrderJS("Margarita");
completeOrder(1);
console.log("menu:", menu);
console.log("cashInRegister:", cashInRegister);
console.log("orderQueue:", orderQueue);
//# sourceMappingURL=pizzaApp.js.map
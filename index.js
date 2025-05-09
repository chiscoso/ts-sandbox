/* const menu = [
    {name: "Margarita", price: 8},
    {name: "Pepperoni", price: 9.99},
    {name: "BBQ Chicken", price: 10},
    {name: "Veggie", price: 8.99},
    {name: "Hawaiian", price: 10},   
]

const cashInRegister = 100
const orderQueue = []
const orderID = 1

function addNewPizza(name, price) {
    menu.push({name, price})
    console.log("Added ${name} to the menu for ${price}.")
}

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
    console.log("Added ${pizzaObj.name} to the menu for ${pizzaObj.price}.")   
}

function placeOrder (pizzaName) {
    // My own function
    if (pizzaName in menu) {
        cashInRegister += menu[pizzaName].price
        newOrder = {id: orderID++, pizza: "${pizzaName}", status: "ordered"}
        orderQueue.push(newOrder)
        return newOder
    }
    else{
        console.log("Sorry, we don't have ${pizzaName} on the menu.")

    }
}

function placeOrderJS (pizzaName) {
    // function from the tutorial
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = {pizza: selectedPizza, status: "ordered", id: orderID++}
    orderQueue.push(newOrder)
    console.log("Order Number: ${newOrder.id} New ${newOrder.pizza} added as ${newOrder.status} in the queue")
    return newOrder
}

function completeOrder(orderId) {
    const orderToComplete = orderQueue.find(orderId => orderId.id === orderId)
    orderToComplete.status = "completed"
    return orderToComplete
}

addNewPizza("Chicken Ranch", 8)
addNewPizza({name: "Buffalo Chicken", price: 10})
addNewPizza({name: "Meat & Cheese Lovers", price: 12})

placeOrder("Margarita")
completeOrder(1)

console.log("menu:", menu)
console.log("cashInRegister:", cashInRegister)
console.log("orderQueue:", orderQueue) */
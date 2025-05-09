type Pizza = {
    id: number,
    name: string,
    price: number,
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed",
}

//addding a change to test git ignore


const menu: Pizza[] = [
    {id: 1, name: "Margarita", price: 8},
    {id: 2, name: "Pepperoni", price: 9},
    {id: 3, name: "BBQ Chicken", price: 10},
    {id: 4, name: "Veggie", price: 8},
    {id: 5, name: "Hawaiian", price: 10},  
]

let nextPizzaId = 6;

let cashInRegister = 100;
const orderHistory: Order[] = [];
let nextOrderID = 1;

// function addNewPizzaFromScratch(name, price) {
//     menu.push({name, price})
//     console.log("Added ${name} to the menu for ${price}.")
// }

function addNewPizza(pizzaObj: Pizza): void {
    pizzaObj.id = nextPizzaId++
    menu.push(pizzaObj)
    console.log(`Added ${pizzaObj.name} :id: ${pizzaObj.id} to the menu for ${pizzaObj.price}.`)   
}

function getPizzaDetail(identifier: number | string): Pizza | undefined{
    if (typeof identifier === "string"){
        const pizza = menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
        return pizza
    }else if (typeof identifier === "number"){
        const pizza = menu.find(pizza => pizza.id === identifier)
        return pizza
    }else {
        throw new TypeError("Invalid identifier for pizza")
    }
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

function placeOrderJS (pizzaName: string): Order | undefined {
    // function from the tutorial
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.log(`Sorry, we don't have ${pizzaName} on the menu.`)
        return undefined
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = {pizza: selectedPizza, status: "ordered", id: nextOrderID++}
    orderHistory.push(newOrder)
    console.log(`Order Number: ${newOrder.id}, Cook a ${newOrder.pizza.name} pizza added as ${newOrder.status}`)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const orderToComplete = orderHistory.find(order => order.id === orderId)
    if (!orderToComplete) {
        console.log("Order not found")
        return undefined
    }
    orderToComplete.status = "completed"
    return orderToComplete
    
}

addNewPizza({id: 7, name: "Chicken Ranch", price: 8})
addNewPizza({id: 8, name: "Buffalo Chicken", price: 10})
addNewPizza({id: 9, name: "Meat & Cheese Lovers", price: 12})

placeOrderJS("Margarita")
completeOrder(1)

console.log("menu:", menu)
console.log("cashInRegister:", cashInRegister)
console.log("orderQueue:", orderHistory)
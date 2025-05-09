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


let nextPizzaId = 1;
let cashInRegister = 100;
const orderHistory: Order[] = [];
let nextOrderID = 1;

const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margarita", price: 8},
    {id: nextPizzaId++, name: "Pepperoni", price: 9},
    {id: nextPizzaId++, name: "BBQ Chicken", price: 10},
    {id: nextPizzaId++, name: "Veggie", price: 8},
    {id: nextPizzaId++, name: "Hawaiian", price: 10},  
]

// function addNewPizzaFromScratch(name, price) {
//     menu.push({name, price})
//     console.log("Added ${name} to the menu for ${price}.")
// }

function addNewPizza(newPizza: Omit<Pizza, "id">): void {
    //example of utility type, using the Omit<type, "property name"> to omit the id property from the parameters
    const pizza = {
        id: nextPizzaId++,
        ...newPizza
    }
    menu.push(pizza)
    console.log(`Added  ${pizza.name} with id:  ${pizza.id} to the menu for ${pizza.price}.`)   
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

addNewPizza({name: "Chicken Ranch", price: 8})
addNewPizza({name: "Buffalo Chicken", price: 10})
addNewPizza({name: "Meat & Cheese Lovers", price: 12})

placeOrderJS("Margarita")
completeOrder(1)

console.log("menu:", menu)
console.log("cashInRegister:", cashInRegister)
console.log("orderQueue:", orderHistory)
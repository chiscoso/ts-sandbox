let myName: string = "Bob"
// Primitive data types: string, number, boolean
// Challenge: explicitly type the variables below:

const myName2 = "Bob"

let numberOfWheel: number = 4
let isStudent: boolean = false


type Food = string

type Address = {
    street: string,
    city: string,
    country: string,
}

type Person = {
    name: string,
    age: number, 
    isStudent: boolean,
    address: Address
}

let person1: Person = {
    name: "Bob",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    }
}

let person2: Person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    }
}

let people: Person[] = [person1, person2]

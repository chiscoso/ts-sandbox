// Example of using partial objects.



type User2 = {
    id: number,
    username: string,
    role: "member" | "contributor" | "admin"
}

// this is a case to use any as a type, we dont know what are we going to update
// it is not a good practice to use any, but in this case, we dont want to create a new update type for each type we have
type User2Update = {
    id?: number,
    username?: string,
    role?: "member" | "contributor" | "admin"
}

// this is a case to use partial objects, this is better that the code above.
type user2UpdatePartial = Partial<User2>

// To study more about this, please google Utity Types in TypeScript
// https://www.typescriptlang.org/docs/handbook/utility-types.html

let nextUser2Id = 1

const usersArray: User2[] = [
    {id: nextUser2Id++, username: "john_doe", role: "member"},
    {id: nextUser2Id++, username: "jane_smith", role: "contributor"},
    {id: nextUser2Id++, username: "guest_user", role: "admin"},
    {id: nextUser2Id++, username: "charlie_brown", role: "member"},    
]



function updateUserById (id: number, updates: any) { // the parameter updates could be of type User2Update
    const user = usersArray.find(user2 => user2.id === id)
    if (!user) {
        throw new Error(`User with Username ${id} not found`)
    }
    Object.assign(user, updates)
}

function addNewUser2 ( newUser2: Omit<User2, "id">): User2 {
    let user = {
        id: nextUser2Id++,
        ...newUser2
    }
    usersArray.push(user)
    return user
}

updateUserById(1, { username: "new_john_doe" })
updateUserById(4, { role: "contributor" })

addNewUser2({ username: "joe_newUser", role: "member"})

console.log(usersArray)
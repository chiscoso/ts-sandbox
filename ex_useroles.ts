// example of using types, and union types in Typescript

type userRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: userRole
}

const users: User[] = [
    {username: "john_doe", role: "member"},
    {username: "jane_doe", role: "admin"},
    {username: "guest_user", role: "guest"}    
];

function feetchUserDetails(username: string): User {
    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase())
    if (!user) {
        throw new Error(`User with Username ${username} not found`)
    } else {
        return user
    }
}
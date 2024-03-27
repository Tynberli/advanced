'use strict'
const users = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 1, name: "Vasya" }
]
console.log(users);
const uniqueUsers = Array.from(new Set(users.map(JSON.stringify))).map(JSON.parse);
console.log(uniqueUsers);

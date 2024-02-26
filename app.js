'use strict'
const users = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 1, name: "Vasya" }
]
console.log(users);
const usersToString = users.map(JSON.stringify);
console.log(usersToString);
const usersSet = new Set(usersToString);
console.log(usersSet);
const usersArr = Array.from(usersSet);
console.log(usersArr);
const usersUniq = usersArr.map(JSON.parse);
console.log(usersUniq);

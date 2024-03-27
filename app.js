'use strict';

const user = "2010-03-01";
const currentDate = new Date();
const userDate = new Date(user);
console.log(userDate)
function isUserOver14(currentDate, userDate) {
    const ageDifference = currentDate.getFullYear() - userDate.getFullYear();
    if (ageDifference > 14 || (ageDifference === 14 && currentDate.getMonth() >= userDate.getMonth())) {
        return true; 
    } else {
        return false;
    }
}

console.log(isUserOver14(currentDate, userDate));


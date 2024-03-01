'use strict'
const user = "2010-03-01";
//console.log(Number(new Date(user)));

function validateYears(user) {
    const curYer = Number(new Date());
    //console.log(curYer);
    const difference = curYer - user;
    //console.log(difference);
    const age = difference / (1000 * 60 * 60 * 24 * 365);
    //console.log(age);
    const fullAge = Math.round(age)
    //console.log(fullAge);
    if (fullAge >= 14) {
        return true;
    } else {
        return false;
    }
}

console.log(validateYears(Number(new Date(user))));
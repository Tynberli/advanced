'use strict';

function validateYears(user) {
    const currentDate = new Date();
    const userDate = new Date(user);

    const difference = currentDate.getFullYear() - userDate.getFullYear();

    if (difference > 14) {
        return true;
    } else if (difference === 14) {
        if (currentDate.getMonth() > userDate.getMonth()) {
            return true;
        } else if (currentDate.getMonth() === userDate.getMonth()) {
            if (currentDate.getDate() >= userDate.getDate()) {
                return true;
            }
        }
    }

    return false;
}

const user = "2010-03-01";
console.log(validateYears(user));

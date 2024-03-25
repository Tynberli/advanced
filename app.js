'use strict'
function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(
                value => resolve(value),
                error => reject(error)
            );
        });
    });
}

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'two'));

race([promise1, promise2])
    .then(value => console.log(value))
    .catch(error => console.error(error));

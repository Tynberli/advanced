'use strict'
/* Сделайте функцию получения координат пользователя, 
используя API но преобразовав его в Promise. */

navigator.geolocation.getCurrentPosition((position) => {
    doSomthing(position.coords.latitude, position.coords.longitude);
});
console.log(navigator)
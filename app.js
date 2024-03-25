'use strict'
function getLocationPromise() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getLocationPromise()
    .then(position => {
        console.log(`latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`);
    })
    .catch(error => {
        console.error('Ошибка получения геопозиции: ', error);
    });



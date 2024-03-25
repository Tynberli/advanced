'use strict'
/*Перепишите прошлый пример на цепочку Promise  */
function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Ошибка при загрузке данных');
            }
        };
        xhr.onerror = function () {
            reject('Ошибка сети');
        };
        xhr.send();
    });
}

fetchData('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokemonData => {
        const abilityUrl = pokemonData.abilities[0].ability.url;
        return fetchData(abilityUrl);
    })
    .then(abilityData => {
        const description = abilityData.effect_entries[0].effect;
        console.log(`Описание способности: ${description}`);
    })
    .catch(error => {
        console.error(error);
    });


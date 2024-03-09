'use strict'
/*Перепишите прошлый пример на цепочку Promise  */
 const pokemon = new XMLHttpRequest();
pokemon.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
pokemon.send();

pokemon.addEventListener('load', function () {
    const params = JSON
        .parse(this.responseText)
        .abilities[0]
        .ability;
    console.log(`Название ${params.name}`);

    const effect = new XMLHttpRequest();
    effect.open('GET', params.url);
    effect.send();

    effect.addEventListener('load', function () {
        const descriptionEffect = JSON
            .parse(this.responseText)
            .effect_entries[0]
            .effect;
        console.log(`Описание способности
${descriptionEffect}`)
    })
}); 

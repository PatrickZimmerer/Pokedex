function applyBackgrounds(responseAsJson,PokemonType, i){
    if (PokemonType) {
        getById('container-'+i).classList.add(`${PokemonType}`);
        getById('id-'+i).classList.add(`${PokemonType}-side`);
        getById('type-1-'+i).classList.add(`bg-${PokemonType}-pill`);
    } 
    checkSecondType(responseAsJson, i);  
}
function checkSecondType(responseAsJson, i){
    let secondType = responseAsJson['types'][1];
    if (secondType){
        applySecondType(responseAsJson, i)
    }
}
function applySecondType(responseAsJson, i){
    let secondPokemonType = responseAsJson['types'][1]['type']['name'];
    getById('type-2-'+i).classList.add('badge',`bg-${secondPokemonType}-pill`,'rounded-pill');
    getById('type-2-'+i).innerHTML += `
    <p class="pokeType ucwords">
        ${secondPokemonType}
    </p> 
    `;
}
function applyDetailsBackgrounds(responseAsJson, PokemonType) {
    getById('pokeWrapBig').classList.add(`${PokemonType}`);
    getById('id').classList.add(`${PokemonType}-side`);
    getById('type1').classList.add(`bg-${PokemonType}-pill`);
    let secondType = responseAsJson['types'][1];
    if (secondType){
        applyDetailsSecondType(responseAsJson)
    }
}
function applyDetailsSecondType(responseAsJson){
    let secondPokemonType = responseAsJson['types'][1]['type']['name'];
    getById('type2').classList.add('badge',`bg-${secondPokemonType}-pill`,'rounded-pill');
    getById('type2').innerHTML += `
    <p class="pokeTypeBig ucwords">
        ${secondPokemonType}
    </p> 
    `;
}
async function backToAll(i){;
    PLINK_AUDIO.play();
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let PokemonType = responseAsJson['types'][0]['type']['name'];
    getById("pokedexWrap").classList.remove("d-none");
    getById('pokeWrapBig').classList.remove(`${PokemonType}`);
    getById('id').classList.remove(`${PokemonType}-side`);
    getById('type1').classList.remove(`bg-${PokemonType}-pill`);
    getById('pokeWrapBig').classList.add("d-none");  
}
function showAbout(){
    PLINK_AUDIO.play();
    getById('stats').classList.add('d-none');
    getById('moves').classList.add('d-none');
    getById('about').classList.remove('d-none');
}
function showStats(){
    PLINK_AUDIO.play();
    getById('stats').classList.remove('d-none');
    getById('moves').classList.add('d-none');
    getById('about').classList.add('d-none');
}
function showMoves(){
    PLINK_AUDIO.play();
    getById('stats').classList.add('d-none');
    getById('moves').classList.remove('d-none');
    getById('about').classList.add('d-none');
}
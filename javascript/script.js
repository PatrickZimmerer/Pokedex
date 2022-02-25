const LVLUP_AUDIO = new Audio('./sounds/pokelvlup.mp3');
const PLINK_AUDIO = new Audio('./sounds/pokeplink.mp3');
PLINK_AUDIO.volume = 0.2;
LVLUP_AUDIO.volume = 0.1;
let atTheBottom = 0;

function getById(id){
    return document.getElementById(id);
}

// ---------- LOADS MORE POKEMON WHEN SCROLLED TO BOTTOM -----------------
window.onscroll = async function loadMorePokemon() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        atTheBottom++;
        let j = 1 + (21 * atTheBottom);
        let k = 22 + (21 * atTheBottom);
        for (let i = j; i < k; i++) {      
            let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            let response = await fetch(url);
            let responseAsJson = await response.json();
            getPokemonInfos(responseAsJson, i);
        }
    }
}
//----------- INITIALY LOADS POKEMON ----------------
async function loadPokemon(){
    for (let i = 1; i < 22; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        getPokemonInfos(responseAsJson, i);
        console.log(responseAsJson)
    }
}
// ---------- GETS INFOS FOR MAINPAGE ----------
function getPokemonInfos(responseAsJson, i){
    let PokemonId = responseAsJson['id']
    let PokemonName = responseAsJson['name'];
    let PokemonType = responseAsJson['types'][0]['type']['name'];
    let PokemonImg = responseAsJson['sprites']['other']['home']['front_default'];    
    renderPokemon(responseAsJson, PokemonId, PokemonName, PokemonType, PokemonImg, i);
}
// ----------- GETS INFOS FOR DETAILS PAGE -----------
async function getPokemonDetails(i){
    PLINK_AUDIO.play();
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let PokemonId = responseAsJson['id']
    let PokemonName = responseAsJson['name'];
    let PokemonType = responseAsJson['types'][0]['type']['name'];
    let PokemonImg = responseAsJson['sprites']['other']['home']['front_default'];
    let PokemonHeight = responseAsJson['height'] / 10;
    let PokemonWeight = responseAsJson['weight'] / 10;
    let PokemonBaseExp = responseAsJson['base_experience'];
    let PokemonStats = responseAsJson['stats'];
    showPokemonDetails();
    getById('pokeWrapBig').innerHTML = generateDetailsHTML(PokemonId, PokemonName, PokemonType, PokemonImg, PokemonHeight, PokemonWeight, PokemonBaseExp, i);
    getMoreDetails(responseAsJson, PokemonType, PokemonStats)
}
// ---------- SHOWS POKEMON DETAILS -------------
function showPokemonDetails(){
    getById("pokedexWrap").classList.add("d-none");
    getById('pokeWrapBig').classList.remove('d-none');
    window.scrollTo(0, 0)
}

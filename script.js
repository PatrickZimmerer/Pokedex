let atTheBottom = 0;

function getById(id){
    return document.getElementById(id);
}


window.onscroll = async function loadMorePokemon() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        atTheBottom++;
        console.log(atTheBottom);
        let j = 1 + (21 * atTheBottom);
        console.log(j);
        let k = 22 + (21 * atTheBottom);
        console.log(k);
        for (let i = j; i < k; i++) {      
            let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            let response = await fetch(url);
            let responseAsJson = await response.json();
            showPokemon(responseAsJson, i);
     }
    }
}
async function loadPokemon(){
    for (let i = 1; i < 22; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        showPokemon(responseAsJson, i);
    }
}
function showPokemon(responseAsJson, i){
    let PokemonId = responseAsJson['id']
    let PokemonName = responseAsJson['name'];
    console.log(responseAsJson)
    let PokemonType = responseAsJson['types'][0]['type']['name'];
    //let PokemonTypeSecond = responseAsJson['types'][1]['type']['name'];
    let PokemonImg = responseAsJson['sprites']['other']['home']['front_default'];    
    renderPokemon(responseAsJson, PokemonId, PokemonName, PokemonType, PokemonImg, i);
}
function renderPokemon(responseAsJson, PokemonId, PokemonName, PokemonType ,PokemonImg, i){
    getById('pokeWrap').innerHTML += ` 
    <div onclick="showDetails(${responseAsJson}${i}${PokemonId}
        ${PokemonName}${PokemonType}${PokemonImg})" 
    id='container-${i}' class="pokeContainer">
        <div class="pokeId">
            <p id="id-${i}" class="id"> #${PokemonId} </p> 
        </div>
        
        <div class="pokeBodyContainer">
            <div class="pokeNameTypeContainer">
                <div>
                <h2 class="ucwords" class="pokeName">
                    ${PokemonName} 
                </h2> 
                </div>
                <span id="type-1-${i}" class="badge rounded-pill"> 
                    <p class="pokeType ucwords">
                        ${PokemonType}
                    </p>
                </span> 
                <span id="type-2-${i}">
                    
                </span>
            </div>       
             
            <div class="pokeImgContainer">
                <img src="${PokemonImg}" class="pokeImg" >  
            </div>
        </div>
    </div
    `;
    applyBackgrounds(responseAsJson, PokemonType, i);
    /*checkSecondType(responseAsJson, i); */ 
}
/*
function showDetails(responseAsJson, PokemonId, PokemonName, PokemonType ,PokemonImg, i){
    let PokemonHeight = responseAsJson['height'];
    let PokemonWeight = responseAsJson['weight'];
    let PokemonBaseAbilities = responseAsJson['ability'][j]['ability']['name'];
    let PokemonBaseExp = responseAsJson['base_experience'];
    let PokemonStats = responseAsJson['stats'][k]['base_stat'];
    let PokemonMoves = responseAsJson['moves'][l]['move']['name'];

}
*/
let currentPokemon;
let currentPokemonImg;

/* async function loadPokemon(){
    let url = `https://pokeapi.co/api/v2/pokemon/charizard`;
    let response = await fetch(url);
    let currentPokemon = await response.json();
    let currentPokemonType = currentPokemon['types'][0]['type']['name'];
    let currentPokemonImg = currentPokemon['sprites']['other']['home']['front_default'];
    renderPokemonInfo(currentPokemon, currentPokemonImg, currentPokemonType);
} */
async function loadPokemon(){
    for (let i = 1; i < 152; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        showPokemon(responseAsJson);
        //console.log(responseAsJson);
    }
}

function showPokemon(responseAsJson){
    let PokemonId = responseAsJson['id']
    let PokemonName = responseAsJson['name'];
    let PokemonType = responseAsJson['types'][0]['type']['name'];
    let PokemonImg = responseAsJson['sprites']['other']['home']['front_default'];    
    console.log(PokemonName, PokemonId, PokemonType, PokemonImg);
    renderPokemon(PokemonId, PokemonName, PokemonType, PokemonImg);
}

function renderPokemon(PokemonId, PokemonName, PokemonType, PokemonImg){
    document.getElementById('pokeWrap').innerHTML += `<!--html-->
    <div class="pokeContainer red">
        <div class="pokeId">
            <p> #${PokemonId} </p> 
        </div>
        
        <div class="pokeNameTypeContainer">
            <h2 class="ucwords" class="pokeName">
                ${PokemonName} 
                </h2> 
            <span class="badge rounded-pill bg-danger"> 
                <p class="pokeType ucwords">
                    ${PokemonType}
                </p>
            </span>  
        </div>       
             
        <div class="pokeImgContainer">
            <img src="${PokemonImg}" class="pokeImg" >  
        </div>
    </div
    `;
}



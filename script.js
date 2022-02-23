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
        //console.log(responseAsJson);
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
    <div onclick="showDetails(responseAsJson, i)" id='container-${i}' class="pokeContainer">
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
            </div>       
             
            <div class="pokeImgContainer">
                <img src="${PokemonImg}" class="pokeImg" >  
            </div>
        </div>
    </div
    `;
    applyBackgrounds(PokemonType, i);
    
}

function showDetails(responseAsJson, i){
    getById('pokeWrap').classList.add('d-none');
}


/*
, PokemonTypeSecond
<span id="type-2-${i}" class="badge rounded-pill">
<p class="pokeType ucwords">
    ${PokemonTypeSecond}
</p>
</span>  
*/
function getById(id){
    return document.getElementById(id);
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
    console.log(responseAsJson['types'])
    let PokemonType = responseAsJson['types'][0]['type']['name'];
    //let PokemonTypeSecond = responseAsJson['types'][1]['type']['name'];
    let PokemonImg = responseAsJson['sprites']['other']['home']['front_default'];    
    renderPokemon(PokemonId, PokemonName, PokemonType, PokemonImg, i);
}

function renderPokemon(PokemonId, PokemonName, PokemonType ,PokemonImg, i){
    getById('pokeWrap').innerHTML += `
    <div id='container-${i}' class="pokeContainer">
        <div class="pokeId">
            <p id="id-${i}" class="id"> #${PokemonId} </p> 
        </div>
        
        <div class="pokeNameTypeContainer">
            <h2 class="ucwords" class="pokeName">
                ${PokemonName} 
                </h2> 
            <span id="type-1-${i}" class="badge rounded-pill"> 
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
    applyBackgrounds(PokemonType, i);
}
function applyBackgrounds(PokemonType, i){
    console.log(PokemonType);
    if (PokemonType == 'grass') {
        getById('container-'+i).classList.add('green');
        getById('id-'+i).classList.add('green-side');
        getById('type-1-'+i).classList.add('bg-success');
        //getById('type-2-'+i).classList.add('bg-success');
    }
    if (PokemonType == 'fire') {
        getById('container-'+i).classList.add('red');
        getById('id-'+i).classList.add('red-side');
        getById('type-1-'+i).classList.add('bg-red-pill');
    }
    if (PokemonType == 'water') {
        getById('container-'+i).classList.add('blue');
        getById('id-'+i).classList.add('blue-side');
        getById('type-1-'+i).classList.add('bg-blue-pill');
    }
    if (PokemonType == 'electric') {
        getById('container-'+i).classList.add('yellow');
        getById('id-'+i).classList.add('yellow-side');
        getById('type-1-'+i).classList.add('bg-warning');
    }
    if (PokemonType == 'normal') {
        getById('container-'+i).classList.add('brown');
        getById('id-'+i).classList.add('brown-side');
        getById('type-1-'+i).classList.add('bg-brown-pill');
    }
    if (PokemonType == 'psychic') {
        getById('container-'+i).classList.add('purple');
        getById('id-'+i).classList.add('purple-side');
        getById('type-1-'+i).classList.add('bg-purple-pill');
    }
    if (PokemonType == 'flight') {
        getById('container-'+i).classList.add('white');
        getById('id-'+i).classList.add('white-side');
        getById('type-1-'+i).classList.add('bg-white-pill');
    }
    if (PokemonType == 'fairy') {
        getById('container-'+i).classList.add('pink');
        getById('id-'+i).classList.add('pink-side');
        getById('type-1-'+i).classList.add('bg-pink-pill');
    }
    if (PokemonType == 'bug') {
        getById('container-'+i).classList.add('green');
        getById('id-'+i).classList.add('green-side');
        getById('type-1-'+i).classList.add('bg-success');
    }
}

/*
, PokemonTypeSecond
<span id="type-2-${i}" class="badge rounded-pill">
<p class="pokeType ucwords">
    ${PokemonTypeSecond}
</p>
</span>  
*/
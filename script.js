function getById(id){
    return document.getElementById(id);
}
async function loadPokemon(){
    for (let i = 1; i < 386; i++) {
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
        getById('container-'+i).classList.add('grass');
        getById('id-'+i).classList.add('grass-side');
        getById('type-1-'+i).classList.add('bg-grass-pill');
        //getById('type-2-'+i).classList.add('bg-success');
    }
    if (PokemonType == 'fire') {
        getById('container-'+i).classList.add('fire');
        getById('id-'+i).classList.add('fire-side');
        getById('type-1-'+i).classList.add('bg-fire-pill');
    }
    if (PokemonType == 'water') {
        getById('container-'+i).classList.add('water');
        getById('id-'+i).classList.add('water-side');
        getById('type-1-'+i).classList.add('bg-water-pill');
    }
    if (PokemonType == 'electric') {
        getById('container-'+i).classList.add('electric');
        getById('id-'+i).classList.add('electric-side');
        getById('type-1-'+i).classList.add('bg-electric-pill');
    }
    if (PokemonType == 'normal') {
        getById('container-'+i).classList.add('normal');
        getById('id-'+i).classList.add('normal-side');
        getById('type-1-'+i).classList.add('bg-normal-pill');
    }
    if (PokemonType == 'bug') {
        getById('container-'+i).classList.add('bug');
        getById('id-'+i).classList.add('bug-side');
        getById('type-1-'+i).classList.add('bg-bug-pill');
    }    
    if (PokemonType == 'ice') {
        getById('container-'+i).classList.add('ice');
        getById('id-'+i).classList.add('ice-side');
        getById('type-1-'+i).classList.add('bg-ice-pill');
    }
    if (PokemonType == 'fighting') {
        getById('container-'+i).classList.add('fighting');
        getById('id-'+i).classList.add('fighting-side');
        getById('type-1-'+i).classList.add('bg-fighting-pill');
    }
    if (PokemonType == 'ground') {
        getById('container-'+i).classList.add('ground');
        getById('id-'+i).classList.add('ground-side');
        getById('type-1-'+i).classList.add('bg-ground-pill');
    }
    if (PokemonType == 'rock') {
        getById('container-'+i).classList.add('rock');
        getById('id-'+i).classList.add('rock-side');
        getById('type-1-'+i).classList.add('bg-rock-pill');
    }
    if (PokemonType == 'dark') {
        getById('container-'+i).classList.add('dark');
        getById('id-'+i).classList.add('dark-side');
        getById('type-1-'+i).classList.add('bg-dark-pill');
    }
    if (PokemonType == 'poison') {
        getById('container-'+i).classList.add('poison');
        getById('id-'+i).classList.add('poison-side');
        getById('type-1-'+i).classList.add('bg-poison-pill');
    }
    if (PokemonType == 'psychic') {
        getById('container-'+i).classList.add('psychic');
        getById('id-'+i).classList.add('psychic-side');
        getById('type-1-'+i).classList.add('bg-psychic-pill');
    }
    if (PokemonType == 'fairy') {
        getById('container-'+i).classList.add('fairy');
        getById('id-'+i).classList.add('fairy-side');
        getById('type-1-'+i).classList.add('bg-fairy-pill');
    }
    if (PokemonType == 'ghost') {
        getById('container-'+i).classList.add('ghost');
        getById('id-'+i).classList.add('ghost-side');
        getById('type-1-'+i).classList.add('bg-ghost-pill');
    }
    if (PokemonType == 'dragon') {
        getById('container-'+i).classList.add('ghost');
        getById('id-'+i).classList.add('ghost-side');
        getById('type-1-'+i).classList.add('bg-ghost-pill');
    }
    if (PokemonType == 'steel') {
        getById('container-'+i).classList.add('steel');
        getById('id-'+i).classList.add('steel-side');
        getById('type-1-'+i).classList.add('bg-steel-pill');
    }
    if (PokemonType == 'flying') {
        getById('container-'+i).classList.add('flying');
        getById('id-'+i).classList.add('flying-side');
        getById('type-1-'+i).classList.add('bg-flying-pill');
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
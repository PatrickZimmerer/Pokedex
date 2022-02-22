let currentPokemon;
let currentPokemonImg;

async function loadPokemon(){
    let url = `https://pokeapi.co/api/v2/pokemon/charmander`;
    let response = await fetch(url);
    let currentPokemon = await response.json();
    let currentPokemonImg = currentPokemon['sprites']['other']['home']['front_default'];
    renderPokemonInfo(currentPokemon, currentPokemonImg);
    console.log(currentPokemon);
    console.log(currentPokemon['name']);
    console.log(currentPokemon['id']);
    console.log(currentPokemon['types'][0]['type']['name']);
    console.log(currentPokemon['sprites']['other']['home']['front_default']);
}
function renderPokemonInfo(currentPokemon, currentPokemonImg){
    document.getElementById('pokeWrap').innerHTML = `<!--html-->
    <div class="pokeContainer red">
        <div class="pokeId">
            <p> #${currentPokemon['id']} </p> 
        </div>
        <div class="pokeNameContainer">
            <h2 class="ucwords" class="pokeName"> ${currentPokemon['name']} </h2> 
        </div>
        <div class="rounded-top pokeTypeContainer">
            <span> 
                <p class="pokeType ucwords">${currentPokemon['types'][0]['type']['name']}</p>
            </span>
        </div>
        <div class="pokeImgContainer">
            <img src="${currentPokemonImg}" class="pokeImg" >  
        </div>
    </div>

    <div class="pokeContainer red">
        <div class="pokeId">
            <p> #${currentPokemon['id']} </p> 
        </div>
        <div class="pokeNameContainer">
            <h2 class="ucwords" class="pokeName"> ${currentPokemon['name']} </h2> 
        </div>
        <div class="pokeTypeContainer">
            <span> 
                <p class="pokeType ucwords">${currentPokemon['types'][0]['type']['name']}</p>
            </span>
        </div>
        <div class="pokeImgContainer">
            <img src="${currentPokemonImg}" class="pokeImg" >  
        </div>
    </div>

    <div class="pokeContainer red">
        <div class="pokeId">
            <p> #${currentPokemon['id']} </p> 
        </div>
        <div class="pokeNameContainer">
            <h2 class="ucwords" class="pokeName"> ${currentPokemon['name']} </h2> 
        </div>
        <div class="pokeTypeContainer">
            <span> 
                <p class="pokeType ucwords">${currentPokemon['types'][0]['type']['name']}</p>
            </span>
        </div>
        <div class="pokeImgContainer">
            <img src="${currentPokemonImg}" class="pokeImg" >  
        </div>
    </div>

    <div class="pokeContainer red">
        <div class="pokeId">
            <p> #${currentPokemon['id']} </p> 
        </div>
        <div class="pokeNameContainer">
            <h2 class="ucwords" class="pokeName"> ${currentPokemon['name']} </h2> 
        </div>
        <div class="pokeTypeContainer">
            <span> 
                <p class="pokeType ucwords">${currentPokemon['types'][0]['type']['name']}</p>
            </span>
        </div>
        <div class="pokeImgContainer">
            <img src="${currentPokemonImg}" class="pokeImg" >  
        </div>
    </div>

    <div class="pokeContainer red">
        <div class="pokeId">
            <p> #${currentPokemon['id']} </p> 
        </div>
        <div class="pokeNameContainer">
            <h2 class="ucwords" class="pokeName"> ${currentPokemon['name']} </h2> 
        </div>
        <div class="pokeTypeContainer">
            <span> 
                <p class="pokeType ucwords">${currentPokemon['types'][0]['type']['name']}</p>
            </span>
        </div>
        <div class="pokeImgContainer">
            <img src="${currentPokemonImg}" class="pokeImg" >  
        </div>
    </div>

    <div class="pokeContainer red">
        <div class="pokeId">
            <p> #${currentPokemon['id']} </p> 
        </div>
        <div class="pokeNameContainer">
            <h2 class="ucwords" class="pokeName"> ${currentPokemon['name']} </h2> 
        </div>
        <div class="pokeTypeContainer">
            <span> 
                <p class="pokeType ucwords">${currentPokemon['types'][0]['type']['name']}</p>
            </span>
        </div>
        <div class="pokeImgContainer">
            <img src="${currentPokemonImg}" class="pokeImg" >  
        </div>
    </div>

    
    `;
}
const LVLUP_AUDIO = new Audio('./sounds/pokelvlup.mp3');
const PLINK_AUDIO = new Audio('./sounds/pokeplink.mp3');
PLINK_AUDIO.volume = 0.2;
let atTheBottom = 0;


function getById(id){
    return document.getElementById(id);
}

window.onscroll = async function loadMorePokemon() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        atTheBottom++;
        let j = 1 + (21 * atTheBottom);
        let k = 22 + (21 * atTheBottom);
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
    //console.log(responseAsJson)
    let PokemonId = responseAsJson['id']
    let PokemonName = responseAsJson['name'];
    let PokemonType = responseAsJson['types'][0]['type']['name'];
    let PokemonImg = responseAsJson['sprites']['other']['home']['front_default'];    
    renderPokemon(responseAsJson, PokemonId, PokemonName, PokemonType, PokemonImg, i);
}

function renderPokemon(responseAsJson, PokemonId, PokemonName, PokemonType ,PokemonImg, i){
    getById('pokeWrap').innerHTML += ` 
    <div onclick="showDetails(${i})" id='container-${i}' class="pokeContainer">
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
}

async function showDetails(i){
    PLINK_AUDIO.play();
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let PokemonId = responseAsJson['id']
    let PokemonName = responseAsJson['name'];
    let PokemonType = responseAsJson['types'][0]['type']['name'];
    let PokemonImg = responseAsJson['sprites']['other']['home']['front_default'];
    let PokemonHeight = responseAsJson['height'];
    let PokemonWeight = responseAsJson['weight'];
    //let PokemonBaseAbilities = responseAsJson['ability'][j]['ability']['name'];
    let PokemonBaseExp = responseAsJson['base_experience'];
    //let PokemonStats = responseAsJson['stats'][k]['base_stat'];
    //let PokemonMoves = responseAsJson['moves'][l]['move']['name'];
    getById("pokedexWrap").classList.add("d-none");
    getById('pokeWrapBig').classList.remove('d-none');
    getById('pokeWrapBig').innerHTML = `
    <div class="pokeHeadBig">
        <div>
            <img onclick="backToAll(${i})" src="./img/arrow_back_white_36dp.svg">
        </div>
        <div>
            <img id="like" src="./img/favorite_border_white_36dp.svg">
        </div>
    </div>    

    <div class="pokeBodyBig">
        <div class="pokeBodyContainerBig">
            <div class="pokeNameTypeContainerBig">
                <div>
                <h2 class="ucwords h2Big" class="pokeNameBig">
                    ${PokemonName} 
                </h2> 
                </div>
                <div class="spanWrap">
                <span id="type1" class="badge rounded-pill"> 
                <p class="pokeTypeBig ucwords">
                    ${PokemonType}
                </p>
                </span> 
                <span id="type2">
                    
                </span>
                </div>
            </div>  

            <div class="pokeIdBig">
                <p id="id" class="idBig"> #${PokemonId} </p> 
            </div>
    </div>
    <div class="pokeImgContainerBig">
        <img src="${PokemonImg}" class="pokeImgBig" >  
    </div>
    </div>
    <div class="pokeFootBig">
        <div class="pokeFootLinks">
            
            <h3 onclick="showAbout()">About</h3>
            <h3 onclick="showStats()">Base Stats</h3>
            <h3 onclick="showMoves()">Moves</h3>

        </div>

        <div class="aboutWrap" id="about">
            <div class="about">
                <p>Main Type</p>
                <p>Height</p>
                <p>Weight</p>
                <p>Abilities</p>
                <p>Base Experience</p>
            </div>
            <div class="aboutDetails">
                <p>${PokemonType}</p>
                <p>${PokemonHeight} M</p>
                <p>${PokemonWeight} KG</p>
                <p>$PokemonBaseAbilities</p>
                <p>${PokemonBaseExp}</p>
            </div>
        </div>

        <div class="stats-wrap  d-none" id="stats">
            <div class="statsList">
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Sp. Atk</p>
                <p>Sp. Def</p>
                <p>Speed</p>
            </div>
            <div class="statsDetails">
                <p>PokemonHp</p>
                <p>PokemonAttack</p>
                <p>PokemonDefense</p>
                <p>PokemonSpAtk</p>
                <p>PokemonSpDef</p>
                <p>PokemonSpeed</p>
            </div>
            <div class="statsProgress">
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>

        <div class="movesWrap d-none" id="moves">
            <h1>Moves</h1>
            <div class="movesList">
                <p class="badge rounded-pill bg-dark">PokemonAttacks</p>
                
            </div>
        </div>
        
    </div>
    `;
    window.scrollTo(0, 0)
    applyDetailsBackgrounds(responseAsJson, PokemonType);
}

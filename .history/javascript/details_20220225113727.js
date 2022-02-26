function like() { 
    LVLUP_AUDIO.play();
    getById('likeContainer').innerHTML = `
    <img onclick="dislike()" id="notliked" src="./css/img/favorite_white_36dp.svg">
    `;
}

function dislike() {
    PLINK_AUDIO.play();
    getById('likeContainer').innerHTML = `
    <img onclick="like()" id="notliked" src="./css/img/favorite_border_white_36dp.svg">
    `;
}
// -------- GETS INFOS FOR DETAILS PAGE ----------- //
function getBaseAbilities(responseAsJson){
    let PokemonBaseAbilities = responseAsJson['abilities'];
    for (let i = 0; i < PokemonBaseAbilities.length; i++) {
        const PokemonBaseAbility = PokemonBaseAbilities[i]['ability']['name'];
        getById('baseAbilities').innerHTML += `
        ${PokemonBaseAbility} 
        `;
    }
}
// -------- GETS DETAILS FOR DETAIL PAGE FOOT ----- //
function getBaseStats(PokemonStats){
    for (let i = 0; i < PokemonStats.length; i++) {
        const PokemonStat = PokemonStats[i]['base_stat'];
        getById('baseStats').innerHTML += `
        <p>${PokemonStat}</p>
        `;
        getById('progressBars').innerHTML += `
        <div class="progress">
            <div id="progress-bar-${i}" class="progress-bar" role="progressbar" style="width: 25%"></div>
        </div>
        `;
        let percent = PokemonStat / 250;
        percent = Math.round(percent * 100);
        if (percent < 25) {
            getById('progress-bar-'+i).classList.add('fire');
        }else{
            getById('progress-bar-'+i).classList.add('grass');
        }
        getById('progress-bar-'+i).style = `width: ${percent}% `;
    }      
}

function getPokemonMoves(responseAsJson, PokemonType){
    let PokemonMoves = responseAsJson['moves']
    for (let i = 0; i < PokemonMoves.length; i++) {
        const PokemonMove = PokemonMoves[i]['move']['name'];
        getById('movesList').innerHTML += `
        <p class="ucwords badge rounded-pill bg-${PokemonType}-pill">
        ${PokemonMove}
        </p> 
        `;
    }
}
// -------- GETS DETAILS FOR DETAIL PAGE FOOT ----- //
function getMoreDetails(responseAsJson, PokemonType, PokemonStats){
    applyDetailsBackgrounds(responseAsJson, PokemonType);
    getBaseAbilities(responseAsJson);
    getPokemonMoves(responseAsJson, PokemonType);
    getBaseStats(PokemonStats);
}
// -------- GETS YOU BACK TO MAINPAGE ----- //
async function backToMainpage(i){;
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
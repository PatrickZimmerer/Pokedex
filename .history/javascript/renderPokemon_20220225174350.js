// ----------- RENDERS POKEMONS - MAINPAGE ---------------- //
function renderPokemon(responseAsJson, PokemonId, PokemonName, PokemonType ,PokemonImg, i){
    getById('pokeWrap').innerHTML += ` 
    <div onclick="getPokemonDetails(${i})" id='container-${i}' class="pokeContainer">
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
// ----------- RENDERS POKEMONS - DETAILS PAGE ---------------- //
function generateDetailsHTML(PokemonId, PokemonName, PokemonType, PokemonImg, PokemonHeight, PokemonWeight, PokemonBaseExp, i){
    return `
    <div class="pokeHeadBig">
        <div>
            <img onclick="backToMainpage(${i})" src="./css/img/arrow_back_white_36dp.svg">
        </div>
        <div id="likeContainer">
            <img onclick="like()" id="notliked" src="./css/img/favorite_border_white_36dp.svg">
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
            <h3 id="abouth3" class="linksUl" onclick="showAbout()">About</h3>
            <h3 id="statsh3" onclick="showStats()">Base Stats</h3>
            <h3 id="movesh3" onclick="showMoves()">Moves</h3>
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
                <p>${PokemonHeight} Meter</p>
                <p>${PokemonWeight} KG </p>
                <p class="ucwords" id="baseAbilities"></p>
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

            <div id="baseStats" class="statsDetails">
            </div>

            <div id="progressBars" class="statsProgress">
            </div>

        </div>

        <div class="movesWrap d-none" id="moves">
            
            <h1>Moves</h1>

            <div class="movesList" id="movesList">      
            </div>

        </div>
        
    </div>
    `;
}

const offset = 0;
const limit = 10;
const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
                    
        </li>
    `  
}

    // acesso programático ao objeto
const pokemonList = document.getElementById('pokemonList');

fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemons) => {
    
    //percorra a lista de pokemons e imprima cada um deles
    for (const pokemon of pokemons) {
        // pegue o conteudo da lista e adicione mais um item
        pokemonList.innerHTML += convertPokemonToLi(pokemon)
    }

})

.catch((error) => console.error(error))
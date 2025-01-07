/* 
o método .map itera sobre cada elemento de um array e aplica a função passada como argumento a cada um deles.
*/
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then(detailRequests => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)

}
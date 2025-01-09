/* 
* o método .map itera sobre cada elemento de um array e aplica a função passada como argumento a cada um deles.

* O método .join junta todos os elementos de um array em uma string, separando-os por um delimitador.
*/

const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    // instanciando um novo objeto Pokemon e atribuindo os valores de pokeDetail a ele
    const pokemon = new Pokemon()
    // mapeando os valores de pokeDetail para o objeto Pokemon
    pokemon.number = pokeDetail.order
    // atribuindo o valor de pokeDetail.name ao objeto Pokemon
    pokemon.name = pokeDetail.name
    // mapeando os tipos de pokeDetail e retornando o primeiro tipo
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    // desestruturando o array types e atribuindo o primeiro valor a const type
    const [type] = types
    // atribuindo os valores de types e type ao objeto Pokemon
    pokemon.types = types
    //  atribuindo o valor de type ao objeto Pokemon
    pokemon.type = type
    // atribuindo a imagem de pokeDetail ao objeto Pokemon
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    // retornando o objeto pokemon
    return pokemon
}
// método que retorna um objeto pokemon
pokeApi.getPokemonDetail = (pokemon) => {
    // retornando a resposta da requisição fetch
    return fetch(pokemon.url).then((response) => response.json()).then(convertPokeApiDetailToPokemon)
    // retornando o objeto pokemon

}

// método que retorna um array de pokemons
pokeApi.getPokemons = (offset = 0, limit = 5) => {
// atribuindo a url da API a const url
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
// retornando a resposta da requisição fetch
    return fetch(url)
        // convertendo a resposta para json
        .then((response) => response.json())
        // retornando o array de resultados
        .then((jsonBody) => jsonBody.results)
        // mapeando os resultados e retornando o objeto pokemon
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then(detailRequests => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
// retornando o array de pokemons
}
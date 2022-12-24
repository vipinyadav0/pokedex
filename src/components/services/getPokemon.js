import axios from 'axios'
const baseUrl = 'http://pokeapi.co/api/v2';
const query = {
    pokemon: 'pokemon'
}


export async function fetchPokemon(pokemon) {
    return axios.get(`${baseUrl}/${query.pokemon}/${pokemon}`)
        .then(function (response) {
            return response.data
        })
}
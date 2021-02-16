import http from '../PokemonAPI'

const searchPokemon = (search: string) => {
	return http.get(`/pokemon/${search}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	searchPokemon
}
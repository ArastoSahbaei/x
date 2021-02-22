import PokemonAPIService from "../../../shared/api/service/PokemonAPIService"
import './Pokemon.css'
import { useState, useEffect } from 'react'
import pokemonLoadingGif from '../../../shared/images/pokegif.gif'
import { useDebounce } from '../../../hooks/useDebounce'

export const AccesoriesView = () => {
	const [pokemonData, setPokemonData] = useState<any>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [search, setSearch] = useState<string>('')
	const debouncedSearchTerm = useDebounce(search, 3000)

	const fetchData = async () => {
		setLoading(true)
		const { data } = await PokemonAPIService.searchPokemon(search)
		setPokemonData(data)
		console.log(data)
		setLoading(false)
	}


	const displayData = () => {
		return <div>
			<img src={pokemonData?.sprites?.front_default} alt={''} />
			<h1>Name: {pokemonData.name}</h1>
			<h1>Height: {pokemonData.height} cm</h1>
			<h1>Height: {pokemonData.weight} kg</h1>
			{/* 		<h1>Type: {pokemonData?.types[0]?.type.name}</h1> */}
		</div>
	}

	useEffect(() => {
		fetchData()
	}, [debouncedSearchTerm])

	return (
		<div>
			<input placeholder='WHOS THAT POKEMON??' onChange={event => setSearch(event.target.value)} />
			{!loading ? displayData() : <img src={pokemonLoadingGif} alt={''} />}
			<button onClick={() => console.log(pokemonData)}>Log my state</button>
		</div>
	)
}

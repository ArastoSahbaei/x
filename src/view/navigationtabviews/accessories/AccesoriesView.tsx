import PokemonAPIService from "../../../shared/api/service/PokemonAPIService"
import './Pokemon.css'
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export const AccesoriesView = () => {
	const [pokemonData, setPokemonData] = useState<any>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [search, setSearch] = useState<string>('')

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
	}, [search])

	return (
		<div>
			<input placeholder='WHOS THAT POKEMON??' onChange={event => setSearch(event.target.value)} />
			{!loading ? displayData() : <ClipLoader color={'red'} loading={loading} size={150} />}
		</div>
	)
}

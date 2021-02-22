import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'

export const PokemonDetailView = () => {
	const [data, setData] = useState<any>([])
	const location = useLocation<any>()

	const fetchData = async () => {
		const { data } = await Axios.get(location.state.url)
		setData(data)
	}

	useEffect(() => {
		fetchData()
	})

	const displayData = () => {
		return <div>
			<img src={data?.sprites?.front_default} alt={''} />
			<h1>{data.name}</h1>
			<h1>{data.height}</h1>
			<h1>{data.weight}</h1>
		</div>
	}

	return (
		<div>
			<button onClick={() => console.log(data)}>x</button>
			{displayData()}
		</div>
	)
}

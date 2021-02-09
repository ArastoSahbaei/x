import Axios, { AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'

export const ShopView = () => {
	const [starwarsData, setStarwarsData] = useState<AxiosResponse>()

	const getDataFromStarWarsAPI = () => {
		Axios.get('https://swapi.dev/api/people/1/')
			.then(response => setStarwarsData(response))
			.catch(error => console.log(error))
	}

	useEffect(() => {
		getDataFromStarWarsAPI()
	}, [])

	return (
		<div>
			<h1>List of products tba</h1>
			<button onClick={() => console.log(starwarsData)}>Test API Call</button>
		</div>
	)
}

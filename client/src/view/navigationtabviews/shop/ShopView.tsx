
import { useState, useEffect } from 'react'
import StarWarsAPIService from '../../../shared/api/service/StarWarsAPIService'

export const ShopView = () => {
	const [starwarsData, setStarwarsData] = useState<any>()
	const [count, setCount] = useState(1)

	const makeSureCountWillNeverGoBelowValue1 = () => {
		(count <= 1) ? setCount(1) : setCount(count - 1)
	}

	const getDataFromStarWarsAPI = async () => {
		try {
			const response = await StarWarsAPIService.getStarWarsCharacter(count)
			setStarwarsData(response)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getDataFromStarWarsAPI()
	}, [count])

	return (
		<div>
			<h1>Name: {starwarsData?.data?.name}</h1>
			<h1>Hair Color: {starwarsData?.data?.hair_color}</h1>
			<h1>Gender: {starwarsData?.data?.gender}</h1>
			<h1>Birth year: {starwarsData?.data?.birth_year}</h1>
			<h1>Height: {starwarsData?.data?.height}</h1>
			<button onClick={() => makeSureCountWillNeverGoBelowValue1()}>Get previous character</button>
			<button onClick={() => setCount(count + 1)}>Get next character</button>
		</div>
	)
}

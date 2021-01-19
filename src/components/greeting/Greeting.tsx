import './Greeting.css'

export const Greeting = (props: { name: number }) => {
	return (
		<div>
			{props.name}
			<h1 className="title">Hello! Awesome website ok</h1>
		</div>
	)
}



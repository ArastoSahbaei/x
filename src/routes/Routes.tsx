import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { AboutView } from '../view/AboutView'

export const Routes = (props: { children: React.ReactChild }) => {
	const { children } = props

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={'/home'} component={HomeView} />
				<Route exact path={'/about'} component={AboutView} />
			</Switch>
		</BrowserRouter>
	)
}

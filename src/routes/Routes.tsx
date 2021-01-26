import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { AboutView } from '../view/AboutView'
import RoutingPath from './RoutingPath'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'

export const Routes = (props: { children: React.ReactChild }) => {
	const [authUser, setAuthUser] = useContext(UserContext)
	const { children } = props

	useEffect(() => {
		setAuthUser({ username: localStorage.getItem('user') })
	}, [])

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.homeView} component={HomeView} />
				<Route exact path={RoutingPath.aboutView} component={AboutView} />
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}

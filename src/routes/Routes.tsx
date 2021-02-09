import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import RoutingPath from './RoutingPath'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { AccesoriesView } from '../view/navigationtabviews/accessories/AccesoriesView'
import { BrandsView } from '../view/navigationtabviews/brands/BrandsView'
import { ExpertiseView } from '../view/navigationtabviews/expertise/ExpertiseView'
import { NewsView } from '../view/navigationtabviews/news/NewsView'
import { ShopView } from '../view/navigationtabviews/shop/ShopView'
import { SettingsView } from '../view/authenticatedviews/SettingsView'

export const Routes = (props: { children: any }) => {
	const [authUser, setAuthUser] = useContext(UserContext)
	const { children } = props

	const blockRouteIfAuthenticated = (allowedView: React.FC, notAllowedView: React.FC) => {
		return !authUser ? allowedView : notAllowedView
	}

	const authenticationRequired = (allowed: React.FC, notAllowed: React.FC) => {
		return authUser ? allowed : notAllowed
	}

	useEffect(() => {
		if (localStorage.getItem('user')) {
			setAuthUser({ username: localStorage.getItem('user') })
		}
	}, [])

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.homeView} component={HomeView} />
				<Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView, HomeView)} />
				<Route exact path={RoutingPath.accesoriesView} component={AccesoriesView} />
				<Route exact path={RoutingPath.brandsView} component={BrandsView} />
				<Route exact path={RoutingPath.expertiseView} component={ExpertiseView} />
				<Route exact path={RoutingPath.newsView} component={NewsView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.settingsView} component={authenticationRequired(SettingsView, SignInView)} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}

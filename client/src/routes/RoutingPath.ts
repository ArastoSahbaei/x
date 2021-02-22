const homeView = '/'
const signInView = '/signin'
const accesoriesView = '/accessories'
const brandsView = '/brands'
const expertiseView = '/expertise'
const newsView = '/news'
const shopView = '/shop'

/* Authenticated routes below */
const settingsView = '/user/settings'
const pokemonDetailView = (name?: string) => { return name ? `/pokemon/${name}` : '/pokemon/:name' }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	homeView,
	signInView,
	accesoriesView,
	brandsView,
	expertiseView,
	newsView,
	shopView,
	settingsView,
	pokemonDetailView
}
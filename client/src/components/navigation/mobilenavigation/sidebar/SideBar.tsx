import { DesktopNavigationTabs } from '../../desktopnavigation/desktopnavigationtabs/DesktopNavigationTabs'
import './SideBar.css'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: Function }) => {
	return (
		<div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
			<button onClick={() => props.drawerHandler(false)}>Close</button>
			<h1>lol</h1>
		</div>
	)
}

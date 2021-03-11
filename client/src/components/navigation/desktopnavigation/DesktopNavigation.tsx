import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.svg'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import { useHistory } from 'react-router-dom'
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs'

export const DesktopNavigation = () => {
	const history = useHistory()
	const [authUser, setAuthUser] = useContext(UserContext)

	const displaySignInButtonOrUsernameDependingOnAuthentication = () => {
		return authUser?.username
			? <div className='profile'><Profile /></div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Logga in</span>
	}

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype'
				src={Logotype}
				alt={''} />
			<div className='desktopNavigationTabs'>
				<DesktopNavigationTabs />
			</div>
			{displaySignInButtonOrUsernameDependingOnAuthentication()}
		</div>
	)
}

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
<<<<<<< HEAD
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Definitley signed in lol</span>
=======
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Logga in</span>
>>>>>>> 0ed896ffe3db5dbd510cc5f4364885337c0b2e51
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
			<button>Tjena</button>
			<button>Lol</button>
		</div>
	)
}

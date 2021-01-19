import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.svg'

export const DesktopNavigation = () => {
	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype'
				src={Logotype}
				alt={''} />
		</div>
	)
}

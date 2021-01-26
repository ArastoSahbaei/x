import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
	const [authUser, setAuthUser] = useContext(UserContext)
	return (
		<div className='profileWrapper'>
			<img className='profileImg' src={'https://thispersondoesnotexist.com/image'} alt={''} />
			{authUser.username}
			<div className='profileDropdown'>
				<span>alternativ 1</span>
				<span>alternativ 2</span>
				<span>alternativ 3</span>
				<span>alternativ 4</span>
			</div>
		</div>
	)
}

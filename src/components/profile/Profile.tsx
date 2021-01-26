import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const Profile = () => {
	const [authUser, setAuthUser] = useContext(UserContext)
	return (
		<div>
			<img src={'https://thispersondoesnotexist.com/image'} alt={''} style={{ width: 50 }} />
			{authUser.username}
		</div>
	)
}

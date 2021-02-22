import { useState, createContext } from 'react'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children: any }) => {
	const [authUser, setAuthUser] = useState()
	const { children } = props

	return (
		<UserContext.Provider value={[authUser, setAuthUser]}>
			{children}
		</UserContext.Provider>
	)
}
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [basket, setBasket] = useState([])
	function getLocalStorage() {
		let res = JSON.parse(localStorage.getItem('product')) || []
		setBasket(res)
	}
	useEffect(() => {
		getLocalStorage()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				basket,
				setBasket,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

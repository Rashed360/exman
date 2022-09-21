import { useState, useEffect, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const [lightMode, setLightMode] = useState(false)

	const toggleLightMode = () => {
		setLightMode(!lightMode)
		localStorage.setItem('lightMode', !lightMode)
	}

	useEffect(() => {
		const mode = localStorage.getItem('lightMode')
		if (mode === 'true') {
			setLightMode(true)
			document.body.className = 'lightMode'
		} else {
			setLightMode(false)
			document.body.className = ''
		}
	}, [lightMode])

	return (
		<ThemeContext.Provider value={{ lightMode, setLightMode, toggleLightMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

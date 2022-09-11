import { useEffect, useState } from 'react'

export const useColorMode = () => {
	const [lightMode, setLightMode] = useState(false)

	const toggleLightMode = () => {
		setLightMode(!lightMode)
		localStorage.setItem('lightMode', !lightMode)
	}

	useEffect(() => {
		const mode = localStorage.getItem('lightMode')
		if (mode === 'true') {
			setLightMode(true)
		} else {
			setLightMode(false)
		}
	}, [lightMode])

	return [lightMode, toggleLightMode]
}

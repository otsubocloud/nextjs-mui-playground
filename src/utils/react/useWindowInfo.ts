import { useEffect, useMemo, useState } from 'react'

export default function useWindowInfo() {
	const [count, setCount] = useState<number>(0)

	useEffect(() => {
		window.addEventListener('resize', e => {
			setCount(count + 1)
		})
	}, [])

	const info = useMemo(() => {
		let win
		try {
			win = window
		} catch (e) {}

		return {
			windowWidth: win?.innerWidth,
			windowHeight: win?.innerHeight,
		}
	}, [count, undefined])

	return info
}

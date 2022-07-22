import { useEffect, useRef } from 'react'

export default function usePreventTouch() {
	const preventRef = useRef<any>(null)
	useEffect(() => {
		if (preventRef.current) {
			preventRef.current.addEventListener(
				'touchmove',
				(e: any) => e.preventDefault(),
				{
					passive: false,
				}
			)
			window.addEventListener('scroll', function (e) {
				e.preventDefault()
				e.stopPropagation()
			})
		}
	}, [preventRef])

	return {
		preventRef,
	}
}

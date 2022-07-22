import { useEffect, useState } from 'react'

export default function useBeforeUnload(defaultEnable: boolean) {
	const [beforeUnloadEnable, setBeforeUnloadEnable] = useState<boolean>(false)

	useEffect(() => {
		if (process.env.NODE_ENV === 'development') return
		if (defaultEnable) setBeforeUnloadEnable(defaultEnable)
	}, [defaultEnable])

	useEffect(() => {
		const enableAction = (e: any) => {
			e.preventDefault()
			e.returnValue = ''
		}
		if (beforeUnloadEnable) {
			window.addEventListener('beforeunload', enableAction)
		} else {
			window.removeEventListener('beforeunload', enableAction)
		}
	}, [beforeUnloadEnable])
	return {
		beforeUnloadEnable,
		setBeforeUnloadEnable,
	}
}

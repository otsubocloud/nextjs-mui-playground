import { useEffect, useRef } from 'react'

export default function useValueRef<T>(val: T) {
	const ref = useRef(val)
	useEffect(() => {
		ref.current = val
	}, [val])
	return ref
}

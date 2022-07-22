import { useEffect, useRef } from 'react'
import getEventPosition from '@/utils/events/getEventPosition'

type Props = {
	disabled?: boolean
	onClick?: () => void
	onStart?: (position: { x: number; y: number }) => void
	onMove: (diff: { x: number; y: number }) => void
	onEnd: (diff: { x: number; y: number }) => void
}
const MOVE_START_COUNT = 2
export default function useDrag({
	disabled,
	onClick,
	onStart,
	onMove,
	onEnd,
}: Props) {
	const dragRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		dragRef.current?.addEventListener('touchstart', e => e.preventDefault(), {
			passive: false,
		})
	}, [dragRef.current])

	const dragStart = (e: any) => {
		e.stopPropagation()
		// e.preventDefault()

		if (disabled) return

		const baseX = getEventPosition(e).x!
		const baseY = getEventPosition(e).y!
		onStart?.({ x: baseX, y: baseY })

		let moveCount = 0
		const movedAction = (e: any) => {
			moveCount += 1
			if (moveCount > MOVE_START_COUNT) {
				changeAction(e)
			}
		}

		const endedAction = (e: any) => {
			changeAction(e, true)
		}

		const changeAction = (e: any, isMouseUp?: boolean) => {
			const screenX = getEventPosition(e).x!
			const screenY = getEventPosition(e).y!
			const x = screenX - baseX
			const y = screenY - baseY

			if (isMouseUp) {
				if (onClick && moveCount <= MOVE_START_COUNT) {
					onClick?.()
				} else {
					onEnd({ x, y })
				}
				document.removeEventListener('mousemove', movedAction)
				document.removeEventListener('touchmove', movedAction)
				document.removeEventListener('mouseup', endedAction)
				document.removeEventListener('touchend', endedAction)
			} else {
				onMove({ x, y })
			}
		}

		document.addEventListener('mousemove', movedAction, {
			passive: false,
		})
		document.addEventListener('touchmove', movedAction, {
			passive: false,
		})

		document.addEventListener('mouseup', endedAction, {
			passive: false,
		})
		document.addEventListener('touchend', endedAction, {
			passive: false,
		})
	}

	return {
		dragRef,
		dragStart,
	}
}

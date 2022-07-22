import { PositionData } from '@/config/types'

export default function getEventPosition(e: any): PositionData {
	const x =
		e.clientX ||
		(
			(e.touches && e.touches[0]) ||
			(e.originalEvent &&
				e.originalEvent.touches &&
				e.originalEvent.touches[0]) ||
			(e.changedTouches && e.changedTouches[0])
		).clientX
	const y =
		e.clientY ||
		(
			(e.touches && e.touches[0]) ||
			(e.originalEvent &&
				e.originalEvent.touches &&
				e.originalEvent.touches[0]) ||
			(e.changedTouches && e.changedTouches[0])
		).clientY
	return { x, y }
}

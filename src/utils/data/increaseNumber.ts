export type IncreaseType = 'up' | 'down' | 'upMore' | 'downMore'

export default function increaseNumber(v: number, increase: IncreaseType) {
	const up = v + 1
	const down = v - 1
	switch (increase) {
		case 'up':
			return up
		case 'down':
			return down
		case 'upMore':
			return Math.ceil(up / 10) * 10
		case 'downMore':
			return Math.floor(down / 10) * 10
		default:
			return v
	}
}

export default function convertRemToPx(rem: string) {
	const remNumber = Number(rem.replace('rem', ''))
	return remNumber * 16
}

export default function getNestLevel(path: string | undefined): number {
	if (!path) return -1
	let length = path.split('/').filter(str => !!str).length
	return length
}

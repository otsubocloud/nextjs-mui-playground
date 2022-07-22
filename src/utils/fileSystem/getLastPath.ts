export default function getLastPath(
	path: string | undefined
): string | undefined {
	if (!path) return
	return path.split('/').pop()!
}

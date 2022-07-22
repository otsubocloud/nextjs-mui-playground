export default function getParentPaths(path: string): string[] {
	const names = path.split('/')
	const arr: string[] = []
	for (let i = 1; i <= names.length; i++) {
		const parentPath = names.slice(0, i).join('/')
		arr.push(parentPath)
	}
	return arr
}

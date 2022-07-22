export default function addSuffixToFileName(path: string, suffix: string) {
	const paths = path.split('/')
	const last = paths[paths.length - 1]
	let arr = last.split('.')
	let ex = arr[1] || false
	let name = arr[0] + suffix
	if (ex) {
		name += '.' + ex
	}
	paths[paths.length - 1] = name
	return paths.join('/')
}

const getFileNameAndExt = (path: string | undefined) => {
	if (!path) return []
	const lastName = path.split('/').pop()
	const arr = lastName!.split('.')
	const ex = arr.pop()
	const name = arr.join('.')
	return [name, ex]
}

export default getFileNameAndExt

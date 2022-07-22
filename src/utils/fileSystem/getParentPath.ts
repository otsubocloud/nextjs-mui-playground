import getNestLevel from '@/utils/fileSystem/getNestLevel'

export default function getParentPath(path: string, nestLevel?: number) {
	const parentLevel: number = getNestLevel(path)
	const level = nestLevel && parentLevel >= nestLevel ? nestLevel : parentLevel
	return path
		.split('/')
		.filter(str => !!str)
		.slice(0, level - 1)
		.join('/')
}

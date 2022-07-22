import getParentPaths from '@/utils/fileSystem/getParentPaths'
import formatPath from '@/utils/fileSystem/formatPath'

export default function isDescendantPath(
	parentPath: string | undefined,
	path: string | undefined
): boolean {
	if (!parentPath || !path) return false
	const formatParentPath = formatPath(parentPath)
	const formatDescendantPaths = getParentPaths(path).map(path =>
		formatPath(path)
	)
	return formatDescendantPaths.includes(formatParentPath)
}

import _path from 'path'
import { API_DATA_ROOT } from '@/config/const'

export default function getPath(pathOrUrl: string, ...paths: string[]) {
	const detectPath = pathOrUrl.replace(/^(\.|\/)*/g, '')
	const detectApiRoot = API_DATA_ROOT.replace(/^(\.|\/)*/g, '')
	if (detectPath.match(new RegExp(`^${detectApiRoot}/`))) {
		const newPath = detectPath.replace(detectApiRoot, '')
		return paths ? _path.join(newPath, ...paths) : newPath
	} else {
		const newPath = '/' + detectPath
		return paths ? _path.join(newPath, ...paths) : newPath
	}
}

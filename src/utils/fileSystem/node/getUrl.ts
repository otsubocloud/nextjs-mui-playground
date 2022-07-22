import _path from 'path'
import { API_DATA_ROOT } from '@/config/const'

export default function getUrl(pathOrUrl: string, ...paths: string[]) {
	const detectPath = pathOrUrl.replace(/^(\.|\/)*/g, '')
	const detectApiRoot = API_DATA_ROOT.replace(/^(\.|\/)*/g, '')
	if (detectPath.match(new RegExp(`^${detectApiRoot}/`))) {
		return paths ? _path.join(pathOrUrl, ...paths) : pathOrUrl
	} else {
		const url = _path.join(API_DATA_ROOT, pathOrUrl)
		return paths ? _path.join(url, ...paths) : url
	}
}

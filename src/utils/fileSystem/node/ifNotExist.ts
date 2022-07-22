import fs from 'fs'
import getUrl from '@/utils/fileSystem/node/getUrl'

export default function ifNotExist(
	pathOrUrl: string,
	callback: (url: string) => void
): string | undefined {
	const url = getUrl(pathOrUrl)
	if (!fs.existsSync(url)) {
		callback(url)
		return url
	}
}

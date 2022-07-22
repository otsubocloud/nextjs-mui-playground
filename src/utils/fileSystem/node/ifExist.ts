import fs from 'fs'
import getUrl from '@/utils/fileSystem/node/getUrl'

export default function ifExist<T>(
	pathOrUrl: string,
	callback: (url: string) => T
): T | undefined {
	const url = getUrl(pathOrUrl)
	if (fs.existsSync(url)) {
		return callback(url)
	}
}

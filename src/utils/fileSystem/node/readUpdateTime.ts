import fs from 'fs'
import getUrl from '@/utils/fileSystem/node/getUrl'

export default function readUpdateTime(
	pathOrUrl: string | undefined
): string | undefined {
	if (!pathOrUrl) return
	const url = getUrl(pathOrUrl)
	if (fs.existsSync(url)) {
		return fs.lstatSync(url).mtime.toString()
	}
}

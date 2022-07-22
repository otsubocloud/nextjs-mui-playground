import { API_DATA_ROOT } from '@/config/const'

import fs from 'fs'
import _path from 'path'
import getUrl from '@/utils/fileSystem/node/getUrl'

export default function isExist(uriPath: string): string | undefined {
	const url = getUrl(uriPath)
	return fs.existsSync(url) ? url : undefined
}

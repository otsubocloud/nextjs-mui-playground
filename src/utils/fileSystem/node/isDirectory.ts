import fs from 'fs'
import _path from 'path'
import { API_DATA_ROOT } from '@/config/const'

export default function isDirectory(uriPath: string | undefined): boolean {
	if (!uriPath) return false
	const url = _path.join(API_DATA_ROOT, uriPath)
	if (fs.existsSync(url) && fs.lstatSync(url).isDirectory()) {
		return true
	}
	return false
}

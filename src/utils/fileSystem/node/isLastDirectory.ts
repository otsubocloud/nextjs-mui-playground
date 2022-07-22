import { Dirent } from 'fs'
import fs from 'fs'
import isExist from '@/utils/fileSystem/node/isExist'

export default function isLastDirectory(dirUriPath: string): boolean {
	const url = isExist(dirUriPath)
	if (!url) return false

	const dirents: Dirent[] = fs.readdirSync(url, {
		withFileTypes: true,
	})

	let c = 0
	for (let dirent of dirents) {
		if (dirent.isDirectory()) {
			c += 1
		}
	}
	return !c
}

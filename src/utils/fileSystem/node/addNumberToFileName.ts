import fs from 'fs'
import addSuffixToFileName from '@/utils/fileSystem/node/addSuffixToFileName'

export default function addNumberToFileName(path: string) {
	let newPath = path
	if (fs.existsSync(path)) {
		const max = 100
		for (let i = 1; i < max; i++) {
			if (fs.existsSync(newPath)) {
				newPath = addSuffixToFileName(newPath, `-2`)
			} else {
				break
			}
		}
	}
	return newPath
}

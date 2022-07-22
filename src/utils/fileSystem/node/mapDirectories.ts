import ifExist from '@/utils/fileSystem/node/ifExist'
import getUrl from '@/utils/fileSystem/node/getUrl'
import { Dirent, lstatSync, readdirSync } from 'fs'

export default function mapDirectoryChildren<T>(
	dirPath: string,
	map: (dirent: Dirent) => T
): T[] | undefined {
	return ifExist(getUrl(dirPath), url => {
		if (lstatSync(url).isDirectory()) {
			let arr: T[] = []
			const dirents: Dirent[] = readdirSync(getUrl('/'), {
				withFileTypes: true,
			})
			for (let dirent of dirents) {
				arr.push(map(dirent))
			}
			return arr
		}
	})
}

import fsEx from 'fs-extra'
import getParentPath from '@/utils/fileSystem/getParentPath'

export default function writeFileForcibly(
	url: string,
	data: string,
	optional?: any
) {
	const parentUrl = getParentPath(url)
	if (!fsEx.existsSync(parentUrl)) {
		fsEx.mkdirsSync(parentUrl)
	}
	fsEx.writeFileSync(url, data, optional)
}

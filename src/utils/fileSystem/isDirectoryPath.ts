import getLastPath from '@/utils/fileSystem/getLastPath'

export default function isDirectoryPath(anyPath: string) {
	return (getLastPath(anyPath)?.split('.').length || 0) === 1
}

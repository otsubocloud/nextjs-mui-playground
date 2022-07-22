export default function pathJoin(...paths: string[]) {
	return paths.join('/').replaceAll('//', '/')
}

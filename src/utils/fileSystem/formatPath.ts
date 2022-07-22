export default function formatPath(path: string) {
	return (
		'/' +
		path
			.split('/')
			.filter(v => !!v)
			.join('/')
	)
}

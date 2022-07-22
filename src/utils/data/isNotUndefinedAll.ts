export default function isNotUndefinedAll(...values: any[]) {
	for (let value of values) {
		if (value === undefined) return false
	}
	return true
}

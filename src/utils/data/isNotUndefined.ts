export default function isNotUndefined(...values: any[]) {
	for (let value of values) {
		if (value !== undefined) return true
	}
	return false
}

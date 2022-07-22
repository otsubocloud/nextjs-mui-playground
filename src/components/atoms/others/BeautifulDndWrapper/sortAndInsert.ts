export default function sortAndInsert<T>(
	arr: T[],
	from: number,
	to: number
): { data: T[]; error?: 'notExist' } {
	const target = arr.splice(from, 1)?.[0]
	if (!target) return { data: arr, error: 'notExist' }
	const insertIndex = from < to ? to : to
	arr.splice(insertIndex, 0, target)
	return { data: arr }
}

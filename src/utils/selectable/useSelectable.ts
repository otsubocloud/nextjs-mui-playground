import { useState } from 'react'
import { cloneDeep } from 'lodash'

export default function useSelectable<T>(isMatch: (a: T, b: T) => boolean) {
	const [selectable, setSelectable] = useState<boolean>(false)
	const [selects, setSelects] = useState<T[]>([])

	const handleSelect = (item: T) => {
		if (!selectable) setSelectable(true)
		let newSelects: T[] = cloneDeep(selects || [])

		if (!!newSelects.find(row => isMatch(row, item))) {
			newSelects = newSelects.filter(row => !isMatch(row, item))
		} else {
			newSelects.push(item)
		}
		setSelects(newSelects)
	}

	const isSelected = (item: T) => {
		return !!selects.find(row => isMatch(row, item))
	}

	const unselectable = () => {
		setSelects([])
		setSelectable(false)
	}

	return {
		selects,
		setSelects,
		unselectable,
		handleSelect,
		selectable,
		setSelectable,
		isSelected,
	}
}

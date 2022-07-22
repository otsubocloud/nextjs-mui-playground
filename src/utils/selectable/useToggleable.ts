import { useState } from 'react'
import { cloneDeep } from 'lodash'

export default function useToggleable<T>(
	isMatch: (a: T, b: T) => boolean = (a, b) => a === b,
	optional?: {
		/** 常に1つだけ選択 */
		exclusive?: boolean
	}
) {
	const { exclusive = false } = optional || {}

	const [selects, setSelects] = useState<T[]>([])

	const handleToggle = (item: T) => {
		let newSelects: T[] = cloneDeep(selects || [])

		if (!!newSelects.find(row => isMatch(row, item))) {
			if (exclusive) {
				newSelects = [item]
			} else {
				newSelects = newSelects.filter(row => !isMatch(row, item))
			}
		} else {
			newSelects.push(item)
		}
		setSelects(newSelects)
	}

	const isToggleSelected = (item: T) => {
		return !!selects.find(row => isMatch(row, item))
	}

	return {
		handleToggle,
		isToggleSelected,
	}
}

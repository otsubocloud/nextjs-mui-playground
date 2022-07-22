import clone from 'lodash/clone'
import cloneDeep from 'lodash/cloneDeep'

export default function copy<T>(value: T, get: (copied: T) => T): T {
	return get(clone(value))
}

export function copyDeep<T>(value: T, get: (copied: T) => T): T {
	return get(cloneDeep(value))
}

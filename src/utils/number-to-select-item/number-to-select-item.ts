import { toString } from 'lodash'

export const numberToSelectItem = (item: number) => ({
	value: toString(item),
	label: toString(item),
})

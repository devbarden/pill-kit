import { map, size, words, parseInt } from 'lodash'

import { TypeColor } from '@app/types'

export const transformRGBToRGBA = (color: TypeColor, opacity: number) =>
	color.replace(/rgb/i, 'rgba').replace(/\)/i, `, ${opacity})`)

export const transformRGBToHEX = (color: TypeColor) => {
	const numbers = words(color, /[0-9]+/g)

	const hex = map(numbers, (n: string) => {
		const as16 = parseInt(n).toString(16)

		return `${size(as16) === 1 ? '0' : ''}${as16}`
	})

	return `#${hex.join('')}`
}

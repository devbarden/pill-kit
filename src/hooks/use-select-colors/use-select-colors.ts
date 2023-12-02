import { useMemo } from 'react'
import { values, map } from 'lodash'

import { TypeEnum, TypeSelectColors } from '@app/types'

export const useSelectColors = (entity: TypeEnum) => {
	const items: TypeSelectColors[] = useMemo(
		() =>
			map(values(entity), (item) => ({
				value: item,
			})),
		[entity],
	)

	return {
		items,
	}
}

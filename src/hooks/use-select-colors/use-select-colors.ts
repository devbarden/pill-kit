import { useMemo } from 'react'
import { values } from 'lodash'

import { TypeEnum, TypeSelectColors } from '@app/typess'

export const useSelectColors = (entity: TypeEnum) => {
	const items: TypeSelectColors[] = useMemo(
		() =>
			values(entity).map((item) => ({
				value: item,
			})),
		[entity],
	)

	return {
		items,
	}
}

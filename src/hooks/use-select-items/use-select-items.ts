import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { values } from 'lodash'

import { TypeEnum, TypeSelectItem } from '@app/types'

export const useSelectItems = (entity: TypeEnum, tPath: string) => {
	const { t } = useTranslation()

	const items: TypeSelectItem[] = useMemo(
		() =>
			values(entity).map((item) => ({
				value: item,
				label: t(`${tPath}.${item}`),
			})),
		[t, entity, tPath],
	)

	return {
		items,
	}
}

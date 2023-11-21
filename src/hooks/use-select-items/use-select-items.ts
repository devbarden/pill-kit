import { useMemo } from 'react'
import { values } from 'lodash'
import { useTranslation } from 'react-i18next'

import { T_Enum, I_SelectItem } from '@app/types'

export const useSelectItems = (entity: T_Enum, tPath: string) => {
	const { t } = useTranslation()

	const items: I_SelectItem[] = useMemo(
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

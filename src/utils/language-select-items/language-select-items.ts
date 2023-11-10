import { entries } from 'lodash'

import { SelectItem } from '@app/types'
import { LANGUAGES } from '@app/constants'

export const languageSelectItems: SelectItem[] = entries(LANGUAGES).map(
	(item) => ({
		value: item[0],
		label: item[1],
	}),
)

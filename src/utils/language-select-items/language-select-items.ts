import { entries } from 'lodash'

import { TypeSelectItem } from '@app/types'
import { LANGUAGES } from '@app/constants'

export const languageSelectItems: TypeSelectItem[] = entries(LANGUAGES).map(
	([value, label]) => ({
		value,
		label,
	}),
)

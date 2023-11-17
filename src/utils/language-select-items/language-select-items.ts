import { entries } from 'lodash'

import { SelectItem } from '@app/types'
import { LANGUAGES } from '@app/constants'

export const languageSelectItems: SelectItem[] = entries(LANGUAGES).map(
	([value, label]) => ({
		value,
		label,
	}),
)

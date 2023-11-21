import { entries } from 'lodash'

import { I_SelectItem } from '@app/types'
import { LANGUAGES } from '@app/constants'

export const languageSelectItems: I_SelectItem[] = entries(LANGUAGES).map(
	([value, label]) => ({
		value,
		label,
	}),
)

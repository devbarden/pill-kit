import { get, first } from 'lodash'

import { TypeSelectItem } from '@app/xtypes'

export const getFirstValueFromSelectItems = (list: TypeSelectItem[]): string =>
	get(first(list), 'value') ?? ''

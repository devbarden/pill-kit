import { values } from 'lodash'

import { isDeserted } from '../is-deserted'

export const isAnyFieldEmpty = (item: Record<string, any>) =>
	values(item).some((field) => isDeserted(field))

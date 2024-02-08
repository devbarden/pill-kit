import { TypeSelectItem } from '@app/types'

export const getSelectedLanguage = (
	items: TypeSelectItem[],
	locale: string,
	fallback: string,
) => items.find(({ value }) => locale.includes(value))?.label ?? fallback

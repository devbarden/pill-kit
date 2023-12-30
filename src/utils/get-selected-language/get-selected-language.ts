import { TypeSelectItem } from '@app/types'

export const getSelectedLanguage = (
	items: TypeSelectItem[],
	language: string,
	fallback: string,
) => items.find(({ value }) => language.includes(value))?.label ?? fallback

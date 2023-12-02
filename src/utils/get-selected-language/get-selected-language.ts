import { TypeSelectItem } from '@app/xtypes'

// TODO: move to locale file (like its working for medicine type)
export const getSelectedLanguage = (
	items: TypeSelectItem[],
	language: string,
	fallback: string,
) => items.find(({ value }) => language.includes(value))?.label ?? fallback

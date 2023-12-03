import { EnumColor } from '@app/enums'

export const transformRGBToRGBA = (color: EnumColor, opacity: number) =>
	color.replace(/rgb/i, 'rgba').replace(/\)/i, `, ${opacity})`)

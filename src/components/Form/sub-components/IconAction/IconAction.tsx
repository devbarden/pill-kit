import { FC, ReactElement, memo } from 'react'
import { Pressable } from 'native-base'

import { EnumColor, EnumFormIconActionMode, EnumIconName } from '@app/enums'

import { Icon } from '../../../Icon'
import { styles } from './IconAction.styles'

type TypeProps = {
	mode: EnumFormIconActionMode
	handler: () => void
}

const ICONS_MAP: Record<EnumFormIconActionMode, ReactElement> = {
	[EnumFormIconActionMode.mail]: (
		<Icon name={EnumIconName.mail} size={24} color={EnumColor.darkGrey} />
	),

	[EnumFormIconActionMode.arrow]: (
		<Icon name={EnumIconName.right} size={24} color={EnumColor.darkGrey} />
	),

	[EnumFormIconActionMode.remove]: (
		<Icon name={EnumIconName.clear} size={28} color={EnumColor.red} />
	),

	[EnumFormIconActionMode.money]: (
		<Icon name={EnumIconName.money} size={24} color={EnumColor.green} />
	),

	[EnumFormIconActionMode.star]: (
		<Icon name={EnumIconName.star} size={24} color={EnumColor.blue} />
	),
}

export const IconAction: FC<TypeProps> = memo(({ mode, handler }) => (
	<Pressable onPress={handler} style={styles.wrapper}>
		{ICONS_MAP[mode]}
	</Pressable>
))

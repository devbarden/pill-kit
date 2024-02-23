import { FC, memo, useMemo } from 'react'
import { Box, Text } from 'native-base'

import { TypeColor } from '@app/types'
import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { Icon } from '../Icon'

import { styles } from './NotificationLabel.styles'

type TypeProps = {
	text: string
	iconName: EnumIconName
	iconColor: TypeColor
}

export const NotificationLabel: FC<TypeProps> = memo(
	({ text, iconName, iconColor }) => {
		const { globalStyleProps } = useGlobalContext()

		const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

		return (
			<Box style={style.wrapper}>
				<Icon name={iconName} color={iconColor} size={24} />
				<Box style={style.text}>
					<Text fontSize="md" color={globalStyleProps.style.color.invert}>
						{text}
					</Text>
				</Box>
			</Box>
		)
	},
)

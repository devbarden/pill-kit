import { FC, memo } from 'react'
import { Box, Text } from 'native-base'

import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../Icon'

import { styles } from './NotificationLabel.styles'

type TypeProps = {
	text: string
	iconName: EnumIconName
	iconColor: EnumColor
}

export const NotificationLabel: FC<TypeProps> = memo(
	({ text, iconName, iconColor }) => (
		<Box style={styles.wrapper}>
			<Icon name={iconName} color={iconColor} size={24} />
			<Box style={styles.text}>
				<Text fontSize="md" color={EnumColor.black}>
					{text}
				</Text>
			</Box>
		</Box>
	),
)

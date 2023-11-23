import { FC, ReactElement, memo } from 'react'
import { Box, Text } from 'native-base'

import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles } from './CustomItem.styles'

type TypeProps = {
	text: string
	iconName?: EnumIconName
	iconColor?: EnumColor
	children?: ReactElement | ReactElement[] | string
}

export const CustomItem: FC<TypeProps> = memo(
	({ text, iconName, iconColor = EnumColor.darkGrey, children }) => (
		<Box style={styles.wrapper}>
			<Box style={styles.fullFlex}>
				<Box style={styles.title}>
					{iconName && <Icon name={iconName} color={iconColor} size={20} />}
					<Box style={styles.fullFlex}>
						<Text numberOfLines={1} style={styles.text}>
							{text}
						</Text>
					</Box>
				</Box>
			</Box>

			<Box style={styles.children}>{children}</Box>
		</Box>
	),
)

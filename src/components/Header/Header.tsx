import { FC, ReactElement, memo, useCallback } from 'react'
import { Box, Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { EnumColor, EnumTabRoute } from '@app/enums'

import { styles } from './Header.styles'

type TypeProps = {
	title: string
	action?: ReactElement
	withGoBack?: boolean
}

export const Header: FC<TypeProps> = memo(
	({ title, withGoBack = false, action = null }) => {
		const { navigate } = useNavigation()

		const goBack = useCallback(() => {
			// TODO: implement go back
			navigate(EnumTabRoute.home)
		}, [navigate])

		return (
			<Box style={styles.wrapper}>
				{withGoBack && (
					<Pressable style={styles.back} onPress={goBack}>
						<Ionicons
							name="chevron-back-sharp"
							size={28}
							color={EnumColor.red}
						/>
					</Pressable>
				)}
				<Box style={styles.title}>
					<Text
						fontSize="xl"
						textAlign={withGoBack || action ? 'left' : 'center'}
						numberOfLines={1}
						color={EnumColor.red}>
						{title}
					</Text>
				</Box>
				{action && <Box style={styles.action}>{action}</Box>}
			</Box>
		)
	},
)

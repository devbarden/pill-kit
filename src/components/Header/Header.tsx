import { FC, ReactElement, memo, useCallback } from 'react'
import { Box, Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { COLORS, TAB_ROUTES } from '@app/constants'

import { styles } from './Header.styles'

interface Props {
	title: string
	action?: ReactElement
	withGoBack?: boolean
}

export const Header: FC<Props> = memo(
	({ title, withGoBack = false, action = null }) => {
		const { navigate } = useNavigation()

		const goBack = useCallback(() => {
			// TODO: implement go back
			navigate(TAB_ROUTES.HOME)
		}, [navigate])

		return (
			<Box style={styles.wrapper}>
				{withGoBack && (
					<Pressable style={styles.back} onPress={goBack}>
						<Ionicons name="chevron-back-sharp" size={28} color={COLORS.RED} />
					</Pressable>
				)}
				<Box style={styles.title}>
					<Text
						fontSize="xl"
						textAlign={withGoBack || action ? 'left' : 'center'}
						numberOfLines={1}
						color={COLORS.RED}>
						{title}
					</Text>
				</Box>
				{action && <Box style={styles.action}>{action}</Box>}
			</Box>
		)
	},
)

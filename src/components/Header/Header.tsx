import { FC, ReactElement, memo, useCallback, useContext } from 'react'
import { Box, Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { GlobalStateContext } from '@app/context'
import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../Icon'

import { styles } from './Header.styles'

type TypeProps = {
	title: string
	action?: ReactElement
	withGoBack?: boolean
}

export const Header: FC<TypeProps> = memo(
	({ title, withGoBack = false, action = null }) => {
		const { navigate } = useNavigation()
		const { activeTab } = useContext(GlobalStateContext)

		const backHandler = useCallback(() => {
			navigate(activeTab)
		}, [navigate, activeTab])

		return (
			<Box style={styles.wrapper}>
				{withGoBack && (
					<Pressable style={styles.back} onPress={backHandler}>
						<Icon name={EnumIconName.back} size={28} color={EnumColor.red} />
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

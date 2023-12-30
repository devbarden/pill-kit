import { FC, ReactElement, memo, useCallback, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Pressable, Text } from 'native-base'

import { PillKit } from '@app/svg'
import { GlobalStateContext } from '@app/context'
import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../Icon'

import { styles } from './Header.styles'

type TypeProps = {
	title?: string
	action?: ReactElement
	withLogo?: boolean
	withGoBack?: boolean
	withoutBorder?: boolean
}

export const Header: FC<TypeProps> = memo(
	({
		title,
		action = null,
		withLogo = false,
		withGoBack = false,
		withoutBorder = false,
	}) => {
		const { navigate } = useNavigation()
		const { activeTab } = useContext(GlobalStateContext)

		const backHandler = useCallback(() => {
			navigate(activeTab)
		}, [navigate, activeTab])

		return (
			<Box
				style={[styles.wrapper, { borderBottomWidth: withoutBorder ? 0 : 1 }]}>
				{withGoBack && (
					<Pressable style={styles.back} onPress={backHandler}>
						<Icon name={EnumIconName.back} size={28} color={EnumColor.red} />
					</Pressable>
				)}
				<Box style={styles.title}>
					{withLogo && <PillKit height={27} width={80} />}
					{title && (
						<Text
							fontSize="lg"
							textAlign={withGoBack || action ? 'left' : 'center'}
							numberOfLines={1}
							color={EnumColor.black}>
							{title}
						</Text>
					)}
				</Box>
				{action && <Box style={styles.action}>{action}</Box>}
			</Box>
		)
	},
)

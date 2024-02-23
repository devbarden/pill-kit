import { FC, ReactElement, memo, useMemo, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Pressable, Text } from 'native-base'

import { PillKit } from '@app/svg'
import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { Icon } from '../Icon'

import { styles } from './Header.styles'

type TypeProps = {
	title?: string
	action?: ReactElement
	withLogo?: boolean
	withGoBack?: boolean
}

export const Header: FC<TypeProps> = memo(
	({ title, action = null, withLogo = false, withGoBack = false }) => {
		const { navigate } = useNavigation()
		const { activeTab, globalStyleProps } = useGlobalContext()

		const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

		const backHandler = useCallback(() => {
			navigate(activeTab)
		}, [navigate, activeTab])

		return (
			<Box style={style.wrapper}>
				{withGoBack && (
					<Pressable style={style.back} onPress={backHandler}>
						<Icon
							name={EnumIconName.back}
							size={28}
							color={globalStyleProps.style.color.main}
						/>
					</Pressable>
				)}
				<Box style={style.title}>
					{withLogo && <PillKit height={27} width={80} />}
					{title && (
						<Text
							fontSize="lg"
							textAlign={withGoBack || action ? 'left' : 'center'}
							numberOfLines={1}
							color={globalStyleProps.style.color.invert}>
							{title}
						</Text>
					)}
				</Box>
				{action && <Box style={style.action}>{action}</Box>}
			</Box>
		)
	},
)

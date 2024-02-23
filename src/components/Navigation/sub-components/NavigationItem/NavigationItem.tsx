import { FC, memo, useMemo, useCallback } from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useGlobalContext } from '@app/hooks'
import { EnumIconName, EnumTabRoute } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles } from './NavigationItem.styles'

type TypeProps = {
	name: EnumIconName
	route: EnumTabRoute
}

export const NavigationItem: FC<TypeProps> = memo(({ name, route }) => {
	const { navigate } = useNavigation()
	const { activeTab, globalStyleProps } = useGlobalContext()

	const isActive = useMemo(() => route === activeTab, [route, activeTab])

	const navigateToRoute = useCallback(() => {
		navigate(route)
	}, [navigate, route])

	return (
		<Pressable onPressIn={navigateToRoute} style={styles.wrapper}>
			<Icon
				name={name}
				size={24}
				color={
					isActive
						? globalStyleProps.style.color.main
						: globalStyleProps.style.color.highlight
				}
			/>
		</Pressable>
	)
})

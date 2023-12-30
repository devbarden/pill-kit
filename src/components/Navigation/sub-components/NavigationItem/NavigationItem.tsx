import { FC, memo, useMemo, useCallback, useContext } from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { EnumTabRoute } from '@app/enums'
import { GlobalStateContext } from '@app/context'

import { getIcon } from '../../utils'

import { styles } from './NavigationItem.styles'

type TypeProps = {
	route: EnumTabRoute
}

export const NavigationItem: FC<TypeProps> = memo(({ route }) => {
	const { navigate } = useNavigation()
	const { activeTab } = useContext(GlobalStateContext)

	const isActive = useMemo(() => route === activeTab, [route, activeTab])

	const Icon = useMemo(() => getIcon(route, isActive), [route, isActive])

	const navigateToRoute = useCallback(() => {
		navigate(route)
	}, [navigate, route])

	return (
		<Pressable onPressIn={navigateToRoute} style={styles.wrapper}>
			{Icon}
		</Pressable>
	)
})

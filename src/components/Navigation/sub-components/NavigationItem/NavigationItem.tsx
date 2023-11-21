import { FC, memo, useMemo, useCallback, useContext } from 'react'
import { Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Route } from '@app/types'
import { GlobalStateContext } from '@app/context'

import { getIcon } from '../../utils'
import { styles } from './NavigationItem.styles'

interface Props {
	route: Route
}

export const NavigationItem: FC<Props> = memo(({ route }) => {
	const { navigate } = useNavigation()
	const { activeTab } = useContext(GlobalStateContext)

	const isActive = useMemo(() => route === activeTab, [route, activeTab])

	const Icon = useMemo(() => getIcon(route, isActive), [route, isActive])

	const navigateToRoute = useCallback(() => {
		// TODO: fix any
		navigate(route as any)
	}, [navigate, route])

	return (
		<Pressable style={styles.wrapper} onPress={navigateToRoute}>
			{Icon}
		</Pressable>
	)
})

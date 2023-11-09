import { FC, memo, useMemo, useCallback } from 'react'
import { Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { ROUTES } from '@app/constants'

import { getIcon } from '../../utils'
import { styles } from './NavigationItem.styles'

interface Props {
	route: ROUTES
	activePage: ROUTES
}

export const NavigationItem: FC<Props> = memo(({ route, activePage }) => {
	const { navigate } = useNavigation()

	const isPageActive = useMemo(() => route === activePage, [route, activePage])

	const goToPage = useCallback(() => {
		// TODO: remove any
		navigate(route as any)
	}, [navigate, route])

	return (
		<Pressable style={styles.wrapper} onPress={goToPage}>
			{getIcon(route, isPageActive)}
		</Pressable>
	)
})

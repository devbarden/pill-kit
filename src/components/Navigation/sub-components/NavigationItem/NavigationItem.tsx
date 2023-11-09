import { FC, memo, useMemo } from 'react'
import { Pressable } from 'native-base'

import { ROUTES } from '@app/constants'

import { getIcon } from '../../utils'
import { styles } from './NavigationItem.styles'

interface Props {
	route: ROUTES
	activePage: ROUTES
	navigateToRoute: () => void
}

export const NavigationItem: FC<Props> = memo(
	({ route, activePage, navigateToRoute }) => {
		const isPageActive = useMemo(
			() => route === activePage,
			[route, activePage],
		)

		return (
			<Pressable style={styles.wrapper} onPress={navigateToRoute}>
				{getIcon(route, isPageActive)}
			</Pressable>
		)
	},
)

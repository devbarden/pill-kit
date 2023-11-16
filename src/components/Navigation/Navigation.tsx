import { FC, memo, useMemo } from 'react'
import { Box } from 'native-base'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { uid } from '@app/utils'
import { LIST_OF_NAVIGATION_ITEMS } from '@app/constants'

import { NavigationItem } from './sub-components'
import { styles } from './Navigation.styles'

export const Navigation: FC<BottomTabBarProps> = memo(
	({ state, navigation }) => {
		const navigationItems = useMemo(
			() =>
				LIST_OF_NAVIGATION_ITEMS.map((route) => ({
					route,
					activePage: LIST_OF_NAVIGATION_ITEMS[state.index],
					navigateToRoute: () => {
						navigation.navigate(route)
					},
				})),
			[state, navigation],
		)

		return (
			<Box style={styles.wrapper}>
				{navigationItems.map(({ route, activePage, navigateToRoute }) => (
					<NavigationItem
						key={uid()}
						route={route}
						activePage={activePage}
						navigateToRoute={navigateToRoute}
					/>
				))}
			</Box>
		)
	},
)

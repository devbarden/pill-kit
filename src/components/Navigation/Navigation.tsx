import { FC, memo, useMemo } from 'react'
import { Box } from 'native-base'
import { values } from 'lodash'

import { uid } from '@app/utils'
import { ROUTES, LIST_OF_NAVIGATION_ITEMS } from '@app/constants'

import { NavigationItem } from './sub-components'
import { styles } from './Navigation.styles'

interface Props {
	stateIndex: number
}

export const Navigation: FC<Props> = memo(({ stateIndex }) => {
	const activePage = useMemo(() => values(ROUTES)[stateIndex], [stateIndex])

	const navigationItems = useMemo(
		() =>
			LIST_OF_NAVIGATION_ITEMS.map((route) => ({
				route,
				activePage,
			})),
		[activePage],
	)

	return (
		<Box style={styles.wrapper}>
			{navigationItems.map(({ route, activePage }) => (
				<NavigationItem key={uid()} route={route} activePage={activePage} />
			))}
		</Box>
	)
})

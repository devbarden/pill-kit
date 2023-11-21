import { FC, memo } from 'react'
import { Box } from 'native-base'

import { STACK_ROUTES, TAB_ROUTES } from '@app/constants'

import { NavigationItem } from './sub-components'
import { styles } from './Navigation.styles'

export const Navigation: FC = memo(() => (
	<Box style={styles.wrapper}>
		<NavigationItem route={TAB_ROUTES.HOME} />
		<NavigationItem route={TAB_ROUTES.ANALYTIC} />
		<NavigationItem route={STACK_ROUTES.CREATE_MEDICINE} />
		<NavigationItem route={TAB_ROUTES.HISTORY} />
		<NavigationItem route={TAB_ROUTES.SETTINGS} />
	</Box>
))

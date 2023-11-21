import { FC, memo } from 'react'
import { Box } from 'native-base'

import { EnumStackRoute, EnumTabRoute } from '@app/enums'

import { NavigationItem } from './sub-components'
import { styles } from './Navigation.styles'

export const Navigation: FC = memo(() => (
	<Box style={styles.wrapper}>
		<NavigationItem route={EnumTabRoute.home} />
		<NavigationItem route={EnumTabRoute.analytic} />
		<NavigationItem route={EnumStackRoute.createMedicine} />
		<NavigationItem route={EnumTabRoute.history} />
		<NavigationItem route={EnumTabRoute.settings} />
	</Box>
))

import { FC, memo, useMemo } from 'react'
import { Box } from 'native-base'

import { EnumTabRoute } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { NavigationItem, CreateMedicineNavigation } from './sub-components'

import { styles } from './Navigation.styles'

export const Navigation: FC = memo(() => {
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	return (
		<Box style={style.wrapper}>
			<NavigationItem route={EnumTabRoute.home} />
			<NavigationItem route={EnumTabRoute.analytic} />
			<CreateMedicineNavigation />
			<NavigationItem route={EnumTabRoute.history} />
			<NavigationItem route={EnumTabRoute.settings} />
		</Box>
	)
})

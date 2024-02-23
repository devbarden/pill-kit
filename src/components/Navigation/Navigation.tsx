import { FC, memo, useMemo } from 'react'
import { Box } from 'native-base'

import { useGlobalContext } from '@app/hooks'
import { EnumIconName, EnumTabRoute } from '@app/enums'

import { NavigationItem, CreateMedicineNavigation } from './sub-components'

import { styles } from './Navigation.styles'

export const Navigation: FC = memo(() => {
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	return (
		<Box style={style.wrapper}>
			<NavigationItem name={EnumIconName.home} route={EnumTabRoute.home} />
			<NavigationItem
				name={EnumIconName.analytic}
				route={EnumTabRoute.analytic}
			/>
			<CreateMedicineNavigation name={EnumIconName.plus} />
			<NavigationItem
				name={EnumIconName.history}
				route={EnumTabRoute.history}
			/>
			<NavigationItem
				name={EnumIconName.settings}
				route={EnumTabRoute.settings}
			/>
		</Box>
	)
})

import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from 'native-base'

import { isRTL } from '@app/utils'
import { EnumTabRoute } from '@app/enums'

import { NavigationItem, CreateMedicineNavigation } from './sub-components'

import { styles, TypeStyleProps } from './Navigation.styles'

export const Navigation: FC = memo(() => {
	const { i18n } = useTranslation()

	const isLanguageRTL = useMemo(() => isRTL(i18n.language), [i18n.language])

	const styleProps: TypeStyleProps = useMemo(
		() => ({
			isLanguageRTL,
		}),
		[isLanguageRTL],
	)

	const style = useMemo(() => styles(styleProps), [styleProps])

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

import { FC, Fragment, memo, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

import { useEndpoints } from '@app/hooks'
import { EnumStackRoute, EnumColor } from '@app/enums'
import { isDeserted, medicineUtils } from '@app/utils'
import { Header, Loader, CardsList, ContentWrapper } from '@app/components'
import { CARD_SORT_TYPE, INITIAL_HOME_FILTERS } from '@app/constants'

import { Empty } from './sub-components'

export const Home: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const filteredMedicines = useMemo(
		() =>
			medicineUtils.getMedicinesByFilters(allMedicines, INITIAL_HOME_FILTERS),
		[allMedicines],
	)

	const medicines = useMemo(
		() => medicineUtils.getSortedBy(filteredMedicines, CARD_SORT_TYPE.END_DATE),
		[filteredMedicines],
	)

	const isNoMedicines = useMemo(() => isDeserted(medicines), [medicines])

	const addNewMedicineHandler = useCallback(() => {
		navigate(EnumStackRoute.createMedicine)
	}, [navigate])

	if (isLoading) {
		return <Loader />
	}

	if (isNoMedicines) {
		return (
			<Fragment>
				<Header title={t('home:title')} />
				<ContentWrapper withHorizontalPaddings withVerticalPaddings>
					<Empty />
				</ContentWrapper>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<Header
				title={t('home:title')}
				action={
					<Pressable onPress={addNewMedicineHandler}>
						<FontAwesome name="plus-circle" size={32} color={EnumColor.red} />
					</Pressable>
				}
			/>
			<ContentWrapper>
				<CardsList items={medicines} />
			</ContentWrapper>
		</Fragment>
	)
})

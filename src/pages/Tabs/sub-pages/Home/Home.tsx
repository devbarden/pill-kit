import { FC, memo, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

import { useEndpoints } from '@app/hooks'
import { isDeserted, medicineUtils } from '@app/utils'
import { COLORS, HOME_FILTERS, STACK_ROUTES } from '@app/constants'
import { Header, Loader, CardsList, ContentWrapper } from '@app/components'

import { Empty } from './sub-components'

export const Home: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const filteredMedicines = useMemo(
		() => medicineUtils.getMedicinesByFilters(allMedicines, HOME_FILTERS),
		[allMedicines],
	)

	const medicines = useMemo(
		() => medicineUtils.getSortedByEndDate(filteredMedicines),
		[filteredMedicines],
	)

	const isNoMedicines = useMemo(() => isDeserted(medicines), [medicines])

	const addNewMedicineHandler = useCallback(() => {
		navigate(STACK_ROUTES.CREATE_MEDICINE)
	}, [navigate])

	if (isLoading) {
		return <Loader />
	}

	if (isNoMedicines) {
		return (
			<>
				<Header title={t('home:title')} />
				<ContentWrapper withHorizontalPaddings withVerticalPaddings>
					<Empty />
				</ContentWrapper>
			</>
		)
	}

	return (
		<>
			<Header
				title={t('home:title')}
				action={
					<Pressable onPress={addNewMedicineHandler}>
						<FontAwesome name="plus-circle" size={32} color={COLORS.RED} />
					</Pressable>
				}
			/>
			<ContentWrapper>
				<CardsList items={medicines} />
			</ContentWrapper>
		</>
	)
})

import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Header, Loader, CardsList, ContentWrapper } from '@app/components'

import { useHomeState } from './hooks'
import { HomeContext } from './context'
import { Empty, AddMedicineAction } from './sub-components'

export const Home: FC = memo(() => {
	const state = useHomeState()

	const { t } = useTranslation()
	const { medicines, isLoading, isNoMedicines } = useMemo(() => state, [state])

	if (isLoading) {
		return <Loader />
	}

	if (isNoMedicines) {
		return <Empty />
	}

	return (
		<HomeContext.Provider value={state}>
			<Header title={t('home:title')} action={<AddMedicineAction />} />
			<ContentWrapper>
				<CardsList items={medicines} />
			</ContentWrapper>
		</HomeContext.Provider>
	)
})

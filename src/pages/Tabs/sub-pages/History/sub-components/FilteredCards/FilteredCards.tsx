import { FC, memo, useContext, useMemo } from 'react'
import { Box } from 'native-base'

import { isDeserted } from '@app/utils'
import { CardsList } from '@app/components'
import { EnumCardListMode } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { Empty } from './sub-components'
import { HistoryContext } from '../../context'

import { styles } from './FilteredCards.styles'

export const FilteredCards: FC = memo(() => {
	const { medicines } = useContext(HistoryContext)
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	if (isDeserted(medicines)) {
		return <Empty />
	}

	return (
		<Box style={style.wrapper}>
			<CardsList items={medicines} mode={EnumCardListMode.v2} />
		</Box>
	)
})

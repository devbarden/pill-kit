import { FC, memo, useCallback } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import { last, get } from 'lodash'

import { TypeMedicine } from '@app/types'
import { SWIPE_SIZE } from '@app/constants'
import { EnumCardListMode } from '@app/enums'

import { Card, SwipeActions } from './sub-components'

type TypeProps = {
	items: TypeMedicine[]
	mode?: EnumCardListMode
}

export const CardsList: FC<TypeProps> = memo(
	({ items, mode = EnumCardListMode.v1 }) => {
		const isLast = useCallback(
			(item: TypeMedicine) => get(last(items), 'id') === get(item, 'id'),
			[items],
		)

		return (
			<SwipeListView
				disableRightSwipe
				showsVerticalScrollIndicator={false}
				stopRightSwipe={-SWIPE_SIZE}
				rightOpenValue={-SWIPE_SIZE}
				data={items}
				renderItem={({ item }) => (
					<Card data={item} mode={mode} isLast={isLast(item)} />
				)}
				renderHiddenItem={({ item }) => (
					<SwipeActions data={item} isLast={isLast(item)} />
				)}
			/>
		)
	},
)

import { FC, memo } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

import { TypeMedicine } from '@app/xtypes'
import { SWIPE_SIZE } from '@app/constants'
import { EnumCardListMode } from '@app/enums'

import { Card, SwipeActions } from './sub-components'

type TypeProps = {
	items: TypeMedicine[]
	mode?: EnumCardListMode
}

export const CardsList: FC<TypeProps> = memo(
	({ items, mode = EnumCardListMode.v1 }) => (
		<SwipeListView
			data={items}
			renderItem={({ item }) => <Card data={item} mode={mode} />}
			renderHiddenItem={({ item }) => <SwipeActions data={item} />}
			stopLeftSwipe={SWIPE_SIZE}
			leftOpenValue={SWIPE_SIZE}
			stopRightSwipe={-SWIPE_SIZE}
			rightOpenValue={-SWIPE_SIZE}
		/>
	),
)

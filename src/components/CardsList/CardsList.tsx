import { FC, memo } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

import { TypeMedicine } from '@app/types'

import { Card, SwipeActions } from './sub-components'

type TypeProps = {
	items: TypeMedicine[]
}

const SWIPE_SIZE = 65

export const CardsList: FC<TypeProps> = memo(({ items }) => (
	<SwipeListView
		data={items}
		renderItem={({ item }) => <Card data={item} />}
		renderHiddenItem={({ item }) => <SwipeActions data={item} />}
		stopLeftSwipe={SWIPE_SIZE}
		leftOpenValue={SWIPE_SIZE}
		stopRightSwipe={-SWIPE_SIZE}
		rightOpenValue={-SWIPE_SIZE}
	/>
))

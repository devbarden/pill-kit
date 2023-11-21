import { FC, memo } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

import { I_Medicine } from '@app/types'

import { Card, SwipeActions } from './sub-components'

interface I_Props {
	items: I_Medicine[]
}

const SWIPE_SIZE = 85

export const CardsList: FC<I_Props> = memo(({ items }) => (
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

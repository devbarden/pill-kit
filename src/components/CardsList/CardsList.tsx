import { FC, memo } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

import { Medicine } from '@app/types'

import { Card, RightSwipeAction } from './sub-components'

interface Props {
	items: Medicine[]
}

const RIGHT_SWIPE_SIZE = -85

export const CardsList: FC<Props> = memo(({ items }) => (
	<SwipeListView
		disableRightSwipe
		data={items}
		renderItem={({ item }) => <Card data={item} />}
		renderHiddenItem={({ item }) => <RightSwipeAction data={item} />}
		stopRightSwipe={RIGHT_SWIPE_SIZE}
		rightOpenValue={RIGHT_SWIPE_SIZE}
	/>
))

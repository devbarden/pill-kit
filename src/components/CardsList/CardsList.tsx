import DraggableFlatList, {
	DragEndParams,
} from 'react-native-draggable-flatlist'
import { FC, memo, useCallback } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import { last, get } from 'lodash'

import { useEndpoints } from '@app/hooks'
import { TypeMedicine } from '@app/types'
import { EnumCardListMode } from '@app/enums'
import { OVER_SWIPE_DIST, SWIPE_SIZE } from '@app/constants'

import { Card, SwipeActions, DraggableAndSwipeableItem } from './sub-components'

import { styles } from './CardsList.styles'

type TypeProps = {
	items: TypeMedicine[]
	mode?: EnumCardListMode
	isDraggable?: boolean
}

export const CardsList: FC<TypeProps> = memo(
	({ items, mode = EnumCardListMode.v1, isDraggable = false }) => {
		const { useUpdateActiveAndFutureMedicines } = useEndpoints()
		const { mutateAsync: update } = useUpdateActiveAndFutureMedicines()

		const isLast = useCallback(
			(item: TypeMedicine) => get(last(items), 'id') === get(item, 'id'),
			[items],
		)

		const dragEndHandler = useCallback(
			async ({ data }: DragEndParams<TypeMedicine>) => {
				await update(data)
			},
			[update],
		)

		if (isDraggable) {
			return (
				<DraggableFlatList
					data={items}
					style={styles.fullHeight}
					activationDistance={OVER_SWIPE_DIST}
					showsVerticalScrollIndicator={false}
					keyExtractor={({ id }) => id}
					onDragEnd={dragEndHandler}
					renderItem={({ item, drag }) => (
						<DraggableAndSwipeableItem item={item} drag={drag} mode={mode} />
					)}
				/>
			)
		}

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

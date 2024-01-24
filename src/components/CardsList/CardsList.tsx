import * as Haptics from 'expo-haptics'
import DraggableFlatList, {
	DragEndParams,
} from 'react-native-draggable-flatlist'
import { FC, memo, useState, useCallback, useEffect } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'

import { useEndpoints } from '@app/hooks'
import { TypeMedicine } from '@app/types'
import { EnumCardListMode } from '@app/enums'
import { IS_IOS, OVER_SWIPE_DIST, SWIPE_SIZE } from '@app/constants'

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

		const [dragState, setDragState] = useState(items)

		const dragBeginHandler = useCallback(() => {
			Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
		}, [])

		const dragEndHandler = useCallback(
			({ data }: DragEndParams<TypeMedicine>) => {
				setDragState(() => data)
			},
			[],
		)

		const updateActiveAndFutureMedicines = useCallback(
			async (data: TypeMedicine[]) => {
				await update(data)
			},
			[update],
		)

		useEffect(() => {
			updateActiveAndFutureMedicines(dragState)
		}, [updateActiveAndFutureMedicines, dragState])

		if (isDraggable) {
			return (
				<DraggableFlatList
					dragItemOverflow={IS_IOS}
					data={dragState}
					contentContainerStyle={styles.paddingBottom}
					style={styles.fullHeight}
					activationDistance={OVER_SWIPE_DIST}
					showsVerticalScrollIndicator={false}
					keyExtractor={({ id }) => id}
					onDragBegin={dragBeginHandler}
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
				contentContainerStyle={styles.paddingBottom}
				showsVerticalScrollIndicator={false}
				stopRightSwipe={-SWIPE_SIZE}
				rightOpenValue={-SWIPE_SIZE}
				data={items}
				renderItem={({ item }) => <Card data={item} mode={mode} />}
				renderHiddenItem={({ item }) => <SwipeActions data={item} />}
			/>
		)
	},
)

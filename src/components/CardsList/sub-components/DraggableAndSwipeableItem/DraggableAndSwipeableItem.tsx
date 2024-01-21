import SwipeableItem from 'react-native-swipeable-item'
import { ScaleDecorator } from 'react-native-draggable-flatlist'
import { FC, memo, useMemo } from 'react'

import { TypeMedicine } from '@app/types'
import { EnumCardListMode } from '@app/enums'
import { OVER_SWIPE_DIST, SWIPE_SIZE, CARD_ACTIVE_SCALE } from '@app/constants'

import { Card } from '../Card'
import { SwipeActions } from '../SwipeActions'

type TypeProps = {
	item: TypeMedicine
	drag: () => void
	mode: EnumCardListMode
}

export const DraggableAndSwipeableItem: FC<TypeProps> = memo(
	({ item, drag, mode }) => {
		const { id } = useMemo(() => item, [item])

		return (
			<ScaleDecorator activeScale={CARD_ACTIVE_SCALE}>
				<SwipeableItem
					key={id}
					item={item}
					overSwipe={OVER_SWIPE_DIST}
					snapPointsLeft={[SWIPE_SIZE]}
					renderUnderlayLeft={() => <SwipeActions data={item} />}>
					<Card data={item} mode={mode} drag={drag} />
				</SwipeableItem>
			</ScaleDecorator>
		)
	},
)

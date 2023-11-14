import { FC, memo, useMemo, useCallback } from 'react'
import { Box } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

import { Medicine } from '@app/types'
import { useEndpoints } from '@app/hooks'
import { COLORS } from '@app/constants'

import { Action } from './sub-components'
import { styles } from './RightSwipeAction.styles'

interface Props {
	data: Medicine
}

export const RightSwipeAction: FC<Props> = memo(({ data }) => {
	const { id } = useMemo(() => data, [data])
	const { useRemoveMedicine } = useEndpoints()
	const { mutateAsync: remove } = useRemoveMedicine()

	const deleteHandler = useCallback(async () => {
		await remove(id)
	}, [remove, id])

	return (
		<Box style={styles.wrapper}>
			<Action
				icon={<AntDesign name="delete" size={24} color={COLORS.RED} />}
				handler={deleteHandler}
			/>
		</Box>
	)
})

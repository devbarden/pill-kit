import { FC, memo, useMemo, useCallback, useRef } from 'react'
import { Box } from 'native-base'
import { AntDesign, Foundation } from '@expo/vector-icons'

import { I_Medicine } from '@app/types'
import { useEndpoints } from '@app/hooks'
import { COLORS } from '@app/constants'

import { Modal, I_ModalHandlers } from '../../../Modal'
import { Action, InfoModalContent } from './sub-components'
import { styles } from './SwipeActions.styles'

interface I_Props {
	data: I_Medicine
}

export const SwipeActions: FC<I_Props> = memo(({ data }) => {
	const cardInfoModalRef = useRef<I_ModalHandlers>(null)

	const { id, name } = useMemo(() => data, [data])
	const { useRemoveMedicine } = useEndpoints()
	const { mutateAsync: remove } = useRemoveMedicine()

	const openInfoModal = useCallback(() => {
		cardInfoModalRef.current?.open()
	}, [])

	const deleteHandler = useCallback(async () => {
		await remove(id)
	}, [remove, id])

	return (
		<Box style={styles.wrapper}>
			<Action
				icon={<Foundation name="info" size={36} color={COLORS.BLUE} />}
				handler={openInfoModal}
			/>
			<Modal
				title={name}
				content={<InfoModalContent data={data} />}
				ref={cardInfoModalRef}
			/>
			<Action
				icon={<AntDesign name="delete" size={24} color={COLORS.RED} />}
				handler={deleteHandler}
			/>
		</Box>
	)
})

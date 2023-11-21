import { FC, memo, useMemo, useCallback, useRef } from 'react'
import { Box } from 'native-base'
import { AntDesign, Foundation } from '@expo/vector-icons'

import { EnumColor } from '@app/enums'
import { TypeMedicine } from '@app/types'
import { useEndpoints } from '@app/hooks'

import { Modal, TypeModalHandlers } from '../../../Modal'
import { Action, InfoModalContent } from './sub-components'
import { styles } from './SwipeActions.styles'

type TypeProps = {
	data: TypeMedicine
}

export const SwipeActions: FC<TypeProps> = memo(({ data }) => {
	const cardInfoModalRef = useRef<TypeModalHandlers>(null)

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
				icon={<Foundation name="info" size={36} color={EnumColor.blue} />}
				handler={openInfoModal}
			/>
			<Modal
				title={name}
				content={<InfoModalContent data={data} />}
				ref={cardInfoModalRef}
			/>
			<Action
				icon={<AntDesign name="delete" size={24} color={EnumColor.red} />}
				handler={deleteHandler}
			/>
		</Box>
	)
})

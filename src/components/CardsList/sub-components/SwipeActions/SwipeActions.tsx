import { FC, memo, useMemo, useCallback, useRef } from 'react'
import { Box, Text } from 'native-base'
import { useTranslation } from 'react-i18next'

import { useEndpoints } from '@app/hooks'
import { CARD_MARGIN } from '@app/constants'
import { EnumColor, EnumIconName } from '@app/enums'
import { TypeMedicine, TypeModalHandlers } from '@app/types'

import { Icon } from '../../../Icon'
import { Modal } from '../../../Modal'
import { Action } from './sub-components'

import { styles } from './SwipeActions.styles'

type TypeProps = {
	data: TypeMedicine
	isLast?: boolean
}

export const SwipeActions: FC<TypeProps> = memo(({ data, isLast = false }) => {
	const removeModalRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { id, name } = useMemo(() => data, [data])
	const { useRemoveMedicine } = useEndpoints()
	const { mutateAsync: remove } = useRemoveMedicine()

	const openRemoveModal = useCallback(() => {
		removeModalRef.current?.open()
	}, [])

	const deleteHandler = useCallback(async () => {
		await remove(id)
	}, [remove, id])

	return (
		<Box style={[styles.wrapper, { marginBottom: isLast ? CARD_MARGIN : 0 }]}>
			<Modal
				title={name}
				content={
					<Text color={EnumColor.black}>
						{t('medicine:modal.remove.description')}
					</Text>
				}
				closeText={t('component:button.cancel')}
				submit={{
					handler: deleteHandler,
					text: t('component:button.delete'),
				}}
				ref={removeModalRef}
			/>
			<Action
				icon={
					<Icon name={EnumIconName.remove} size={24} color={EnumColor.red} />
				}
				style={styles.rightAction}
				handler={openRemoveModal}
			/>
		</Box>
	)
})

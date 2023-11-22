import { FC, memo, useMemo, useCallback, useRef } from 'react'
import { Box, Text } from 'native-base'
import { useTranslation } from 'react-i18next'

import { useEndpoints } from '@app/hooks'
import { EnumColor, EnumIconName } from '@app/enums'
import { TypeMedicine, TypeModalHandlers } from '@app/types'

import { Icon } from '../../../Icon'
import { Modal } from '../../../Modal'
import { Action, InfoModalContent } from './sub-components'

import { styles } from './SwipeActions.styles'

type TypeProps = {
	data: TypeMedicine
}

export const SwipeActions: FC<TypeProps> = memo(({ data }) => {
	const removeModalRef = useRef<TypeModalHandlers>(null)
	const cardInfoModalRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { id, name } = useMemo(() => data, [data])
	const { useRemoveMedicine } = useEndpoints()
	const { mutateAsync: remove, isLoading: isRemoving } = useRemoveMedicine()

	const openInfoModal = useCallback(() => {
		cardInfoModalRef.current?.open()
	}, [])

	const openRemoveModal = useCallback(() => {
		removeModalRef.current?.open()
	}, [])

	const deleteHandler = useCallback(async () => {
		await remove(id)
	}, [remove, id])

	return (
		<Box style={styles.wrapper}>
			<Action
				icon={
					<Icon name={EnumIconName.info} size={24} color={EnumColor.blue} />
				}
				style={{ paddingRight: 24, paddingLeft: 16 }}
				handler={openInfoModal}
			/>
			<Modal
				title={name}
				content={<InfoModalContent data={data} />}
				ref={cardInfoModalRef}
			/>
			<Modal
				title={name}
				content={<Text>{t('modal:removeMedicine.description')}</Text>}
				closeText={t('components:btn.cancel')}
				submit={{
					handler: deleteHandler,
					isLoading: isRemoving,
					text: t('components:btn.delete'),
					isLoadingText: t('actions:removing'),
				}}
				ref={removeModalRef}
			/>
			<Action
				icon={
					<Icon name={EnumIconName.remove} size={24} color={EnumColor.red} />
				}
				style={{ paddingRight: 16, paddingLeft: 24 }}
				handler={openRemoveModal}
			/>
		</Box>
	)
})

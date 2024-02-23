import { FC, memo, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text } from 'native-base'

import { EnumIconName } from '@app/enums'
import { Form, Modal } from '@app/components'
import { useEndpoints, useGlobalContext } from '@app/hooks'
import { TypeEditMedicineRouteProp, TypeModalHandlers } from '@app/types'

export const RemoveAction: FC = memo(() => {
	const removeModalRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { activeTab, globalStyleProps } = useGlobalContext()
	const { navigate } = useNavigation()
	const { params } = useRoute<TypeEditMedicineRouteProp>()
	const { id } = params
	const { useRemoveMedicine } = useEndpoints()
	const { mutateAsync: remove } = useRemoveMedicine()

	const openRemoveModal = useCallback(() => {
		removeModalRef.current?.open()
	}, [])

	const deleteHandler = useCallback(async () => {
		await remove(id)

		navigate(activeTab)
	}, [remove, navigate, id, activeTab])

	return (
		<Form.Wrapper>
			<Form.PressableItem
				iconName={EnumIconName.remove}
				iconColor={globalStyleProps.style.color.remove}
				text={t('editMedicine:remove')}
				handler={openRemoveModal}
			/>

			<Modal
				title={t('medicine:modal.remove.title')}
				content={
					<Text color={globalStyleProps.style.color.invert}>
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
		</Form.Wrapper>
	)
})

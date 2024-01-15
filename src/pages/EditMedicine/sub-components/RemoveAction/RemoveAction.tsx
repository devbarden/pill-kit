import { FC, memo, useCallback, useContext, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text } from 'native-base'

import { useEndpoints } from '@app/hooks'
import { GlobalStateContext } from '@app/context'
import { EnumColor, EnumIconName } from '@app/enums'
import { TypeEditMedicineRouteProp, TypeModalHandlers } from '@app/types'
import { Form, Modal } from '@app/components'

export const RemoveAction: FC = memo(() => {
	const removeModalRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { activeTab } = useContext(GlobalStateContext)
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
				iconColor={EnumColor.red}
				text={t('editMedicine:remove')}
				handler={openRemoveModal}
			/>

			<Modal
				title={t('medicine:modal.remove.title')}
				content={<Text>{t('medicine:modal.remove.description')}</Text>}
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

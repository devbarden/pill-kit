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
	const { mutateAsync: remove, isLoading: isRemoving } = useRemoveMedicine()

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
				title={t('modal:removeMedicine.title')}
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
		</Form.Wrapper>
	)
})

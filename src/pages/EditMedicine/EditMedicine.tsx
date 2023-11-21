import { FC, Fragment, memo, useCallback, useContext, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text } from 'native-base'

import { MedicineForm } from '@app/forms'
import { useEndpoints } from '@app/hooks'
import { GlobalStateContext } from '@app/context'
import { EnumFormIconActionMode } from '@app/enums'
import { TypeEditMedicineRouteProp, TypeModalHandlers } from '@app/types'
import { ContentWrapper, Form, Header, Loader, Modal } from '@app/components'

import { NotFound } from './sub-components'

export const EditMedicine: FC = memo(() => {
	const removeModalRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { activeTab } = useContext(GlobalStateContext)
	const { navigate } = useNavigation()
	const { params } = useRoute<TypeEditMedicineRouteProp>()
	const { id } = params
	const { useMedicine, useEditMedicine, useRemoveMedicine } = useEndpoints()
	const { data, isLoading } = useMedicine(id)
	const { mutateAsync: remove, isLoading: isRemoving } = useRemoveMedicine()
	const { mutateAsync: edit, isLoading: isUpdating } = useEditMedicine(id)

	const openRemoveModal = useCallback(() => {
		removeModalRef.current?.open()
	}, [])

	const deleteHandler = useCallback(async () => {
		await remove(id)

		navigate(activeTab)
	}, [remove, navigate, id, activeTab])

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		return (
			<Fragment>
				<Header title={t('editMedicine:title')} withGoBack />
				<ContentWrapper withHorizontalPaddings withVerticalPaddings>
					<NotFound />
				</ContentWrapper>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<Header title={t('editMedicine:title')} withGoBack />
			<MedicineForm
				data={data}
				submitHandler={edit}
				isSubmitting={isUpdating}
				additionalActions={
					<Form.Wrapper>
						<Form.Item name={t('editMedicine:remove')}>
							<Form.IconAction
								mode={EnumFormIconActionMode.remove}
								handler={openRemoveModal}
							/>
						</Form.Item>

						<Modal
							title={data.name}
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
				}
			/>
		</Fragment>
	)
})

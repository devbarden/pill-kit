import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native'

import { MedicineForm } from '@app/forms'
import { useEndpoints } from '@app/hooks'
import { EditMedicineRouteProp } from '@app/types'
import { FORM_ICON_ACTION_MODES, TAB_ROUTES } from '@app/constants'
import { ContentWrapper, Form, Header, Loader } from '@app/components'

import { NotFound } from './sub-components'

export const EditMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { params } = useRoute<EditMedicineRouteProp>()
	const { id } = params
	const { useMedicine, useEditMedicine, useRemoveMedicine } = useEndpoints()
	const { data, isLoading } = useMedicine(id)
	const { mutateAsync: remove } = useRemoveMedicine()
	const { mutateAsync: edit, isLoading: isUpdating } = useEditMedicine(id)

	const deleteHandler = useCallback(async () => {
		await remove(id)

		navigate(TAB_ROUTES.HOME)
	}, [remove, navigate, id])

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		return (
			<>
				<Header title={t('editMedicine:title')} withGoBack />
				<ContentWrapper withHorizontalPaddings withVerticalPaddings>
					<NotFound />
				</ContentWrapper>
			</>
		)
	}

	return (
		<>
			<Header title={t('editMedicine:title')} withGoBack />
			<MedicineForm
				data={data}
				submitHandler={edit}
				isSubmitting={isUpdating}
				additionalActions={
					<Form.Wrapper>
						<Form.Item name={t('editMedicine:remove')}>
							<Form.IconAction
								mode={FORM_ICON_ACTION_MODES.REMOVE}
								handler={deleteHandler}
							/>
						</Form.Item>
					</Form.Wrapper>
				}
			/>
		</>
	)
})

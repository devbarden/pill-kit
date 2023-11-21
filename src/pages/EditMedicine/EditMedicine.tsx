import { FC, Fragment, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native'

import { MedicineForm } from '@app/forms'
import { useEndpoints } from '@app/hooks'
import { TypeEditMedicineRouteProp } from '@app/types'
import { EnumFormIconActionMode, EnumTabRoute } from '@app/enums'
import { ContentWrapper, Form, Header, Loader } from '@app/components'

import { NotFound } from './sub-components'

export const EditMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { params } = useRoute<TypeEditMedicineRouteProp>()
	const { id } = params
	const { useMedicine, useEditMedicine, useRemoveMedicine } = useEndpoints()
	const { data, isLoading } = useMedicine(id)
	const { mutateAsync: remove } = useRemoveMedicine()
	const { mutateAsync: edit, isLoading: isUpdating } = useEditMedicine(id)

	const deleteHandler = useCallback(async () => {
		await remove(id)

		// TODO: implement modal + go back
		navigate(EnumTabRoute.home)
	}, [remove, navigate, id])

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
								handler={deleteHandler}
							/>
						</Form.Item>
					</Form.Wrapper>
				}
			/>
		</Fragment>
	)
})

import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { uid } from '@app/utils'

import { MedicineFormContext } from '../../../../context'

export const ModalValidationContent: FC = memo(() => {
	const { t } = useTranslation()
	const { emptyFields } = useContext(MedicineFormContext)

	return (
		<Fragment>
			<Text>{t('medicineForm:validation.text')}</Text>
			{emptyFields.map((field) => (
				<Text key={uid()}>- {t(`medicineForm:${field}`)}</Text>
			))}
		</Fragment>
	)
})

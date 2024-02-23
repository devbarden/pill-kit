import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { uid } from '@app/utils'
import { useGlobalContext } from '@app/hooks'

import { MedicineFormContext } from '../../../../context'

export const ModalValidationContent: FC = memo(() => {
	const { t } = useTranslation()
	const { emptyFields } = useContext(MedicineFormContext)
	const { globalStyleProps } = useGlobalContext()

	return (
		<Fragment>
			<Text color={globalStyleProps.style.color.invert}>
				{t('medicine:modal.validation.description')}
			</Text>
			{emptyFields.map((field) => (
				<Text key={uid()} color={globalStyleProps.style.color.invert}>
					- {t(`medicine:field.${field}`)}
				</Text>
			))}
		</Fragment>
	)
})

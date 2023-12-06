import { FC, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Form } from '@app/components'

import { MedicineFormContext } from '../../context'

export const Actions: FC = memo(() => {
	const { t } = useTranslation()
	const { saveHandler, isSaveBtnDisabled } = useContext(MedicineFormContext)

	return (
		<Form.Wrapper>
			<Form.Action
				text={t('components:btn.save')}
				handler={saveHandler}
				isDisabled={isSaveBtnDisabled}
			/>
		</Form.Wrapper>
	)
})

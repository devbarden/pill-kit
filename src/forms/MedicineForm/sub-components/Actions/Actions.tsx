import { FC, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from 'native-base'

import { Form } from '@app/components'

import { MedicineFormContext } from '../../context'

import { styles } from './Actions.styles'

export const Actions: FC = memo(() => {
	const { t } = useTranslation()
	const { saveHandler, isSaveBtnDisabled } = useContext(MedicineFormContext)

	return (
		<Box style={styles.wrapper}>
			<Form.Wrapper>
				<Form.Action
					text={t('components:btn.save')}
					handler={saveHandler}
					isDisabled={isSaveBtnDisabled}
				/>
			</Form.Wrapper>
		</Box>
	)
})

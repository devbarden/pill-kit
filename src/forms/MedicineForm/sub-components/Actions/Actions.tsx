import { FC, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from 'native-base'

import { EnumColor } from '@app/enums'
import { Button } from '@app/components'

import { MedicineFormContext } from '../../context'

import { styles } from './Actions.styles'

export const Actions: FC = memo(() => {
	const { t } = useTranslation()
	const {
		saveHandler,
		backHandler,

		isCancelBtnDisabled,
		isSaveBtnDisabled,
	} = useContext(MedicineFormContext)

	return (
		<Box style={styles.footer}>
			<Button
				variant="outline"
				colorScheme={EnumColor.red}
				disabled={isCancelBtnDisabled}
				onPress={backHandler}>
				{t('components:btn.cancel')}
			</Button>
			<Button
				disabled={isSaveBtnDisabled}
				colorScheme={EnumColor.red}
				onPress={saveHandler}>
				{t('components:btn.save')}
			</Button>
		</Box>
	)
})

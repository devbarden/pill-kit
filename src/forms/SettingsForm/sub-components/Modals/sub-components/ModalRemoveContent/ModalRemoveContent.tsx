import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { EnumColor } from '@app/enums'

export const ModalRemoveContent: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Text color={EnumColor.black}>
			{t('settings:modal.clearAllData.description')}
		</Text>
	)
})

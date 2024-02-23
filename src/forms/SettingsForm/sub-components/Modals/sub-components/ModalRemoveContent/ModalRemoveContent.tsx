import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { useGlobalContext } from '@app/hooks'

export const ModalRemoveContent: FC = memo(() => {
	const { t } = useTranslation()
	const { globalStyleProps } = useGlobalContext()

	return (
		<Text color={globalStyleProps.style.color.invert}>
			{t('settings:modal.clearAllData.description')}
		</Text>
	)
})

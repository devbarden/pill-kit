import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { EnumColor } from '@app/enums'

export const ModalRemoveDataContent: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Text color={EnumColor.darkGrey}>{t('removeDataAlert:description')}</Text>
	)
})

import { FC, Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { I_Medicine } from '@app/types'
import { dateToFormat } from '@app/utils'
import { MEDICINE_TYPE_TRANSLATION_PATH } from '@app/constants'

interface I_Props {
	data: I_Medicine
}

export const InfoModalContent: FC<I_Props> = memo(({ data }) => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Text>
				{t('card:infoModal.type')}:{' '}
				{t(`${MEDICINE_TYPE_TRANSLATION_PATH}.${data.type}`)}
			</Text>
			<Text>
				{t('card:infoModal.count')}: {data.countPerUse}
			</Text>
			<Text>
				{t('card:infoModal.perDay')}: {data.countPerDay}
			</Text>
			<Text>
				{t('card:infoModal.startDate')}: {dateToFormat(data.startDate)}
			</Text>
			<Text>
				{t('card:infoModal.endDate')}: {dateToFormat(data.endDate)}
			</Text>
		</Fragment>
	)
})

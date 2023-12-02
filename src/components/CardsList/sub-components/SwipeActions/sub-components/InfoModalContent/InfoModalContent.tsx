import { FC, Fragment, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { TypeMedicine } from '@app/xtypes'
import { dateToFormat } from '@app/utils'
import { MEDICINE_TYPE_TRANSLATION_PATH } from '@app/constants'

type TypeProps = {
	data: TypeMedicine
}

export const InfoModalContent: FC<TypeProps> = memo(({ data }) => {
	const { t } = useTranslation()
	const { type, countPerUse, countPerDay, startDate, endDate } = useMemo(
		() => data,
		[data],
	)

	return (
		<Fragment>
			<Text>
				{t('card:infoModal.type')}:{' '}
				{t(`${MEDICINE_TYPE_TRANSLATION_PATH}.${type}`)}
			</Text>
			{countPerUse && (
				<Text>
					{t('card:infoModal.count')}: {countPerUse}
				</Text>
			)}
			<Text>
				{t('card:infoModal.perDay')}: {countPerDay}
			</Text>
			<Text>
				{t('card:infoModal.startDate')}: {dateToFormat(startDate)}
			</Text>
			<Text>
				{t('card:infoModal.endDate')}: {dateToFormat(endDate)}
			</Text>
		</Fragment>
	)
})

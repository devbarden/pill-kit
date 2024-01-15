import DateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { FC, memo, useContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableWithoutFeedback } from 'react-native'
import { Box, Text } from 'native-base'

import { uid } from '@app/utils'
import { Icon } from '@app/components'
import { EnumIconName } from '@app/enums'
import { TypeMedicineTime } from '@app/types'

import { MedicineFormContext } from '../../../../context'

import { styles } from './ModalTimeContent.styles'

export const ModalTimeContent: FC = memo(() => {
	const { t } = useTranslation()
	const { form, changeTimeHandler } = useContext(MedicineFormContext)

	const getValue = useCallback(
		(time: TypeMedicineTime) =>
			new Date().setHours(time.hours, time.minutes, 0, 0),
		[],
	)

	return (
		<Box style={styles.wrapper}>
			{form.times.map((time, index) => (
				<TouchableWithoutFeedback key={uid()}>
					<Box style={styles.item}>
						<Box style={styles.content}>
							<Box style={styles.info}>
								<Icon name={EnumIconName.bell} size={18} />

								<Text fontSize="lg" numberOfLines={1}>
									{t('medicine:field.countPerUse')}: {index + 1}
								</Text>
							</Box>

							<DateTimePicker
								mode="time"
								value={new Date(getValue(time))}
								onChange={(event: DateTimePickerEvent, date?: Date) =>
									changeTimeHandler(time, date)
								}
							/>
						</Box>
					</Box>
				</TouchableWithoutFeedback>
			))}
		</Box>
	)
})

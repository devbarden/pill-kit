import DatePicker from 'react-native-date-picker'
import { FC, memo, useMemo, useContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableWithoutFeedback } from 'react-native'
import { Box, Text } from 'native-base'

import { uid } from '@app/utils'
import { TypeMedicineTime } from '@app/types'
import { IS_ANDROID, IS_IOS } from '@app/constants'
import { Icon, DateTimePress } from '@app/components'
import { EnumDateMode, EnumIconName, EnumLanguageCode } from '@app/enums'

import { MedicineFormContext } from '../../../../context'

import { styles, TypeStyleProps } from './ModalTimeContent.styles'

export const ModalTimeContent: FC = memo(() => {
	const { t, i18n } = useTranslation()
	const {
		form,
		mapOfRemindersToShow,

		changeTimeHandler,

		openReminderModal,
		closeReminderModal,
	} = useContext(MedicineFormContext)

	const isArabic = useMemo(
		() => i18n.language === EnumLanguageCode.ar,
		[i18n.language],
	)

	const styleProps: TypeStyleProps = useMemo(
		() => ({
			isArabic,
		}),
		[isArabic],
	)

	const style = useMemo(() => styles(styleProps), [styleProps])

	const getValue = useCallback(
		(time: TypeMedicineTime) =>
			new Date().setHours(time.hours, time.minutes, 0, 0),
		[],
	)

	const isTimePickerAvailableToShow = useCallback(
		(id: string) => IS_IOS || (IS_ANDROID && mapOfRemindersToShow[id]),
		[mapOfRemindersToShow],
	)

	return (
		<Box style={style.wrapper}>
			{form.times.map((time, index) => (
				<TouchableWithoutFeedback key={uid()}>
					<Box style={style.item}>
						<Box style={style.content}>
							<Box style={style.info}>
								<Icon name={EnumIconName.bell} size={18} />

								<Text fontSize="lg" numberOfLines={1}>
									{t('medicine:field.countPerUse')} : {index + 1}
								</Text>
							</Box>

							<DateTimePress
								mode={EnumDateMode.time}
								value={getValue(time)}
								handler={() => openReminderModal(time.id)}
							/>

							{isTimePickerAvailableToShow(time.id) && (
								<DatePicker
									modal
									is24hourSource="locale"
									title={`${t('medicine:field.countPerUse')} : ${index + 1}`}
									mode={EnumDateMode.time}
									locale={i18n.language}
									open={mapOfRemindersToShow[time.id]}
									date={new Date(getValue(time))}
									onConfirm={(date) => changeTimeHandler(time, date)}
									onCancel={() => closeReminderModal(time.id)}
									confirmText={t('component:button.save')}
									cancelText={t('component:button.cancel')}
								/>
							)}
						</Box>
					</Box>
				</TouchableWithoutFeedback>
			))}
		</Box>
	)
})

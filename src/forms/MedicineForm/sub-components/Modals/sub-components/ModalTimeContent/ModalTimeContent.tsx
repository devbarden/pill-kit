import DatePicker from 'react-native-date-picker'
import { FC, memo, useMemo, useContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableWithoutFeedback } from 'react-native'
import { Box, Text } from 'native-base'

import { TypeMedicineTime } from '@app/types'
import { IS_ANDROID, IS_IOS } from '@app/constants'
import { getNumberByLocale, uid } from '@app/utils'
import { Icon, DateTimePress } from '@app/components'
import { EnumDateMode, EnumIconName } from '@app/enums'

import { MedicineFormContext } from '../../../../context'

import { styles } from './ModalTimeContent.styles'
import { useGlobalContext } from '@app/hooks'

export const ModalTimeContent: FC = memo(() => {
	const { t } = useTranslation()
	const { theme, locale, globalStyleProps } = useGlobalContext()
	const {
		form,
		mapOfRemindersToShow,

		changeTimeHandler,

		openReminderModal,
		closeReminderModal,
	} = useContext(MedicineFormContext)

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const getValue = useCallback(
		(time: TypeMedicineTime) =>
			new Date().setHours(time.hours, time.minutes, 0, 0),
		[],
	)

	const isTimePickerAvailableToShow = useCallback(
		(id: string) => IS_IOS || (IS_ANDROID && mapOfRemindersToShow[id]),
		[mapOfRemindersToShow],
	)

	const getDoseText = useCallback(
		(n: number) =>
			`${t('medicine:field.countPerUse')} : ${getNumberByLocale(n, locale)}`,
		[t, locale],
	)

	return (
		<Box style={style.wrapper}>
			{form.times.map((time, index) => (
				<TouchableWithoutFeedback key={uid()}>
					<Box style={style.item}>
						<Box style={style.content}>
							<Box style={style.info}>
								<Icon
									name={EnumIconName.bell}
									color={globalStyleProps.style.color.invert}
									size={18}
								/>

								<Text
									fontSize="lg"
									numberOfLines={1}
									color={globalStyleProps.style.color.invert}>
									{getDoseText(index + 1)}
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
									title={getDoseText(index + 1)}
									mode={EnumDateMode.time}
									theme={theme}
									locale={locale}
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

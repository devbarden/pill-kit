import DateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import {
	Fragment,
	FC,
	memo,
	useMemo,
	useState,
	useContext,
	useCallback,
} from 'react'
import { TimerPickerModal } from 'react-native-timer-picker'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
import {
	Pressable,
	TouchableWithoutFeedback,
	PressableStateCallbackType,
} from 'react-native'
import { Box, Text } from 'native-base'

import { uid } from '@app/utils'
import { Icon } from '@app/components'
import { TypeMedicineTime } from '@app/types'
import { IS_ANDROID, IS_IOS } from '@app/constants'
import { EnumColor, EnumIconName } from '@app/enums'

import { MedicineFormContext } from '../../../../context'

import { styles } from './ModalTimeContent.styles'

export const ModalTimeContent: FC = memo(() => {
	const { t } = useTranslation()
	const { form, changeIOSTimeHandler, changeAndroidTimeHandler } =
		useContext(MedicineFormContext)

	const initialMapOfTimesToShow = useMemo(
		() => form.times.reduce((acc, { id }) => ({ ...acc, [id]: false }), {}),
		[form.times],
	)

	const getValue = useCallback(
		(time: TypeMedicineTime) =>
			new Date().setHours(time.hours, time.minutes, 0, 0),
		[],
	)

	const [mapOfTimesToShow, setMapOfTimesToShow] = useState<
		Record<string, boolean>
	>(initialMapOfTimesToShow)

	const openTimeModalHandler = useCallback((id: string) => {
		setMapOfTimesToShow((prev) => ({ ...prev, [id]: true }))
	}, [])

	const closeTimeModalHandler = useCallback((id: string) => {
		setMapOfTimesToShow((prev) => ({ ...prev, [id]: false }))
	}, [])

	const setIsVisibleHandler = useCallback((id: string, value: boolean) => {
		setMapOfTimesToShow((prev) => ({ ...prev, [id]: value }))
	}, [])

	const getStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			{
				borderRadius: 6,
				paddingVertical: 4,
				paddingHorizontal: 8,
				backgroundColor: pressed ? EnumColor.transparentGrey : EnumColor.grey,
			},
		],
		[],
	)

	return (
		<Box style={styles.wrapper}>
			{form.times.map((time, index) => {
				const { id, hours, minutes } = time

				return (
					<TouchableWithoutFeedback key={uid()}>
						<Box style={styles.item}>
							<Box style={styles.content}>
								<Box style={styles.info}>
									<Icon name={EnumIconName.bell} size={18} />

									<Text fontSize="lg" numberOfLines={1}>
										{t('medicine:field.countPerUse')}: {index + 1}
									</Text>
								</Box>

								{IS_IOS && (
									<DateTimePicker
										mode="time"
										value={new Date(getValue(time))}
										onChange={(event: DateTimePickerEvent, date?: Date) =>
											changeIOSTimeHandler(time, date)
										}
									/>
								)}

								{IS_ANDROID && (
									<Fragment>
										<Pressable
											onPress={() => openTimeModalHandler(id)}
											style={getStyles}>
											<Text>
												{hours < 10 ? `0${hours}` : hours}:
												{minutes < 10 ? `0${minutes}` : minutes}
											</Text>
										</Pressable>

										<TimerPickerModal
											hideSeconds
											hideCancelButton
											closeOnOverlayPress
											hourLabel=""
											minuteLabel=""
											confirmButtonText={t('component:button.save')}
											visible={mapOfTimesToShow[id]}
											initialHours={hours}
											initialMinutes={minutes}
											setIsVisible={(value) => setIsVisibleHandler(id, value)}
											onConfirm={({ hours, minutes }) => {
												changeAndroidTimeHandler({ id, hours, minutes })
												closeTimeModalHandler(id)
											}}
											onCancel={() => closeTimeModalHandler(id)}
											LinearGradient={LinearGradient}
											styles={{
												theme: 'light',
												confirmButton: {
													borderWidth: 0,
													color: EnumColor.white,
													backgroundColor: EnumColor.red,
												},
												pickerContainer: {
													marginRight: 0,
												},
											}}
										/>
									</Fragment>
								)}
							</Box>
						</Box>
					</TouchableWithoutFeedback>
				)
			})}
		</Box>
	)
})

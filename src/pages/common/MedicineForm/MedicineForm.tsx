import DateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { FC, memo, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Input, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { MedicineWithoutId, ROUTES } from '@app/types'
import { Form, Switch, Select, Button } from '@app/components'
import { MedicineType, medicineTypesSelectItems } from '@app/constants'
import { removeExtraMarksFromNumber, addWeeks, removeWeeks } from '@app/utils'

import { styles } from './MedicineForm.styles'

interface Props {
	data: MedicineWithoutId
	submitHandler: (medicine: MedicineWithoutId) => void
	isSubmitting: boolean
}

export const MedicineForm: FC<Props> = memo(
	({ data, submitHandler, isSubmitting }) => {
		const { t } = useTranslation()
		const { navigate } = useNavigation()

		const [form, setForm] = useState<MedicineWithoutId>(data)

		const backHandler = useCallback(() => {
			navigate(ROUTES.HOME)
		}, [navigate])

		const changeNameHandler = useCallback((name: string) => {
			setForm((prev) => ({ ...prev, name }))
		}, [])

		const notifySwitchToggle = useCallback(() => {
			setForm((prev) => ({ ...prev, notification: !prev.notification }))
		}, [])

		const typeChangeHandler = useCallback((type: string) => {
			setForm((prev) => ({ ...prev, type: type as MedicineType }))
		}, [])

		const changeCountPerUseHandler = useCallback((value: string) => {
			setForm((prev) => ({
				...prev,
				countPerUse: removeExtraMarksFromNumber(value),
			}))
		}, [])

		const changeCountPerDayHandler = useCallback((value: string) => {
			setForm((prev) => ({
				...prev,
				countPerDay: removeExtraMarksFromNumber(value),
			}))
		}, [])

		const changeStartDateHandler = useCallback(
			(event: DateTimePickerEvent, date?: Date) => {
				if (!date) return

				const startDate = date.getTime()

				setForm((prev) => ({
					...prev,
					startDate,
					endDate: startDate > prev.endDate ? addWeeks(date, 2) : prev.endDate,
				}))
			},
			[],
		)

		const changeEndDateHandler = useCallback(
			(event: DateTimePickerEvent, date?: Date) => {
				if (!date) return

				const endDate = date.getTime()

				setForm((prev) => ({
					...prev,
					startDate:
						endDate < prev.startDate ? removeWeeks(date, 2) : prev.startDate,
					endDate,
				}))
			},
			[],
		)

		const saveHandler = useCallback(async () => {
			await submitHandler(form)

			backHandler()
		}, [submitHandler, form, backHandler])

		return (
			<>
				<Form.Wrapper>
					<Form.Item name="Name">
						<Input
							isFullWidth
							maxLength={25}
							value={form.name}
							onChangeText={changeNameHandler}
							variant="unstyled"
							placeholder="Required"
							style={styles.componentText}
						/>
					</Form.Item>

					<Form.Separator />

					<Form.Item name="Type">
						<Select
							items={medicineTypesSelectItems}
							selected={form.type}
							onSelect={typeChangeHandler}
						/>
					</Form.Item>
				</Form.Wrapper>

				<Form.Wrapper>
					<Form.Item name="Count">
						<Input
							isFullWidth
							value={form.countPerUse}
							maxLength={5}
							onChangeText={changeCountPerUseHandler}
							variant="unstyled"
							keyboardType="number-pad"
							placeholder="Required"
							style={styles.componentText}
						/>
					</Form.Item>

					<Form.Separator />

					<Form.Item name="Per day">
						<Input
							isFullWidth
							value={form.countPerDay}
							maxLength={1}
							onChangeText={changeCountPerDayHandler}
							variant="unstyled"
							keyboardType="number-pad"
							placeholder="Required"
							style={styles.componentText}
						/>
					</Form.Item>
				</Form.Wrapper>

				<Form.Wrapper>
					<Form.Item name="Start date">
						<DateTimePicker
							mode="date"
							minimumDate={new Date()}
							value={new Date(form.startDate)}
							onChange={changeStartDateHandler}
						/>
					</Form.Item>

					<Form.Separator />

					<Form.Item name="End date">
						<DateTimePicker
							mode="date"
							minimumDate={new Date()}
							value={new Date(form.endDate)}
							onChange={changeEndDateHandler}
						/>
					</Form.Item>
				</Form.Wrapper>

				<Form.Wrapper>
					<Form.Item name="Notification">
						<Switch
							isChecked={form.notification}
							onToggle={notifySwitchToggle}
						/>
					</Form.Item>
				</Form.Wrapper>

				<HStack style={styles.actions}>
					<Button disabled={isSubmitting} onPress={backHandler}>
						{t('components:btn.cancel')}
					</Button>
					<Button disabled={isSubmitting} onPress={saveHandler}>
						{t('components:btn.save')}
					</Button>
				</HStack>
			</>
		)
	},
)

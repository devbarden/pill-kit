import DateTimePicker from '@react-native-community/datetimepicker'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Input, HStack, Text, ScrollView } from 'native-base'

import { Form, Switch, Select, Button } from '@app/components'
import { medicineTypesSelectItems } from '@app/constants'

import { MedicineFormProps } from './types'
import { useMedicineForm } from './useMedicineForm'
import { styles } from './MedicineForm.styles'

export const MedicineForm: FC<MedicineFormProps> = memo(
	({ title, data, submitHandler, isSubmitting }) => {
		const { t } = useTranslation()
		const {
			form,
			changeNameHandler,
			typeChangeHandler,
			changeCountPerUseHandler,
			changeCountPerDayHandler,
			changeStartDateHandler,
			changeEndDateHandler,
			notifySwitchToggle,
			saveHandler,
			backHandler,
			isCancelBtnDisabled,
			isSaveBtnDisabled,
		} = useMedicineForm({ data, submitHandler, isSubmitting })

		return (
			<Box style={styles.wrapper}>
				<Text style={styles.title}>{title}</Text>

				<ScrollView>
					<Box style={styles.fieldsWrapper}>
						<Form.Wrapper>
							<Form.Item name="Name">
								<Input
									isFullWidth
									maxLength={25}
									value={form.name}
									onChangeText={changeNameHandler}
									variant="unstyled"
									placeholder="Required"
									style={styles.input}
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
									style={styles.input}
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
									style={styles.input}
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
					</Box>
				</ScrollView>

				<HStack style={styles.actions}>
					<Button disabled={isCancelBtnDisabled} onPress={backHandler}>
						{t('components:btn.cancel')}
					</Button>
					<Button disabled={isSaveBtnDisabled} onPress={saveHandler}>
						{t('components:btn.save')}
					</Button>
				</HStack>
			</Box>
		)
	},
)

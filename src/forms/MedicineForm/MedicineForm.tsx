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
							<Form.Item name={t('medicineForm:name')}>
								<Input
									isFullWidth
									variant="unstyled"
									maxLength={25}
									value={form.name}
									onChangeText={changeNameHandler}
									placeholder={t('components:input.placeholder.required')}
									style={styles.input}
								/>
							</Form.Item>
							<Form.Separator />
							<Form.Item name={t('medicineForm:type')}>
								<Select
									items={medicineTypesSelectItems}
									selected={form.type}
									onSelect={typeChangeHandler}
								/>
							</Form.Item>
						</Form.Wrapper>

						<Form.Wrapper>
							<Form.Item name={t('medicineForm:count')}>
								<Input
									isFullWidth
									variant="unstyled"
									keyboardType="number-pad"
									value={form.countPerUse}
									maxLength={5}
									onChangeText={changeCountPerUseHandler}
									placeholder={t('components:input.placeholder.required')}
									style={styles.input}
								/>
							</Form.Item>
							<Form.Separator />
							<Form.Item name={t('medicineForm:perDay')}>
								<Input
									isFullWidth
									variant="unstyled"
									keyboardType="number-pad"
									value={form.countPerDay}
									maxLength={1}
									onChangeText={changeCountPerDayHandler}
									placeholder={t('components:input.placeholder.required')}
									style={styles.input}
								/>
							</Form.Item>
						</Form.Wrapper>

						<Form.Wrapper>
							<Form.Item name={t('medicineForm:startDate')}>
								<DateTimePicker
									mode="date"
									minimumDate={new Date()}
									value={new Date(form.startDate)}
									onChange={changeStartDateHandler}
								/>
							</Form.Item>
							<Form.Separator />
							<Form.Item name={t('medicineForm:endDate')}>
								<DateTimePicker
									mode="date"
									minimumDate={new Date()}
									value={new Date(form.endDate)}
									onChange={changeEndDateHandler}
								/>
							</Form.Item>
						</Form.Wrapper>

						<Form.Wrapper>
							<Form.Item name={t('medicineForm:notification')}>
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

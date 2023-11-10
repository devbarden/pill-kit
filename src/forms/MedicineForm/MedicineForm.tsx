import DateTimePicker from '@react-native-community/datetimepicker'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useSelectItems } from '@app/hooks'
import { MedicineWithoutId } from '@app/types'
import { Form, Switch, Button, ScrollContent } from '@app/components'
import { MEDICINE_TYPE, MEDICINE_TYPE_TRANSLATION_PATH } from '@app/constants'

import { useMedicineForm } from './hooks'

export interface MedicineFormProps {
	data: MedicineWithoutId
	submitHandler: (medicine: MedicineWithoutId) => void
	isSubmitting: boolean
}

export const MedicineForm: FC<MedicineFormProps> = memo(
	({ data, submitHandler, isSubmitting }) => {
		const { t, i18n } = useTranslation()
		const { items: medicineTypesSelectItems } = useSelectItems(
			MEDICINE_TYPE,
			MEDICINE_TYPE_TRANSLATION_PATH,
		)
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
			<ScrollContent>
				<Form.Wrapper>
					<Form.Item name={t('medicineForm:name')}>
						<Form.Input
							maxLength={25}
							value={form.name}
							onChangeText={changeNameHandler}
							placeholder={t('components:input.placeholder.required')}
						/>
					</Form.Item>
					<Form.Separator />
					<Form.Item name={t('medicineForm:type')}>
						<Form.Select
							items={medicineTypesSelectItems}
							selected={form.type}
							onSelect={typeChangeHandler}
						/>
					</Form.Item>
				</Form.Wrapper>

				<Form.Wrapper>
					<Form.Item name={t('medicineForm:count')}>
						<Form.Input
							keyboardType="number-pad"
							value={form.countPerUse}
							maxLength={5}
							onChangeText={changeCountPerUseHandler}
							placeholder={t('components:input.placeholder.required')}
						/>
					</Form.Item>
					<Form.Separator />
					<Form.Item name={t('medicineForm:perDay')}>
						<Form.Input
							keyboardType="number-pad"
							value={form.countPerDay}
							maxLength={1}
							onChangeText={changeCountPerDayHandler}
							placeholder={t('components:input.placeholder.required')}
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
							locale={i18n.language}
						/>
					</Form.Item>
					<Form.Separator />
					<Form.Item name={t('medicineForm:endDate')}>
						<DateTimePicker
							mode="date"
							minimumDate={new Date()}
							value={new Date(form.endDate)}
							onChange={changeEndDateHandler}
							locale={i18n.language}
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

				<Button disabled={isCancelBtnDisabled} onPress={backHandler}>
					{t('components:btn.cancel')}
				</Button>
				<Button disabled={isSaveBtnDisabled} onPress={saveHandler}>
					{t('components:btn.save')}
				</Button>
			</ScrollContent>
		)
	},
)

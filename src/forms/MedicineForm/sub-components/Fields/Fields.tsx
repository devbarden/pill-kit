import DateTimePicker from '@react-native-community/datetimepicker'
import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { EnumIconName } from '@app/enums'
import { Form, Switch } from '@app/components'
import { MEDICINE_TYPE_TRANSLATION_PATH } from '@app/constants'

import { MedicineFormContext } from '../../context'

export const Fields: FC = memo(() => {
	const { t, i18n } = useTranslation()
	const {
		openNameModal,
		openTypeModal,
		openCountPerUseModal,
		openCountPerDayModal,

		form,

		changeStartDateHandler,
		changeEndDateHandler,
		changeSwitchToggleHandler,
	} = useContext(MedicineFormContext)

	return (
		<Fragment>
			<Form.Wrapper>
				<Form.PressableItem
					text={t('medicineForm:name')}
					iconName={EnumIconName.text}
					handler={openNameModal}
					value={form.name}
				/>

				<Form.Separator />

				<Form.PressableItem
					text={t('medicineForm:type')}
					iconName={EnumIconName.pill}
					handler={openTypeModal}
					value={t(`${MEDICINE_TYPE_TRANSLATION_PATH}.${form.type}`)}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.PressableItem
					text={t('medicineForm:count')}
					iconName={EnumIconName.count}
					handler={openCountPerUseModal}
					value={form.countPerUse}
				/>

				<Form.Separator />

				<Form.PressableItem
					text={t('medicineForm:perDay')}
					iconName={EnumIconName.count}
					handler={openCountPerDayModal}
					value={form.countPerDay}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.CustomItem
					text={t('medicineForm:startDate')}
					iconName={EnumIconName.calendar}>
					<DateTimePicker
						mode="date"
						value={new Date(form.startDate)}
						onChange={changeStartDateHandler}
						locale={i18n.language}
					/>
				</Form.CustomItem>

				<Form.Separator />

				<Form.CustomItem
					text={t('medicineForm:endDate')}
					iconName={EnumIconName.calendar}>
					<DateTimePicker
						mode="date"
						value={new Date(form.endDate)}
						onChange={changeEndDateHandler}
						locale={i18n.language}
					/>
				</Form.CustomItem>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.CustomItem
					text={t('medicineForm:notification')}
					iconName={EnumIconName.bell}>
					<Switch
						isChecked={form.notification}
						onToggle={changeSwitchToggleHandler}
					/>
				</Form.CustomItem>
			</Form.Wrapper>
		</Fragment>
	)
})

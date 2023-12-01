import DateTimePicker from '@react-native-community/datetimepicker'
import { FC, Fragment, memo, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Form, Icon, Switch } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { MedicineFormContext } from '../../context'

export const Fields: FC = memo(() => {
	const { t, i18n } = useTranslation()
	const {
		openNameModal,
		openTypeModal,
		openCountPerUseModal,
		openCountPerDayModal,

		form,

		getIsNeedToFillCountPerUse,

		changeStartDateHandler,
		changeEndDateHandler,
		changeSwitchToggleHandler,
	} = useContext(MedicineFormContext)
	const {
		name,
		type,
		countPerUse,
		countPerDay,
		startDate,
		endDate,
		notification,
	} = useMemo(() => form, [form])

	return (
		<Fragment>
			<Form.Wrapper>
				<Form.PressableItem
					text={t('medicineForm:name')}
					iconName={EnumIconName.text}
					handler={openNameModal}
					value={name}
				/>

				<Form.Separator />

				<Form.PressableItem
					text={t('medicineForm:type')}
					iconName={EnumIconName.medical}
					handler={openTypeModal}
					value={
						<Icon
							name={EnumIconName[type]}
							color={EnumColor.darkGrey}
							size={20}
						/>
					}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Fragment>
					{getIsNeedToFillCountPerUse(type) && (
						<Fragment>
							<Form.PressableItem
								text={t('medicineForm:count')}
								iconName={EnumIconName.count}
								handler={openCountPerUseModal}
								value={countPerUse}
							/>

							<Form.Separator />
						</Fragment>
					)}
				</Fragment>

				<Form.PressableItem
					text={t('medicineForm:perDay')}
					iconName={EnumIconName.count}
					handler={openCountPerDayModal}
					value={countPerDay}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.CustomItem
					text={t('medicineForm:startDate')}
					iconName={EnumIconName.calendar}>
					<DateTimePicker
						mode="date"
						value={new Date(startDate)}
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
						value={new Date(endDate)}
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
						isChecked={notification}
						onToggle={changeSwitchToggleHandler}
					/>
				</Form.CustomItem>
			</Form.Wrapper>
		</Fragment>
	)
})

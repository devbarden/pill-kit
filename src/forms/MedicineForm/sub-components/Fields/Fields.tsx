import DateTimePicker from '@react-native-community/datetimepicker'
import { FC, Fragment, memo, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { medicineUtils } from '@app/utils'
import { IS_IOS, IS_ANDROID } from '@app/constants'
import { EnumColor, EnumIconName } from '@app/enums'
import { Form, Icon, Switch, NotificationLabel } from '@app/components'

import { CalendarPress, ColorBox } from './sub-components'
import { MedicineFormContext } from '../../context'

export const Fields: FC = memo(() => {
	const { t, i18n } = useTranslation()

	const {
		openNameModal,
		openTypeModal,
		openCountPerUseModal,
		openCountPerDayModal,
		openTimeModal,
		openColorModal,

		form,

		isNeedToShowStartDateCalendar,
		isNeedToShowEndDateCalendar,

		openStartDateCalendar,
		openEndDateCalendar,

		getCountPerUseValueByType,
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

	const { isPast, isFuture } = useMemo(
		() => medicineUtils.getMedicineStatusByDate(form),
		[form],
	)

	return (
		<Fragment>
			<Form.Wrapper>
				<Form.PressableItem
					text={t('medicine:field.name')}
					iconName={EnumIconName.text}
					handler={openNameModal}
					value={name}
				/>

				<Form.Separator />

				<Form.PressableItem
					text={t('medicine:field.type')}
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
								text={t('medicine:field.countPerUse')}
								iconName={EnumIconName.count}
								handler={openCountPerUseModal}
								value={getCountPerUseValueByType(countPerUse, type)}
							/>

							<Form.Separator />
						</Fragment>
					)}
				</Fragment>

				<Form.PressableItem
					isValueQuarterWidth
					text={t('medicine:field.countPerDay')}
					iconName={EnumIconName.count}
					handler={openCountPerDayModal}
					value={countPerDay}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.CustomItem
					text={t('medicine:field.startDate')}
					iconName={EnumIconName.calendar}>
					<Fragment>
						{IS_IOS && (
							<DateTimePicker
								mode="date"
								value={new Date(startDate)}
								onChange={changeStartDateHandler}
								locale={i18n.language}
							/>
						)}

						{IS_ANDROID && (
							<Fragment>
								{isNeedToShowStartDateCalendar ? (
									<DateTimePicker
										mode="date"
										value={new Date(startDate)}
										onChange={changeStartDateHandler}
										locale={i18n.language}
									/>
								) : (
									<CalendarPress
										value={startDate}
										handler={openStartDateCalendar}
									/>
								)}
							</Fragment>
						)}
					</Fragment>
				</Form.CustomItem>

				<Form.Separator />

				<Form.CustomItem
					text={t('medicine:field.endDate')}
					iconName={EnumIconName.calendar}>
					<Fragment>
						{IS_IOS && (
							<DateTimePicker
								mode="date"
								value={new Date(endDate)}
								onChange={changeEndDateHandler}
								locale={i18n.language}
							/>
						)}

						{IS_ANDROID && (
							<Fragment>
								{isNeedToShowEndDateCalendar ? (
									<DateTimePicker
										mode="date"
										value={new Date(endDate)}
										onChange={changeEndDateHandler}
										locale={i18n.language}
									/>
								) : (
									<CalendarPress
										value={endDate}
										handler={openEndDateCalendar}
									/>
								)}
							</Fragment>
						)}
					</Fragment>
				</Form.CustomItem>
			</Form.Wrapper>

			{isPast && (
				<NotificationLabel
					iconName={EnumIconName.warning}
					iconColor={EnumColor.yellow}
					text={t('medicine:warning.past')}
				/>
			)}

			{isFuture && (
				<NotificationLabel
					iconName={EnumIconName.warning}
					iconColor={EnumColor.yellow}
					text={t('medicine:warning.future')}
				/>
			)}

			<Form.Wrapper>
				<Form.CustomItem
					text={t('medicine:field.notification')}
					iconName={EnumIconName.bell}>
					<Switch
						isChecked={notification}
						onToggle={changeSwitchToggleHandler}
					/>
				</Form.CustomItem>

				<Form.Separator />

				<Form.PressableItem
					text={t('medicine:field.times')}
					iconName={EnumIconName.time}
					handler={openTimeModal}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.PressableItem
					withoutChevronRight
					text={t('medicine:field.color')}
					iconName={EnumIconName.paint}
					handler={openColorModal}
					value={<ColorBox />}
				/>
			</Form.Wrapper>
		</Fragment>
	)
})

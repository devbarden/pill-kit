import DatePicker from 'react-native-date-picker'
import { FC, Fragment, memo, useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useGlobalContext } from '@app/hooks'
import { IS_ANDROID, IS_IOS } from '@app/constants'
import { getNumberByLocale, medicineUtils } from '@app/utils'
import { EnumColor, EnumDateMode, EnumIconName } from '@app/enums'
import {
	Form,
	Icon,
	Switch,
	DateTimePress,
	NotificationLabel,
} from '@app/components'

import { ColorBox } from './sub-components'
import { MedicineFormContext } from '../../context'

export const Fields: FC = memo(() => {
	const { t } = useTranslation()
	const { theme, locale } = useGlobalContext()
	const {
		openNameModal,
		openTypeModal,
		openCountPerUseModal,
		openCountPerDayModal,
		openTimeModal,
		openColorModal,
		openStartDateModal,
		closeStartDateModal,
		openEndDateModal,
		closeEndDateModal,

		form,

		isNeedToShowStartDateModal,
		isNeedToShowEndDateModal,

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

	const isAvailableToShowDateModalByDevice = useCallback(
		(availability: boolean) => IS_IOS || (IS_ANDROID && availability),
		[],
	)

	const isStartDateModalAvailableToShow = useMemo(
		() => isAvailableToShowDateModalByDevice(isNeedToShowStartDateModal),
		[isAvailableToShowDateModalByDevice, isNeedToShowStartDateModal],
	)

	const isEndDateModalAvailableToShow = useMemo(
		() => isAvailableToShowDateModalByDevice(isNeedToShowEndDateModal),
		[isAvailableToShowDateModalByDevice, isNeedToShowEndDateModal],
	)

	const countPerUseByLocale = useMemo(
		() => getCountPerUseValueByType(countPerUse, type),
		[getCountPerUseValueByType, countPerUse, type],
	)

	const countPerDayByLocale = useMemo(
		() => getNumberByLocale(countPerDay, locale),
		[countPerDay, locale],
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
								isValueQuarterWidth
								text={t('medicine:field.countPerUse')}
								iconName={EnumIconName.count}
								handler={openCountPerUseModal}
								value={countPerUseByLocale}
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
					value={countPerDayByLocale}
				/>
			</Form.Wrapper>

			<Form.Wrapper>
				<Form.CustomItem
					text={t('medicine:field.startDate')}
					iconName={EnumIconName.calendar}>
					<Fragment>
						{isStartDateModalAvailableToShow && (
							<DatePicker
								modal
								mode={EnumDateMode.date}
								is24hourSource="locale"
								androidVariant="iosClone"
								title={t('medicine:field.startDate')}
								open={isNeedToShowStartDateModal}
								date={new Date(startDate)}
								onConfirm={changeStartDateHandler}
								onCancel={closeStartDateModal}
								theme={theme}
								locale={locale}
								confirmText={t('component:button.save')}
								cancelText={t('component:button.cancel')}
							/>
						)}

						<DateTimePress value={startDate} handler={openStartDateModal} />
					</Fragment>
				</Form.CustomItem>

				<Form.Separator />

				<Form.CustomItem
					text={t('medicine:field.endDate')}
					iconName={EnumIconName.calendar}>
					<Fragment>
						{isEndDateModalAvailableToShow && (
							<DatePicker
								modal
								is24hourSource="locale"
								androidVariant="iosClone"
								title={t('medicine:field.endDate')}
								mode={EnumDateMode.date}
								open={isNeedToShowEndDateModal}
								date={new Date(endDate)}
								onConfirm={changeEndDateHandler}
								onCancel={closeEndDateModal}
								theme={theme}
								locale={locale}
								confirmText={t('component:button.save')}
								cancelText={t('component:button.cancel')}
							/>
						)}

						<DateTimePress value={endDate} handler={openEndDateModal} />
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
